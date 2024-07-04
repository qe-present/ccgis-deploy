<script setup>
import { ref } from 'vue'
const bar2 = defineModel()
</script>

<template>
  <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up">
    <!--剧中显示-->
    <q-card class="bg-primary text-white">
      <q-bar>
        <q-icon name="favorite" />
        <q-icon name="favorite" />
        <div>CCGIS</div>
        <q-icon name="favorite" />
        <q-icon name="favorite" />
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">关闭</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section class="text-center">
        <div class="text-h6 content-md-end">温馨提示</div>
      </q-card-section>

      <q-card-section class="q-pt-none text-left text-h5">
        <div>点击地图上的左上角按钮,根据提示进行测量<br>
          <br>从上到下：<br>
          &nbsp;&nbsp;第三个按钮：测量线段距离。<br>
          &nbsp;&nbsp;第四个按钮：测量矩形面积。<br>
          &nbsp;&nbsp;第五个按钮：测量多边形面积。<br>
          测量结果在测量完之后会显示在地图上。
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
