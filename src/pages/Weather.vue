<script setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import Weatherpanel from "components/weather/Weatherpanel.vue";
import Weatherpanel2 from "components/weather/Weatherpanel2.vue";

let map = null;

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "19ef4645e1509b58e6f6bec793e93111",
  };
  AMapLoader.load({
    key: "406b44267c1fdf11a851116f2cf642db", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Weather"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then((AMap) => {
      map = new AMap.Map("map", {
        // 设置地图容器id
        viewMode: "3D", // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [125.323643, 43.816996], // 初始化地图中心点位置
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => {
  map?.destroy();
});
</script>

<template>

  <div id="map">
    <Weatherpanel id="query2"/>
    <Weatherpanel2 id="query"/>
  </div>
</template>

<style scoped>
#map {
  /* 设置地图容器的样式 */
  width: 100%; /* 宽度可以根据需要调整 */
  height: 90vh; /* 高度可以根据需要设置 */
  position: relative; /* 如果需要定位内部的绝对定位元素 */
  margin: 20px auto; /* 水平和垂直居中，假设容器宽度足够 */
  background-color: #f5f5f5; /* 背景色 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 5px; /* 边框圆角 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  overflow: hidden; /* 隐藏超出容器的内容 */
}


Weatherpanel {
  width: 100%; /* 宽度继承自父元素 */
  height: 50%; /* 高度继承自父元素 */
  display: block; /* 确保它是一个块级元素 */
}
Weatherpanel2 {
  width: 100%; /* 宽度继承自父元素 */
  height: 50%; /* 高度继承自父元素 */
  display: block; /* 确保它是一个块级元素 */
}

</style>
