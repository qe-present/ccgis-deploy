<script setup>
import {useTravelStore} from "stores/travel-store.js";
import {useQuasar} from "quasar";

import {ref,toRaw} from "vue";
import {TRANSPORTATION_ANALYST_URL} from "src/constant/data.js";
import {useOtherStore} from "stores/other-store.js";
const otherStore = useOtherStore()

const $q = useQuasar();
const travelStore = useTravelStore();
let map = null;
let startLayer, endLayer,startList=[],endList=[]
let nodes = ref([])
const hasStartLayer = () => {
  startLayer = travelStore.getStartLayer();
  let startLayerLength = startLayer.getLayers().length;
  if (startLayerLength === 1) {
    startList.push(startLayer.getLayers()[0])
    return true;
  }
}
const hasEndLayer = () => {
  endLayer = travelStore.getEndLayer();
  let endLayerLength = endLayer.getLayers().length;
  if (endLayerLength === 1) {
    endList.push(endLayer.getLayers()[0])
    return true;
  }
}
const handleSearch = () => {
  if (!hasStartLayer()) {
    $q.notify({
      type: 'negative',
      message: '请选择起点',
      position: 'top-right',
    });
    return;
  }
  if (!hasEndLayer()) {
    $q.notify({
      type: 'negative',
      message: '请选择终点',
      position: 'top-right',
    });
    return;
  }
  let startMarker=toRaw(startList.pop())
  let endMarker=toRaw(endList.pop())
  let nodeLayer=otherStore.nodeLayer
  let layers=nodeLayer.getLayers()

  layers.forEach(layer=>{
    let latlng=layer.getLatLng()
    nodes.value.push(L.point(latlng.lng, latlng.lat))
    }
  )
  Object.keys(startMarker._layers).forEach(key => {
    let latLng = startMarker._layers[key]._latlng
    nodes.value.unshift(L.point(latLng.lng, latLng.lat))
  })

  Object.keys(endMarker._layers).forEach(key => {
    let latLng = endMarker._layers[key]._latlng
    nodes.value.push(L.point(latLng.lng, latLng.lat))
  })
  if(otherStore.lineLayer){
    map.removeLayer(otherStore.lineLayer)
  }
  if(otherStore.walkLayer){
    map.removeLayer(otherStore.walkLayer)
  }
  if(otherStore.pointToLayer.length>0){
    otherStore.pointToLayer.forEach(pt=>{
      map.removeLayer(pt)
    })
  }
  findPathProcess()
}
function findPathProcess() {
  map = travelStore.map
  let findPathService = new L.supermap.NetworkAnalystService(TRANSPORTATION_ANALYST_URL);
  let resultSetting = new L.supermap.TransportationAnalystResultSetting({
    returnEdgeFeatures: true,
    returnEdgeGeometry: true,
    returnEdgeIDs: true,
    returnNodeFeatures: true,
    returnNodeGeometry: true,
    returnNodeIDs: true,
    returnPathGuides: true,
    returnRoutes: true
  });
  let analystParameter = new L.supermap.TransportationAnalystParameter({
    resultSetting: resultSetting,
    weightFieldName: "time"
  });
  let findPathParameter = new L.supermap.FindPathParameters({
    isAnalyzeById: false,
    nodes: nodes.value,
    parameter: analystParameter
  });
  nodes.value = []
  let myIcon = L.icon({
    iconUrl: "walk.png",
    iconSize: [20, 20]
  });
  findPathService.findPath(findPathParameter, function (serviceResult) {
    let result = serviceResult.result;
    result.pathList.map(function (result) {
      let lineLayer=L.geoJSON(result.route).addTo(map);
      otherStore.lineLayer=lineLayer
      let walkLayer=L.geoJSON(result.pathGuideItems, {
        pointToLayer: function (geoPoints, latlng) {
          let pt=L.marker(latlng, { icon: myIcon }).addTo(map);
          otherStore.pointToLayer.push(pt)
        },
        filter: function (geoJsonFeature) {
          if (geoJsonFeature.geometry && geoJsonFeature.geometry.type === 'Point') {
            return true;
          }
          return false;
        }
      }).addTo(map);
      otherStore.walkLayer=walkLayer

    })
  });
}
</script>

<template>
  <q-item clickable v-ripple>
    <q-item-section avatar class="text-purple q-gutter-md">
      <q-icon name="mdi-map-marker-radius"/>
    </q-item-section>
    <q-item-section>
      <q-btn color="primary" icon="search" label="搜寻路线" @click="handleSearch"></q-btn>
    </q-item-section>
  </q-item>
</template>

<style scoped>

</style>
