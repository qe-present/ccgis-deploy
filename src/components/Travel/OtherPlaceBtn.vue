<script setup>
import {useOtherStore} from "stores/other-store.js";
import {useTravelStore} from "stores/travel-store.js";

const travelStore = useTravelStore();
const otherStore = useOtherStore();
let nodes=otherStore.nodes,length,id,nodeLayer;
const handleClick = () => {
  let map = travelStore.map;
  let control={
    drawMarker: true,
    drawCircleMarker: false,
    drawPolyline: false,
    drawPolygon: false,
    drawRectangle: false,
    drawCircle: false,
    cutPolygon: false,
    editMode: false,
  }
  map.pm.addControls(control);
  map.on("pm:create", function (e) {
    let layer = e.layer;
    let type = e.shape;
    nodeLayer=otherStore.nodeLayer;
    if(!nodeLayer.hasLayer(layer)){
      nodeLayer.addLayer(layer)
      length=nodeLayer.getLayers().length;
    }
    layer.bindPopup(`<p>中途站点${length}</p>`);
  })
}

</script>

<template>
  <q-item clickable v-ripple>
    <q-item-section avatar class="text-purple q-gutter-md">
      <q-icon name="mdi-printer-pos" />
    </q-item-section>
    <q-item-section>
      <q-btn color="purple" icon="mdi-map-marker-radius" label="中途站点" @click="handleClick"></q-btn>
    </q-item-section>
  </q-item>
</template>

<style scoped>

</style>
