<script setup>
import {ref, watchEffect} from "vue";
import {useChooseStore} from "stores/choose-store.js";
import {useBusSolutionStore} from "stores/bus-solution-store.js";
import {SERVER_URL} from "src/constant/data.js";
import {useBusStore} from "stores/bus-store.js";
import BusSolutionItem from "components/Bus/BusSolutionItem.vue";

let busSolution = ref([])
const busStore = useBusStore();
const chooseStore = useChooseStore();
const busSolutionStore = useBusSolutionStore();
const slide=ref(0)

let solutions, transSolutions = 0, pointList = [];
const clearRoute = defineModel()
const execTransPathQuery = (points, transLines) => {
  let params = new L.supermap.TransferPathParameters({
    points: points,
    transferLines: transLines
  });
  new L.supermap
    .TrafficTransferAnalystService(SERVER_URL)
    .analysisTransferPath(params, function (serviceResult) {
      busSolutionStore.transGuide = serviceResult.result;
      busSolutionStore.transSolutions = transSolutions;
      busSolutionStore.id = 1;
    });
}


const handleShow = (id) => {
  let transLines = [];
  for (let i = 0; i < solutions[id].length; i++) {
    let trans = solutions[id][i][0];
    transLines.push(trans);
  }
  execTransPathQuery(pointList, transLines);
}

watchEffect(
  () => {
    if (Object.keys(chooseStore.points).length > 0) {
      let points = chooseStore.points
      transSolutions = points.transSolutions
      solutions = points.solutions
      pointList = points.pointList
      busSolution.value = points.transSolutions
    }
  }
)
</script>

<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      padding
      arrows
      navigation
      navigation-icon="radio_button_unchecked"
      height="400px"
      class="bg-purple text-white rounded-borders"
      v-if="busSolution.length > 0 && !clearRoute"
      @update:modelValue="handleShow"

    >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
        <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
      </template>
      <q-carousel-slide :name="index" class="text-center" v-for="(item, index) in busSolution" :key="index">
        <BusSolutionItem :item="item" :index="index" >
        </BusSolutionItem>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<style scoped>


</style>
