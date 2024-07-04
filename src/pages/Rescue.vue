<script setup>
import {onMounted, ref} from "vue";
import GetMap from "src/utils/GetMap.js";
import RescueDataFrom from "components/Rescue/RescuePanel.vue";
import {useRescueStore} from "stores/rescue-store.js";

const rescueStore = useRescueStore();
let map;
const clearMap = () => {
  if(rescueStore.pointLayer){
    rescueStore.map.removeLayer(rescueStore.pointLayer);
  }
  if(rescueStore.bufferLayer){
    rescueStore.map.removeLayer(rescueStore.bufferLayer);
  }
  if(rescueStore.chooseLayer){
    rescueStore.map.removeLayer(rescueStore.chooseLayer);
  }
  if(rescueStore.rescueLineLayer){
    rescueStore.map.removeLayer(rescueStore.rescueLineLayer);
  }
  rescueStore.rescueLineLayer=null;
  rescueStore.pointLayer=null;
  rescueStore.bufferLayer=null;
  rescueStore.chooseLayer=null;
}
onMounted(() => {
  let control = {
    drawMarker: true,
    drawPolygon: false,
    drawCircleMarker: false,
    drawPolyline: false,
    drawCircle: false,
    drawRectangle: false,
    cutPolygon: false,
    editMode: false,
    dragMode: false,
  }
  map = GetMap( control, false, 'zh');
  rescueStore.map = map;
  map.on('pm:create', function (e) {
    clearMap();
    let layer = e.layer;
    layer.setIcon(L.icon({
      iconUrl: 'buffer/sg.png',
      iconSize: [40, 40]
    }));
    layer.bindPopup('事故点');
    rescueStore.chooseLayer = layer;
  });
});
</script>

<template>
  <div id="map">
    <RescueDataFrom id="rescue"/>
  </div>
</template>

<style scoped>
#rescue {
  max-width: 400px;
  width: 70%;
  position: absolute;
  top: 1%;
  left: 72%;
  z-index: 1002;
}
</style>
