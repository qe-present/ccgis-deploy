<script setup>
import {computed, createApp, ref} from "vue";
import {useDataStore} from "stores/data-store.js";
import {useResultStore} from "stores/result-store.js";
import {useQuasar} from "quasar";
import {getBoundsData, getNoRangeData, getPolygonData} from "../../utils/GetQuery.js";
import Result from "components/query/Result.vue";
import MarkerPopup from "components/MarkerPopup.vue";
import GetInfo from "src/utils/GetInfo.js";
import {match} from 'pinyin-pro';
import {hospitalName, prakName, schoolName} from "src/constant/query.js";
import {NoRange} from "src/constant/data.js";
import {control, controlMarker} from "src/constant/measure.js";
import getCircle from "src/utils/GetCircle.js";

const allSuggestions = computed(() => {
  switch (type.value) {
    case '医院':
      return hospitalName;
    case '学校':
      return schoolName;
    default:
      return prakName;
  }
});

const dataStore = useDataStore()
const resultStore = useResultStore()
const type = ref('医院')
const key = ref('')
const rangeType = ref('全部')
const radius = ref(null)
const $q = useQuasar()
const showResult = ref(false)
const isFocus = ref(false)
let tableData = ref([])


let place, res, resultLayer, oldLayer, resultLayerList, icon, map;

let options = [
  '医院', '学校', '公园'
]
let rangeOptions = [
  '全部', '多边形', '圆'
]

const getIcon = (name) => {
  return L.icon({
    iconUrl: `marker/${name}.png`,
    iconSize: [20, 20], // size of the icon
  });
}
// 获取英文名称
const getEnglishName = (name) => {
  switch (name) {
    case '医院':
      return 'Hospital'
    case '学校':
      return 'School'
    case '公园':
      return 'Park'
    default:
      return false
  }
}

// 处理查询结果
const handleResponse = (res) => {
  tableData.value = []
  if (resultStore.getLength() > 0) {
    resultStore.resultLayer.clearLayers()
  }
  showResult.value = true
  if (res.length === 0) {
    $q.notify({
      type: 'negative',
      message: '未找到相关结果'
    })
    return
  }
  let resultLayer = resultStore.getResultLayer
  res.forEach(function (item) {
    let lat = item.geometry.coordinates[1]
    let lng = item.geometry.coordinates[0]
    let content = item.properties.name || item.properties.NAME
    let marker = L.marker([lat, lng], {icon: icon}).addTo(resultLayer)
    marker.on('click', async function (e) {
      let contentInfo = await GetInfo(content)
      const contents = {content:content,name:contentInfo}; // 你的marker数据
      const markerPopupComponent = createApp(MarkerPopup, {contents});
      const div = document.createElement('div');
      markerPopupComponent.mount(div);
      this.bindPopup(div);
      this.openPopup()
    })
    tableData.value.push({
      id: marker._leaflet_id,
      lat: marker._latlng.lat,
      lng: marker._latlng.lng,
      content: content
    })
  })
}

// 点击确定按钮
const onSubmit = async () => {
  let sql = ''
  let typeValue = type.value // 医院、学校、公园
  let keyValue = key.value  // 输入的关键字
  let rangeTypeValue = rangeType.value  // 全部、多边形、圆

  let radiusValue = radius.value  // 圆形半径
  if (rangeTypeValue === NoRange) {
    dataStore.type = NoRange
    if (keyValue.trim() === '') {
      sql = ''
    } else {
      sql = 'name like' + '\'%' + keyValue.trim() + '%\''
    }
  } else {
    sql = 'name like' + '\'%' + keyValue.trim() + '%\''
  }
  let isAvailable = dataStore.isAvailable(rangeTypeValue);

  if (!isAvailable) {
    $q.notify({
      type: 'negative',
      message: '未选择有效范围或范围不合法'
    })
    return;
  }
  place = getEnglishName(typeValue)
  icon = getIcon(place)
  switch (dataStore.type) {
    case 'Rectangle':
      res = await getBoundsData(dataStore.bounds, place, sql)
      handleResponse(res)
      break;
    case 'Polygon':
      res = await getPolygonData(dataStore.polygon, place, sql)
      handleResponse(res)
      break;
    case NoRange:
      res = await getNoRangeData(sql, place)
      handleResponse(res)
      break;
    case 'Marker':
      if (dataStore.circleLayer) {
        dataStore.map.removeLayer(dataStore.circleLayer)
      }
      if (dataStore.map.hasLayer(dataStore.polygon)) {
        dataStore.map.removeLayer(dataStore.polygon)
      }
      let geo = await getCircle(radiusValue)
      dataStore.circleLayer = L.geoJSON(geo).addTo(dataStore.map);
      res = await getPolygonData(dataStore.circleLayer, place, sql)
      handleResponse(res)
      break;
  }
}
// 点击重置按钮
const onReset = () => {
  type.value = '医院'
  rangeType.value = '全部'
  radius.value = null
  key.value = null
  showResult.value = false
  if (resultStore.getLength() > 0) {
    dataStore.map.removeLayer(resultStore.resultLayer)
    dataStore.map.removeLayer(dataStore.polygon)
  }
}
// 点击查询结果按钮
const handleQueryResult = () => {
  if (resultStore.getLength() > 0) {
    showResult.value = true
  } else {
    $q.notify({
      type: 'negative',
      message: '未查询到结果',
      position: 'bottom-right'
    })
  }

}

