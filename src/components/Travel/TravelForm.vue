<script setup>
import { ref , watchEffect } from 'vue'
import ShrinkDrawerBtn from "components/ShrinkDrawerBtn.vue";

import Search from "components/Travel/Search.vue";
import TravelChooseForm from "components/Travel/TravelChooseForm.vue";
import OtherPlaceBtn from "components/Travel/OtherPlaceBtn.vue";
import ClearBtn from "components/Travel/ClearBtn.vue";
import {useTravelStore} from "stores/travel-store.js";
import {useQuasar} from "quasar";
const travelStore = useTravelStore()
const miniState = defineModel()
const $q = useQuasar()
let canOpen = ref(false)
watchEffect(() => {
  if(travelStore.startSure&&travelStore.endSure){
    $q.notify({
      message: '确定了起点和终点，可以选择其他中途站点',
      type: 'positive',
      position: 'top',
      timeout: 1000
    })
    canOpen.value = true
  }
})
</script>

<template>
  <q-scroll-area class="fit">
    <TravelChooseForm :start-place-holder="'请输入起始点'" :end-place-holder="'请输入终点'"></TravelChooseForm>
    <OtherPlaceBtn v-if ="canOpen"></OtherPlaceBtn>
    <Search></Search>
    <ClearBtn></ClearBtn>
    <ShrinkDrawerBtn v-model="miniState"></ShrinkDrawerBtn>
  </q-scroll-area>

</template>

<style scoped>

</style>
