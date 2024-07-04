<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useBusSolutionStore } from 'stores/bus-solution-store.js'

const busSolutionStore =  useBusSolutionStore()
busSolutionStore.transferTactic = 'LESS_TIME'
const $q= useQuasar()
const type = ref({
  label: '时间短',
  value: 'LESS_TIME'
})
const handleChange = () => {
  busSolutionStore.transferTactic=type.value.value
}

const options = [
  {
    label:'时间短',
    value: 'LESS_TIME'
  },
  {
    label:'步行少',
    value: 'LESS_WALK'
  },
  {
    label:'换乘少',
    value: 'LESS_TRANSFER'
  },
  {
    label:'距离短',
    value: 'MIN_DISTANCE'
  }
]
</script>

<template>
  <q-item clickable v-ripple>
    <q-item-section avatar class="text-purple q-gutter-md">
      <q-icon name="mdi-bus" />
    </q-item-section>
    <q-item-section>
      <q-select bg-color="blue" filled v-model="type"
                :options="options"
                :rules="[v => v !== null || '请选择换乘类型']"
                transition-show="flip-up"
                transition-hide="flip-down"
                emit-label
                @update:model-value="handleChange"
      >
        <template v-slot:prepend>
          <q-icon name="mdi-bus"/>
        </template>
        <q-tooltip class="bg-accent">选择换乘策略</q-tooltip>
      </q-select>
    </q-item-section>
  </q-item>

</template>

<style scoped>

</style>