const filteredSuggestions = computed(() => {
  return allSuggestions.value.filter(suggestion =>
    match(suggestion, key.value) && // 使用 pinyin-pro 匹配拼音
    suggestion.toLowerCase() !== key.value.toLowerCase() // 忽略大小写
  );
});

// 用户选择建议时调用的方法
const selectSuggestion = (suggestion) => {
  key.value = suggestion; // 将选中的建议设置为输入框的值
};
// 选择范围类型时触发
const handleChange = (value) => {
  if (value === '全部') {
    dataStore.map.pm.removeControls()
  }
  if (value === '多边形') {
    dataStore.map.pm.addControls(control)
  }
  if (value === '圆') {
    $q.notify({
      type: 'info',
      message: '请在地图上点击圆心,并输入半径',
      position: 'top-left',
      timeout: 1000
    })
    dataStore.map.pm.addControls(controlMarker)
  }
}

</script>

<template>
  <div class="q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-select color="lime-14" bg-color="blue" filled v-model="type"
                :options="options"
                label="选择服务类型"
                :rules="[v => v !== null || '请选择服务类型']"
                transition-show="flip-up"
                transition-hide="flip-down"
                emit-value
      >
        <template v-slot:prepend>
          <q-icon name="event"/>
        </template>
      </q-select>
      <div>
        <q-input filled
                 bg-color="blue"
                 v-model="key"
                 label="输入查询关键字"
                 @focus="isFocus = true"
                 @blur="isFocus = false"
        >
          <template v-slot:prepend>
            <q-icon name="event"/>
          </template>
          <template v-slot:default>
            <ul v-show="filteredSuggestions.length > 0 && isFocus"
                class="suggestions-list">
              <li v-for="(suggestion, index) in filteredSuggestions" :key="index" @click="selectSuggestion(suggestion)"
                  class="suggestion-item">
                {{ suggestion }}
              </li>
            </ul>
          </template>
        </q-input>
      </div>
      <q-select color="lime-14"
                bg-color="blue"
                filled v-model="rangeType"
                :options="rangeOptions"
                label="选择范围类型"
                :rules="[v => v !== null || '请选择范围类型']"
                transition-show="flip-up"
                transition-hide="flip-down"
                @update:model-value="handleChange"
      >
        <template v-slot:prepend>
          <q-icon name="event"/>
        </template>
      </q-select>
      <q-input color="lime-11" bg-color="green" filled
               v-model.number="radius"
               type="number"
               label="输入圆形的半径"
               v-if="rangeType==='圆'"
               :rules="[v => v > 0 || '半径必须大于0']"
      >
        <template v-slot:prepend>
          <q-icon name="event"/>
        </template>
      </q-input>
      <div>
        <q-btn label="确定" type="submit" color="primary"/>
        <q-btn label="重置" type="reset" color="warning" class="q-ml-sm"/>
        <q-btn style="background: #FF0080; color: white;margin: 0 20px;" label="查询结果" @click="handleQueryResult"/>
      </div>
    </q-form>
    <Result v-model:dialog="showResult" v-model:tableData="tableData"></Result>
  </div>

</template>

<style scoped>

.input-container {
  position: relative;
}

.suggestions-list {
  position: absolute;
  top: 100%; /* 使列表紧接输入框下方显示 */
  left: auto;
  width: auto; /* 可根据需要调整宽度 */
  z-index: 10; /* 确保列表在其他内容之上 */
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-height: 250px;
  overflow-y: auto;
  background-color: white; /* 设置背景色以覆盖下方内容 */
}

.suggestion-item {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.suggestion-item:hover {
  background-color: #f0f0f0;
}

.suggestion-item:active {
  background-color: #e0e0e0;
}

.suggestion-item + .suggestion-item {
  border-top: 1px solid #ddd; /* 添加每个项之间的边框 */
}
</style>
