<script setup>
import {computed, onMounted, ref} from 'vue';
import axios from 'axios';
const weatherInfo = ref(null);

// 在组件挂载时获取天气信息
onMounted(async () => {
  try {
    const response = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo?city=220100&key=c03cb55bb3404f175ea6b0a20b033d9b&extensions=all');
    weatherInfo.value = response.data; // 假设API返回的数据在response.data中
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="weather-panel">
    <h1>长春市未来三天天气预报</h1>
    <div v-if="weatherInfo">
      <!-- 显示天气信息的具体字段 -->
    <p>
    {{ weatherInfo.forecasts[0].casts[1].date }}&nbsp;&nbsp;&nbsp;&nbsp;{{ weatherInfo.forecasts[0].casts[1].dayweather }}&nbsp;&nbsp;&nbsp;&nbsp; {{ weatherInfo.forecasts[0].casts[1].nighttemp }}~{{ weatherInfo.forecasts[0].casts[1].daytemp }}℃
    </p>
    <p>
    {{ weatherInfo.forecasts[0].casts[2].date }}&nbsp;&nbsp;&nbsp;&nbsp;{{ weatherInfo.forecasts[0].casts[2].dayweather }}&nbsp;&nbsp;&nbsp;&nbsp; {{ weatherInfo.forecasts[0].casts[2].nighttemp }}~{{ weatherInfo.forecasts[0].casts[2].daytemp }}℃
    </p>
    <p>
    {{ weatherInfo.forecasts[0].casts[3].date }}&nbsp;&nbsp;&nbsp;&nbsp;{{ weatherInfo.forecasts[0].casts[3].dayweather }}&nbsp;&nbsp;&nbsp;&nbsp; {{ weatherInfo.forecasts[0].casts[3].nighttemp }}~{{ weatherInfo.forecasts[0].casts[3].daytemp }}℃
    </p>
    </div>
    <div v-else>
      正在加载天气信息...
    </div>
  </div>
</template>

<style scoped>
.weather-panel  {
  /* 设置面板的宽度、高度、背景色、边框等 */
  width: 300px;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px auto; /* 水平和垂直居中，假设面板宽度是固定的 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.weather-panel h1 {
  /* 设置标题的样式 */
  text-align: center;
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
}

/* 其他子元素的样式 */
</style>
