<script setup>
import {useBusStore} from "stores/bus-store.js";
import { watchEffect, ref} from 'vue'
import {useBusSolutionStore} from "stores/bus-solution-store.js";
import {fillTransferInfo} from "src/utils/GetOnePath.js";
const busSolutionStore = useBusSolutionStore();
const busStore = useBusStore()
let routes=ref([])
const props = defineProps({
    index: {
      type: Number,
      default: 0
    },
    item: {
      type: Object,
      default: () => {}
    }
  }
)
watchEffect(() => {
  let transGuide = busSolutionStore.transGuide
  let transSolutions = busSolutionStore.transSolutions
  if(transGuide && transSolutions){
    routes.value=fillTransferInfo(transGuide, transSolutions)
  }
})
const handleTitle = (item) => {
  let linesItems = item.linesItems
  let len = linesItems.length
  let title = '   '
  for (let ii = 0, iiLen = len; ii < iiLen; ii++) {
    let lines = linesItems[ii];
    for (let iii = 0, iiiLen = lines.lineItems.length; iii < iiiLen; iii++) {
      let line = lines.lineItems[iii];
      if (iii !== iiiLen - 1) {
        title += line.lineName + "/";
      } else {
        title += line.lineName;
      }
    }
    if (ii !== iiLen - 1) {
      title += " → ";
    }
  }

  return title
}
</script>

<template>
  <q-scroll-area class="fit" >
    <q-icon name="directions_bus" size="56px" />
    <div class="q-mt-md">
      <div>{{'起点：'+busStore.getStartName}}</div>
    </div>
    <div class="q-mt-md">
      {{ `方案${index+1}：`+ handleTitle(props.item) }}
    </div>
    <div class="q-mt-md">
      <div v-for="(item, index) in routes" :key="index" >{{item.name+'：'+item.distance}}</div>
    </div>

    <div>{{'终点：'+busStore.getEndName}}</div>
  </q-scroll-area>

</template>

<style scoped>

</style>
