<script setup>
import { ref, watchEffect,toRaw} from 'vue';
import { useQuasar } from 'quasar';
import {useBusStore} from "stores/bus-store.js";
import {BusPoint} from "src/utils/SetBusPoint.js";
import SelectDialog from "components/SelectDialog.vue";
const $q=useQuasar()
const busStore = useBusStore();
const bottom = ref('bottom');
const map=busStore.getMap()
const markers = busStore.getMarkerLayer()
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
  if(flag.value&&!dialog.value&&rows.length>1){
    $q.notify({
      type: "info",
      message: "请先选择一个站点",
      position: "top",
      timeout: 1000,
    });
  }
})

const flyToSelected = (id,zoom=15) => {
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
        BusPoint(layer,props.need)
        flyToSelected(selectedMarkerId,3)
      }
      markers.removeLayer(layer)
    })
    flag.value = false
  } else{
    secondDialog.value = true
  }
}
</script>

<template>
  <q-dialog v-model="dialog" :position="bottom" full-width >
    <div class="q-pa-md">
      <q-table
        title="查询结果如下, 请选择一个起点"
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
