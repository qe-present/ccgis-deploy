<script setup>
import { ref } from 'vue'
import {useBusStore} from "stores/bus-store.js";
import DownLoadList from "components/Bus/BusDownLoadList.vue";
import {SERVER_URL} from "src/constant/data.js";
import {useQuasar} from "quasar";
import {useChooseStore} from "stores/choose-store.js";
import {useBusSolutionStore} from "stores/bus-solution-store.js";
const busSolutionStore = useBusSolutionStore()
const chooseStore = useChooseStore()
const busStore = useBusStore()

let clearRoute = ref(false)
const $q=useQuasar()
let start = ref('')
let end = ref('')
let solutions = ref([])
let pointList = []
function execTransSolutionsQuery(points,tactic) {
  let params = new L.supermap.TransferSolutionParameters({
    solutionCount: busSolutionStore.count,//最大换乘导引数量
    transferTactic: busSolutionStore.transferTactic,//公交换乘策略类型
    transferPreference: busSolutionStore.transferPreference,//公交换乘偏好
    walkingRatio: 10,//步行与公交的消耗权重比
    points: points //起始点坐标
  });
  new L.supermap.TrafficTransferAnalystService(SERVER_URL)
    .analysisTransferSolution(params, function (serviceResult) {
      if (serviceResult.error) {
        $q.notify({
          type: "negative",
          message: "查询失败!!!!",
          position: "top",
          timeout: 1000,
        })
        return;
      }
      transferSolutionsSucceed(serviceResult.result);
    });
}
function transferSolutionsSucceed(result) {
  let transGuide = result.defaultGuide,
    transSolutions = result.solutionItems,
    suggestWalking=result.suggestWalking,
    solutions = [];
  if (suggestWalking) {
    $q.notify({
      type: "negative",
      message: "亲！起始终止点距离太近，推荐步行",
      position: "top",
      timeout: 1000,
    });
    return;
  }
  if (transSolutions.length === 0) {
    $q.notify({
      type: "negative",
      message: "未查询到公交换乘方案",
      position: "top",
      timeout: 1000,
    });
    return;
  }else {
    $q.notify({
      type: "positive",
      message: "公交换乘方案查询成功,共找到"+transSolutions.length+"条方案",
      position: "top",
      timeout: 1000,
    });
  }
  for (let j = 0; j < transSolutions.length; j++) {
    let linesItems = transSolutions[j].linesItems, transSolution = [];

    for (let jj = 0; jj < linesItems.length; jj++) {
      let lineItems = linesItems[jj].lineItems, items = [];
      for (let jjj = 0; jjj < lineItems.length; jjj++) {
        let lineItem = lineItems[jjj];
        items.push({
            'lineID': lineItem.lineID,
            'startStopIndex': lineItem.startStopIndex,
            'endStopIndex': lineItem.endStopIndex
          }
        );
      }
      transSolution.push(items);
    }
    solutions.push(transSolution);
  }
  chooseStore.points={
    'transSolutions': transSolutions,
    'solutions': solutions,
    'pointList': pointList
  }

}

const handleSearch = () => {
  clearRoute.value = false;
  if (!busStore.startSure ||!busStore.endSure) {
    $q.notify({
      type: "negative",
      message: "请先选择起点和终点",
      position: "top",
      timeout: 1000,
    });
    return;
  }
  pointList=[busStore.startLine,busStore.endLine]
  let tactic = "LESS_TIME";
  let solutionCount = 6;
  execTransSolutionsQuery(pointList,tactic,solutionCount);
}

const handleClear = () => {
  clearRoute.value = true;
  busSolutionStore.clear();
}

</script>
<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 text-blue-4 inset-shadow-down">起点站：{{busStore.startSure?busStore.startName:'未选择' }}</div>
        <div class="text-h6 text-blue-14 inset-shadow-down">终点站：{{busStore.endSure?busStore.endName:'未选择' }} </div>
      </q-card-section>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon color="primary" name="search" />
        </q-item-section>
        <q-item-section>
          <q-btn color="primary" label="查找" @click="handleSearch"></q-btn>
        </q-item-section>
        <q-item-section>
          <q-btn color="info" label="清空路径" @click="handleClear"></q-btn>
        </q-item-section>
      </q-item>
      <DownLoadList v-model="clearRoute"></DownLoadList>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
