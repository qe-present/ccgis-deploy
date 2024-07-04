<script setup>
import { ref, onMounted } from "vue";
import GetMap from "src/utils/GetMap.js";
import TravelForm from "components/Travel/TravelForm.vue";
import {useTravelStore} from "stores/travel-store.js";
import {useOtherStore} from "stores/other-store.js";
const otherStore = useOtherStore();
const travelStore = useTravelStore();
import {useSettingStore} from "stores/setting-store.js";
const settingStore = useSettingStore();

let map;
// let control={
//   drawMarker: true,
//   drawCircleMarker: false,
//   drawPolyline: false,
//   drawPolygon: false,
//   drawRectangle: false,
//   drawCircle: false,
//   cutPolygon: false,
//   editMode: false,
// }
onMounted(() => {
  map = GetMap( false, false, 'zh');
  let markerLayer = new L.LayerGroup()
  let nodeLayer = new L.LayerGroup()
  let endLayer = new L.LayerGroup()
  let startLayer = new L.LayerGroup()
  markerLayer.addTo(map);
  startLayer.addTo(map);
  endLayer.addTo(map);
  nodeLayer.addTo(map);
  otherStore.nodeLayer = nodeLayer;
  travelStore.setMap(map);
  travelStore.setMarkerLayer(markerLayer);
  travelStore.setStartLayer(startLayer);
  travelStore.setEndLayer(endLayer);
});

const drawerRight = ref(false);
const miniState = ref(true);
const drawerClick = (e) => {
    if (miniState.value) {
      miniState.value = false
      e.stopPropagation()
    }
}
</script>

<template>
  <div id="map">
  </div>
  <q-drawer
    side="right"
    v-model="drawerRight"
    show-if-above
    bordered
    :width="settingStore.rightDrawerWidth"
    :breakpoint="500"
    class="bg-blue-3"
    :mini="!drawerRight || miniState"
    @click.capture="drawerClick"
  >
    <TravelForm v-model="miniState"></TravelForm>
  </q-drawer>
</template>

<style scoped>
#map {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
}
</style>
