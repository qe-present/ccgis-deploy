<script setup>
import {ref,reactive} from 'vue'
import {useSettingStore} from "stores/setting-store.js";
import {changeUnit} from "src/utils/tool.js";
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";

const router = useRouter()
const $q = useQuasar()

const settingStore = useSettingStore()
let hex = ref('#000000')
let options= [
  '米',
  '千米',
]
let service=[
  '本地',
  '云端',
]
const serviceMap=ref(settingStore.serviceMap)
const width=ref(settingStore.rightDrawerWidth)
const map=reactive({
  unit:changeUnit(settingStore.map.unit),
  decimal:settingStore.map.decimal,
})

const save = () => {
  if(map.decimal<2||map.decimal>10){
    console.log('地图结果小数点位数必须在2-10之间')
    $q.notify({
      type: 'negative',
      message: '地图结果小数点位数必须在2-10之间',
      position: 'top',
      timeout: 1000,
    })
    map.decimal=settingStore.map.decimal
    return
  }
  settingStore.map.unit = changeUnit(map.unit)
  settingStore.map.decimal = map.decimal
  settingStore.serviceMap=serviceMap.value
  settingStore.rightDrawerWidth = width.value
  $q.notify({
    type: 'positive',
    message: '保存成功',
    position: 'top',
    timeout: 1000,
  })
  router.go(0)
}
const rangeOptions = [
  200, 300, 500,700
]
const handleChange = (val) => {
  width.value = val
}
</script>

<template>
  <div class="text-h2 text-center text-cyan-6">配置页面</div>
  <q-btn color="primary" label="保存并应用" @click="save"> </q-btn>
  <q-card class="my-card">
    <q-list>
      <q-item clickable>
        <q-item-section avatar>
          <div class="text-h6 text-light-blue-4">Supermap iServer 服务</div>
        </q-item-section>
        <q-item-section>
          <q-select rounded outlined v-model="serviceMap" :options="service" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-card>
  <q-card class="my-card">
    <q-list>
      <q-item clickable>
        <q-item-section avatar>
          <div class="text-h6 text-deep-orange-4">地图结果单位</div>
        </q-item-section>
        <q-item-section>
          <q-select rounded outlined v-model="map.unit" :options="options" />
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <div class="text-h6 text-deep-orange-4">地图结果小数点位数</div>
        </q-item-section>
        <q-item-section>
          <q-input rounded outlined v-model.number="map.decimal" type="number" min="0" max="10" maxlength="2" />
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <div class="text-h6 text-deep-orange-4">选择右侧边栏的宽度</div>
        </q-item-section>
        <q-item-section>
          <q-select
                    filled v-model="width"
                    :options="rangeOptions"
                    transition-show="flip-up"
                    transition-hide="flip-down"
                    @update:model-value="handleChange"
          >

          </q-select>
        </q-item-section>
      </q-item>

    </q-list>
  </q-card>


</template>

<style scoped>

</style>
