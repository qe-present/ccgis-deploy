<script setup>
import {onMounted, ref} from "vue";
import GetMap from "src/utils/GetMap.js";
import BusPlane from "components/Bus/BusPanel.vue";
import ShrinkDrawerBtn from "components/ShrinkDrawerBtn.vue";
import BusChooseForm from "components/Bus/BusChooseForm.vue";
import {useBusStore} from "stores/bus-store.js";
import {useBusSolutionStore} from "stores/bus-solution-store.js";
import {useSettingStore} from "stores/setting-store.js";
import BusRouterCount from "components/Bus/BusRouterCount.vue";
import BusTactic from "components/Bus/BusTactic.vue";
import BusPersonSelect from "components/Bus/BusPersonSelect.vue";
const settingStore = useSettingStore()
const busSolutionStore = useBusSolutionStore()
const travelStore = useBusStore()

let map, startMarker, endMarker;
const drawerRight = ref(false);
const miniState = ref(true);
const drawerClick = (e) => {
  if (miniState.value) {
    miniState.value = false
    e.stopPropagation()
  }
}
onMounted(() => {
  map = GetMap(false, false, 'zh');
  // showCustom()
  let markerLayer = new L.LayerGroup()
  let endLayer = new L.LayerGroup()
  let startLayer = new L.LayerGroup()
  busSolutionStore.routeLayer = L.featureGroup().addTo(map);
  markerLayer.addTo(map);
  startLayer.addTo(map);
  endLayer.addTo(map);
  travelStore.setMap(map);
  travelStore.setMarkerLayer(markerLayer);
  travelStore.setStartLayer(startLayer);
  travelStore.setEndLayer(endLayer);
});
</script>

<template>
  <div id="map">
    <BusPlane id="query"/>
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
    <q-scroll-area class="fit">
      <BusChooseForm :start-place-holder="'起点站'" :end-place-holder="'终点站'"></BusChooseForm>
      <BusRouterCount></BusRouterCount>
      <BusTactic></BusTactic>
      <BusPersonSelect></BusPersonSelect>
      <ShrinkDrawerBtn v-model="miniState"></ShrinkDrawerBtn>
    </q-scroll-area>

  </q-drawer>
</template>

<style scoped>
#map {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
}

#bus {
  max-width: 600px;
  width: 70%;
  position: absolute;
  top: 0;
  left: -50%;
  right: -50%;
  bottom: 0;
  z-index: 1002;
}
</style>



