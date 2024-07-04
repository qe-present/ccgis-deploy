<script setup>
import { ref, watchEffect,toRaw } from 'vue';
import {useDataStore} from "stores/data-store.js";
import {useResultStore} from "stores/result-store.js";
const resultStore = useResultStore();
const dataStore = useDataStore();
const bottom = ref('bottom');

const dialog = defineModel('dialog')
const tableData = defineModel('tableData')
const selected = ref([])
const columns = [
  {name: 'content', label: '地名', field: 'content'},
]
let rows = tableData.value
watchEffect(() => {
  rows=tableData.value
})
const handleSelectionChange = (rows) => {
  let data = rows.rows[0]
  let markerLayer = resultStore.getResultLayer
  let marker = markerLayer.getLayer(data.id)
  if (marker) {
    dataStore.map.flyTo(marker.getLatLng(), 11)
  }
}
</script>

<template>
  <q-dialog v-model="dialog" :position="bottom">
    <div class="q-pa-md">
      <q-table
        title="查询结果"
        :rows="rows"
        :columns="columns"
        row-key="content"
        selection="single"
        v-model:selected="selected"
        @selection="handleSelectionChange"
      />
    </div>
  </q-dialog>
</template>

<style scoped>

</style>
