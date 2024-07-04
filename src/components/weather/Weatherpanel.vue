<script setup>

import {computed, onMounted, ref} from 'vue';
import axios from 'axios';

// 使用 ref 来创建一个响应式引用
const weatherInfo = ref(null);

// 在组件挂载时获取天气信息
onMounted(async () => {
  try {
    const response = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo?city=220100&key=c03cb55bb3404f175ea6b0a20b033d9b');
    weatherInfo.value = response.data; // 假设API返回的数据在response.data中
  } catch (error) {
    console.error(error);
  }
});
// 计算综合建议
const comprehensiveAdvice = computed(() => {
  if (!weatherInfo.value || !weatherInfo.value.lives[0]) {
    return '正在加载天气信息...';
  }

  const {temperature, weather, humidity, windpower} = weatherInfo.value.lives[0];
  let advice = '';

  // 温度判断
  if (temperature < 0) {
    advice += '天气较冷，请注意保暖，穿着厚实衣物。';
  } else if (temperature >= 28) {
    advice += '天气炎热，请做好防暑措施，避免中暑。';
  }

  // 天气状况判断
  switch (weather) {

    case '晴':
      advice += '天气晴朗，适合外出活动，享受阳光！';
      break;
    case '多云':
      advice += '天气多云，可能偶有小雨，请带伞以备不时之需。';
      break;
    case '雨':
    case '阵雨':
    case '雷阵雨':
      // 其他包含'雨'的情况
      advice += '今天有雨，请记得携带雨具，避免外出时淋湿。';
      break;
    // 可以继续添加其他天气情况的判断
    case '阴':
      advice += '天气阴沉，可能有雨，请注意携带雨具。';
      break;
    default:
      advice += '未知天气情况，请查询最新天气预报。';
  }

  // 空气湿度判断
  if (humidity > 70) {
    advice += '空气湿度较大，注意防潮。';
  }

  // 风力级别判断
  if (windpower > 5) {
    advice += '风力较大，请注意安全，避免在户外进行高风险活动。';
  }

  return advice;
});
</script>


<template>
  <div class="weather-panel">
    <h1>长春市实时天气</h1>
    <div v-if="weatherInfo">
      <!-- 显示天气信息的具体字段 -->
      <p>温度: {{ weatherInfo.lives[0].temperature }}摄氏度</p>
      <p>天气状况: {{ weatherInfo.lives[0].weather }}</p>
      <p>空气湿度: {{ weatherInfo.lives[0].humidity }}%</p>
      <p>风力级别: {{ weatherInfo.lives[0].windpower }}</p>
      <p>发布时间: {{ weatherInfo.lives[0].reporttime }}</p>

      <!-- 显示综合建议 -->
      <p>出行建议: {{ comprehensiveAdvice }}</p>
    </div>
    <div v-else>
      正在加载天气信息...
    </div>
  </div>
</template>

<style scoped>
.weather-panel {
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
