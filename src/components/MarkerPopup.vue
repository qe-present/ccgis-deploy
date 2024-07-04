<script setup>
import {watchEffect} from "vue";
const props = defineProps({
  contents: {
    type: Object,
    required: true,
  },
});
let markers = props.contents;
let content,name,contentsValue,imageUrl;
watchEffect(() => {
  contentsValue = props.contents;
  content = contentsValue.content;
  name = contentsValue.name;
  console.log(content,name);
})
</script>

<template>
  <div>
    <h5 id="pop">{{ markers.content }}</h5>
    <div id="pop" v-if="name.address">{{'地址:'+ name.address }}</div>
    <div v-if="name.telephone" id="pop">{{'电话:'+ name.telephone }}</div>
    <img src="https://picsum.photos/200/300" width="60" height="60" />
  </div>
</template>

<style scoped>
#pop{
  color: blue;
}

</style>
