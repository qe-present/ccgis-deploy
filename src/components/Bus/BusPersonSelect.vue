<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useBusSolutionStore } from 'stores/bus-solution-store.js'

const busSolutionStore =  useBusSolutionStore()
busSolutionStore.transferPreference='NONE'
const $q= useQuasar()
const type = ref({
  label: '无乘车偏好',
  value: 'NONE'
})
const handleChange = () => {
  busSolutionStore.transferPreference=type.value.value
}

const options = [
  {
    label:'公交汽车优先',
    value: 'BUS'
  },
  {
    label:'地铁优先',
    value: 'SUBWAY'
  },
  {
    label:'不乘坐地铁',
    value: 'NO_SUBWAY'
  },
  {
    label:'无乘车偏好',
    value: 'NONE'
  }
]
</script>

<template>
  <q-item clickable v-ripple>
    <q-item-section avatar class="text-purple q-gutter-md">
      <q-icon name="mdi-heart-search" />
    </q-item-section>
    <q-item-section>
      <q-select bg-color="blue" filled v-model="type"
                :options="options"
                :rules="[v => v !== null || '请选择个人换乘偏好']"
                transition-show="flip-up"
                transition-hide="flip-down"
                emit-label
                @update:model-value="handleChange"
      >
        <template v-slot:prepend>
          <q-icon name="mdi-bus"/>
        </template>
        <q-tooltip class="bg-accent">选择个人换乘偏好</q-tooltip>
      </q-select>
    </q-item-section>
  </q-item>
</template>

<style scoped>

</style>
