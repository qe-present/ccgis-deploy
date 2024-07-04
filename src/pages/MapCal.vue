<script setup>
import {onMounted,ref} from 'vue';

import GetMap from '../utils/GetMap.js'
import {getDistance,getArea} from "src/utils/GetCal.js";
import TooltipDialog from "components/TooltipDialog.vue";

let map;
let tooltip = ref(false);
const calAreaAndLength = (type, layer) => {
  if (type === 'Rectangle' || type === 'Polygon') {
    getArea(layer);
  }
  if (type === 'Line') {
    getDistance(layer);
  }
}
onMounted(() => {
  map = GetMap( {
    drawMarker: false,
    drawCircle: false,
    drawCircleMarker: false,
    removeMode: false,
    cutPolygon: false,
  }, true, 'zh')
  map.on('pm:create', (e) => {
    let layer = e.layer;
    let type = e.shape;
    console.log(layer, type)
    layer.on('pm:edit', (e) => {
      calAreaAndLength(type, layer)
    });
    calAreaAndLength(type, layer)
  });
  map.on('pm:drawstart', ({workingLayer}) => {
    workingLayer.on('pm:vertexadded', e => {
      let shape = e.shape;
      if (shape === 'Line') {
        getDistance(workingLayer)
      }
    });
  });
})

const tooltipHandle = () => {
  tooltip.value = !tooltip.value
}
const clearMap = () => {
  map.eachLayer(function (layer) {
    // 这里你可以选择不移除底图层（tile layer）
    if (!layer._url) {
      map.removeLayer(layer);
    }
  });
}

</script>
<template>
  <div id="map">
    <div class="q-pa-md q-gutter-sm query">
      <q-btn color="primary" @click="tooltipHandle" icon="my_location">
        <q-tooltip class="bg-accent"
                   transition-show="flip-right"
                   transition-hide="flip-left">
          使用提示
        </q-tooltip>
      </q-btn>
      <q-btn color="primary" @click="clearMap">
        清空
      </q-btn>
    </div>
    <TooltipDialog v-model="tooltip"></TooltipDialog>
  </div>

</template>

<style scoped>
.query {
  max-width: 100px;
  width: 10%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1002;
}
</style>
