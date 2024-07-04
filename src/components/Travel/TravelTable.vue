<script setup>
import { ref, watchEffect,toRaw} from 'vue';
import { useQuasar } from 'quasar';
import {useTravelStore} from "stores/travel-store.js";
import SelectDialog from "components/SelectDialog.vue";
const $q=useQuasar()
const travelStore = useTravelStore();
const bottom = ref('bottom');
const map=travelStore.map
let markers = travelStore.getMarkerLayer()
const dialog = defineModel('dialog')
const tableData = defineModel('tableData')
const flag = defineModel('flag')
const selected = ref([])
const secondDialog = ref(false)
const props = defineProps(
  {
    need: {
      type: String,
      default: 'start'
    }
  }

)
let content;


const columns = [
  {
    name: 'id',
    required: true,
    label: '车站号',
    align: 'center',
    field: 'id',
    sortable: true
  },
  {name: 'name', label: '地名', field: 'name'},
  {
    name: 'markerID',
    label: '标记id',
    field: 'markerId',
    sortable: true,
  },
  {name: 'lat', align: 'center', label: '纬度', field: row => row.position.x},
  {name: 'lng', label: '经度', field: row => row.position.y},

]
let rows = tableData.value
let selectedMarkerId;
watchEffect(() => {
  rows=tableData.value
})
watchEffect(() => {
  if(flag.value&&!dialog.value) {
    $q.notify({
      type: "info",
      message: "请先选择一个站点",
      position: "top",
      timeout: 1000,
    });
  }
})
const flyToSelected = (id,zoom=15) => {
  markers=travelStore.getMarkerLayer()
  let selectedMarker = markers.getLayer(id)
  if (selectedMarker) {
    let latlng = selectedMarker.getLatLng()
    map.flyTo(latlng, zoom)
  }
}
const handleSelect = (row) => {
  selectedMarkerId=row.keys[0]
  flyToSelected(selectedMarkerId)
}
const handleChoose = () => {
  if(selected.value.length>0){
    markers.eachLayer(function (layer) {
      if(layer._leaflet_id===selectedMarkerId){
        let newLayer=L.geoJSON(layer.toGeoJSON(),{
          ...layer.options,
          icon:L.icon({
            iconUrl: `marker/${props.need}.png`,
            iconSize: [40, 40], // size of the icon
          }),
          markersInheritOptions: true
        })
        if(props.need==='Start'){
          content = '起点站: ' + layer._popup._content + "<br><a href='https://baike.baidu.com/item/" + layer._popup._content + "' target='_blank'>查看详情</a>"
          newLayer.bindPopup(content)
          let startLayer = travelStore.getStartLayer()
          if(startLayer.getLayers().length>0){
            startLayer.removeLayer(startLayer.getLayers()[0])
          }
          startLayer.addLayer(newLayer)
          travelStore.setStartSure(true)
          travelStore.setStartName(layer._popup._content)
        }else if(props.need==='End') {
          content='终点站:'+layer._popup._content+ "<br><a href='https://baike.baidu.com/item/" + layer._popup._content + "' target='_blank'>查看详情</a>"
          newLayer.bindPopup(content)
          let endLayer = travelStore.getEndLayer()
          if(endLayer.getLayers().length>0){
            endLayer.removeLayer(endLayer.getLayers()[0])
          }
          endLayer.addLayer(newLayer)
          travelStore.setEndSure(true)
          travelStore.setEndName(layer._popup._content)
        }
        flyToSelected(selectedMarkerId,3)
        markers.removeLayer(layer)

      }else {
        markers.removeLayer(layer)
      }
    })
    flag.value = false
  }
  else{
    secondDialog.value = true
  }
}
</script>

<template>
  <q-dialog v-model="dialog" :position="bottom" full-width >
    <div class="q-pa-md">
      <q-table
        title="查询结果如下, 请选择一个站点"
        :rows="rows"
        :columns="columns"
        row-key="markerId"
        selection="single"
        v-model:selected="selected"
        @selection="handleSelect"
      >
        <template v-slot:top-right>
          <q-btn
            color="primary"
            label="确定"
            @click="handleChoose"
          />
        </template>
      </q-table>
    </div>
  </q-dialog>
  <SelectDialog v-model="secondDialog"></SelectDialog>

</template>

<style scoped>

</style>
