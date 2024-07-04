<script setup>
import {computed, ref, watchEffect} from 'vue'
import getStationInfo from "src/utils/GetStatationInfo.js";
import {useTravelStore} from "stores/travel-store.js";
import {match} from 'pinyin-pro';
import {useQuasar} from "quasar";
import TravelTable from "components/Travel/TravelTable.vue";
import {busPoint} from 'src/constant/query';

const allSuggestions = ref(busPoint);
const $q = useQuasar()
const travelStore = useTravelStore()
const start = ref('')
const startSuggestions = ref()
const endSuggestions = ref()
defineProps({
  startPlaceHolder: {
    type: String,
    default: "请输入起点"
  },
  endPlaceHolder: {
    type: String,
    default: "请输入终点"
  }
})
const end = ref('')
const showStart = ref(false)
const showEnd = ref(false)
const tableData = ref([])
const flagStart = ref(false)
const flagEnd = ref(false)
let startResult = []
let endResult = []
let messgae = ''
let startSend = false
let endSend = false
watchEffect(() => {
  let sv=start.value
  startSend=true

})
watchEffect(() => {
  let ev=end.value
  endSend=true

})
const addPositionToMap = (result) => {
  let map = travelStore.map
  let markerLayer = travelStore.getMarkerLayer()
  markerLayer.clearLayers()
  result.forEach(item => {
    const marker = L.marker([item.position.y, item.position.x], {
      stopID: item.stopID,
      name: item.name,
    }).bindPopup(item.name).addTo(markerLayer)
    item.markerId = marker._leaflet_id
  })
  tableData.value = result;
}

const getStartInfo = async () => {
  travelStore.setStartSure(false)
  if (!start.value.trim()) {
    messgae = "请输入起始点";
    $q.notify({
      type: "negative",
      message: messgae,
      position: "top",
      timeout: 1000,
    });
    return;
  }
  if(startSend) {
    startResult = await getStationInfo(start.value)
    startSend=false
  }
  if (startResult.length >= 1) {
    flagStart.value = true;
    addPositionToMap(startResult)
    showStart.value = true;
  } else if (startResult.length === 0) {
    $q.notify({
      type: "negative",
      message: "未找到相关的位置",
      position: "top",
      timeout: 1000,
    });
  }

}
const getEndInfo = async () => {
  travelStore.setEndSure(false)
  if (!end.value.trim()) {
    messgae = "请输入终点";
    $q.notify({
      type: "negative",
      message: messgae,
      position: "top",
      timeout: 1000,
    });
    return;
  }
  if (endSend) {
    endResult = await getStationInfo(end.value)
    endSend=false
  }
  if (endResult.length >= 1) {
    flagEnd.value = true;
    addPositionToMap(endResult)
    showEnd.value = true;
  } else if (endResult.length === 0) {
    $q.notify({
      type: "negative",
      message: "未找到相关的位置",
      position: "top",
      timeout: 1000,
    });
  }
}
const getSuggestions = (input) => {

  return allSuggestions.value.filter(suggestion =>
    match(suggestion, input.value) && // 使用 pinyin-pro 匹配拼音
    suggestion.toLowerCase() !== input.value.toLowerCase() // 忽略大小写
  );
};
const filteredStartSuggestions = computed(() => getSuggestions(start));
const filteredEndSuggestions = computed(() => getSuggestions(end));
// 用户选择建议时调用的方法
const selectStartSuggestion = (suggestion) => {
  start.value = suggestion; // 将选中的建议设置为输入框的值
  startSuggestions.value = false; // 关闭建议列表

}
const selectEndSuggestion = (suggestion) => {
  end.value = suggestion; // 将选中的建议设置为输入框的值
  endSuggestions.value = false; // 关闭建议列表
}
</script>

<template>
  <q-item clickable v-ripple>
    <q-item-section avatar class="text-purple q-gutter-md">
      <q-icon name="mdi-hand-pointing-right"/>
    </q-item-section>
    <q-item-section>
      <q-input
        v-model="start"
        :placeholder="startPlaceHolder"
        v-if="!travelStore.getStartSure()"
        @focus="startSuggestions=true"
        @blur="startSuggestions=false"
      >
        <template v-slot:default>
          <ul v-show="filteredStartSuggestions.length > 0 && startSuggestions" class="suggestions-list">
            <li v-for="(suggestion, index) in filteredStartSuggestions" :key="`start-${index}`"
                @click="selectStartSuggestion(suggestion)" class="suggestion-item">
              {{ suggestion }}
            </li>
          </ul>
        </template>
      </q-input>
      <q-input type="text" :disable="true" v-if="travelStore.getStartSure()"
               v-model="travelStore.getStartName"></q-input>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple>
    <q-item-section avatar class="text-purple q-gutter-md">
      <q-icon name="fa-solid fa-house"/>
    </q-item-section>
    <q-item-section>
      <q-btn color="primary" label="出发点定位" @click="getStartInfo"></q-btn>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple>
    <q-item-section avatar class="text-purple q-gutter-md">
      <q-icon name="mdi-arrow-right-bold-circle-outline"/>
    </q-item-section>
    <q-item-section>
      <q-input
        v-model="end"
        :placeholder="endPlaceHolder"
        v-if="!travelStore.getEndSure()"
        @focus="endSuggestions=true"
        @blur="endSuggestions=false"
      >
        <template v-slot:default>
          <ul v-show="filteredEndSuggestions.length > 0 && endSuggestions" class="suggestions-list">
            <li v-for="(suggestion, index) in filteredEndSuggestions" :key="`end-${index}`"
                @click="selectEndSuggestion(suggestion)" class="suggestion-item">
              {{ suggestion }}
            </li>
          </ul>
        </template>
      </q-input>
      <q-input type="text" :disable="true" v-if="travelStore.getEndSure()" v-model="travelStore.getEndName"></q-input>
    </q-item-section>
  </q-item>
  <q-item clickable v-ripple>
    <q-item-section avatar class="text-purple q-gutter-md">
      <q-icon name="flight_takeoff"/>
    </q-item-section>
    <q-item-section>
      <q-btn color="primary" label="目的地定位" @click="getEndInfo"></q-btn>
    </q-item-section>
  </q-item>
  <TravelTable v-model:dialog="showStart" v-model:tableData="tableData" v-if="flagStart" v-model:flag="flagStart"
               :need="'Start'"></TravelTable>
  <TravelTable v-model:dialog="showEnd" v-model:tableData="tableData" v-if="flagEnd" v-model:flag="flagEnd"
               :need="'End'"></TravelTable>
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
  max-height: 150px;
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
