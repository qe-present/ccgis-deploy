<script setup>
import GetMap from "src/utils/GetMap.js";
import QueryForm from "components/query/QueryForm.vue";

import {useDataStore} from "stores/data-store.js";
import {useResultStore} from "stores/result-store.js";

import {onMounted} from "vue";

const dataStore = useDataStore();
const resultStore = useResultStore();
let oldLayer=[];
let map;

onMounted(() => {
  map= GetMap(false,false,'zh');
  resultStore.resultLayer=L.layerGroup().addTo(map);
  dataStore.map = map;


  map.on('pm:create', function(e) {
    let layer = e.layer;
    if (oldLayer.length > 0){
      map.removeLayer(oldLayer[0]);
      oldLayer.pop();
    }
    if(dataStore.map.hasLayer(dataStore.polygon)){
      dataStore.map.removeLayer(dataStore.polygon);
    }
    if(dataStore.circleLayer){
      dataStore.map.removeLayer(dataStore.circleLayer);
    }
    oldLayer.push(layer);
    dataStore.type=e.shape;
    dataStore.data=layer.toGeoJSON();
    dataStore.polygon=layer;
    if (e.shape === "Rectangle" || e.shape === "Polygon"){
      dataStore.bounds=layer.getBounds();
    }



  });
});

</script>

<template>
    <div id="map">
      <QueryForm id ="query"/>
    </div>
</template>
