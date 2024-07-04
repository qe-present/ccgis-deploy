<script setup>
import {useTravelStore} from "stores/travel-store.js";
import {useOtherStore} from "stores/other-store.js";
const otherStore = useOtherStore();
const travelStore = useTravelStore();

const handleClick = () => {
  travelStore.reset();
  otherStore.reset(travelStore.map);
}
</script>

<template>
  <q-item clickable v-ripple>
    <q-item-section avatar class="text-purple q-gutter-md">
      <q-icon name="mdi-restore" />
    </q-item-section>
    <q-item-section>
      <q-btn color="green" icon="mdi-restore" label="重置" @click="handleClick"></q-btn>
    </q-item-section>
  </q-item>
</template>

<style scoped>

</style>
