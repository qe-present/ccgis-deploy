<template>
  <q-item
    clickable
    :to="props.link"
    class="essential-link"
  >
    <q-item-section
      v-if="props.icon"
      avatar
    >
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="title">{{ props.title }}</q-item-label>
      <q-item-label  class="caption" caption>{{ props.caption }}</q-item-label>
      <q-separator />
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: 'EssentialLink'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },

  caption: {
    type: String,
    default: ''
  },

  link: {
    type: String,
    default: '#'
  },

  icon: {
    type: String,
    default: ''
  },
})
</script>
<style scoped>
.essential-link {
  margin-top: 20px; /* 设置顶部间距 */
  margin-bottom: 10px; /* 设置底部间距 */
}
.title {
  font-size: 20px
}
</style>
