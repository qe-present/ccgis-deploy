<script setup>
const miniState = defineModel()
</script>

<template>
  <q-item clickable v-ripple>
    <q-item-section avatar class="text-purple q-gutter-md">
      <q-icon name="mdi-minus" />
    </q-item-section>
    <q-item-section>
      <q-btn color="red" icon="mdi-minus" label="缩小侧栏" @click="miniState = true"></q-btn>
    </q-item-section>
  </q-item>
</template>

<style scoped>

</style>
