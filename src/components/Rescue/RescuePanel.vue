<script setup>
import {ref} from "vue";
import geoBufferAnalyst from "src/utils/GetBuffer.js";
import {useRescueStore} from "stores/rescue-store.js";
import {useQuasar} from "quasar";
import getClose from "src/utils/GetClose.js";

const rescueStore = useRescueStore();
const $q = useQuasar();
let map;
let count=ref(2 )
let query = ref(400);
const clearMap = () => {
  if (rescueStore.pointLayer) {
    rescueStore.map.removeLayer(rescueStore.pointLayer);
  }
  if (rescueStore.bufferLayer) {
    rescueStore.map.removeLayer(rescueStore.bufferLayer);
  }
  rescueStore.pointLayer = null;
  rescueStore.bufferLayer = null;
}
const hasPoint=()=>{
  if (rescueStore.chooseLayer == null) {
    $q.notify({
      message: "请选择事故点！",
      type: "negative",
      position: "top",
      timeout: 1000,
    });
    return false;
  }
  return true;
}
const hasBuffer=()=>{
  if (rescueStore.bufferLayer == null) {
    $q.notify({
      message: "请先进行缓冲区分析！",
      type: "negative",
      position: "top",
      timeout: 1000,
    });
    return false;
  }
  return true;
}
const handleClick = () => {
  clearMap();
  if(count.value<=0){
    $q.notify({
      message: "救援地的数量需要大于0！",
      type: "negative",
      position: "top",
      timeout: 1000,
    });
    return;
  }
  let radius = query.value
  if (hasPoint() && radius > 0) {
    geoBufferAnalyst(rescueStore.chooseLayer, radius);
  }
}
const handleRouteClick = () => {
  if (!hasPoint() ||!hasBuffer()) {
    return;
  }
  let pointLayer = rescueStore.pointLayer;
  let chooseLayer = rescueStore.chooseLayer;
  let layers = pointLayer._layers
  let points = []
  for (let key in layers) {
    let lat = layers[key]._latlng.lat
    let lng = layers[key]._latlng.lng
    points.push(L.point([lng, lat]))
  }
  if(points.length===0){
    $q.notify({
      message: "没有可用的求援！！！",
      type: "negative",
      position: "top",
      timeout: 1000,
    });
  }
  getClose(chooseLayer.getLatLng(),points,count.value)


}
</script>

<template>
  <q-card class="my-card">
    <q-list>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon color="primary" name="search"/>
        </q-item-section>
        <q-item-section>
          <q-btn color="primary" label="分析" @click="handleClick"></q-btn>
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <div class="eva-color-palette text-h6 text-primary" >
            选择半径
          </div>
        </q-item-section>

        <q-item-section>
          <div class="q-pa-md">
            <q-badge color="purple">
              当前半径: {{ query }}
            </q-badge>

            <q-slider
              :model-value="query"
              @change="val => { query = val }"
              :min="0"
              :max="5000"
              :step="5"
              color="purple"
              label
            />
          </div>
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon color="primary" name="search"/>
        </q-item-section>
        <q-item-section>
          <q-btn color="warning" label="最近求援路线" @click="handleRouteClick"></q-btn>
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon color="primary" name="mdi-counter" size="32px"/>
        </q-item-section>
        <q-item-section>
          <q-input color="primary"
                   label="救援地的数量"
                   v-model.number="count" class="text-h6" type="number"
                   :rules="[v => v > 0 || '请输入大于0的数字']"
          >

          </q-input>
        </q-item-section>
      </q-item>

    </q-list>
  </q-card>
</template>

<style lang="sass" scoped>
.my-card
  width: 70%
  max-width: 300px
</style>
