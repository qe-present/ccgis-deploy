<script setup>
const secondDialog = defineModel()
</script>

<template>
  <q-dialog v-model="secondDialog" persistent transition-show="scale" transition-hide="scale">
    <q-card class="bg-teal text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">请选择一个起点</div>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn color="secondary" label="确定" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
