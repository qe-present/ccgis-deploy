<script setup>
import {ref} from 'vue'
import {useQuasar} from "quasar";
import {useBusSolutionStore} from "stores/bus-solution-store.js";
let busSolutionStore = useBusSolutionStore()
let $q=useQuasar()
let count = ref(6)
const handleBlur = () => {
  let solutionCount = count.value
  if(solutionCount<1){
    $q.notify({
      type: "warning",
      message: "公交方案数量必须大于等于1",
      position: "top",
      timeout: 1000
    })
    count.value=6
    busSolutionStore.count=6
    return
  }
  busSolutionStore.count=solutionCount
}
</script>

<template>
  <q-item clickable v-ripple>
    <q-item-section avatar class="text-purple q-gutter-md">
      <q-icon name="mdi-bus-school" />
    </q-item-section>
    <q-item-section>
      <q-input v-model.number="count" placeholder="公交方案数量" type="number"
               @blur="handleBlur"
               :rules="[v => v >= 1 || '公交方案数量必须大于等于1']"

      ></q-input>
    </q-item-section>
  </q-item>
</template>

<style scoped>

</style>
