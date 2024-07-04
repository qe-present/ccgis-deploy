<template>
  <div class="page-container">
    <div class="login-container">
      <div class="login-card">
        <q-card class="frosted-glass">
          <q-icon name="mdi-home-city"  size="48px"  color="info"/>
          <q-card-section class="q-pa-md" >
            <div class="text-h4 text-center text-yellow-6" >长春市公共信息服务平台</div>
          </q-card-section>

          <q-card-section>
            <q-input rounded outlined v-model="username" label="用户名" >
              <template v-slot:prepend>
                <q-icon name="mdi-account-supervisor" color="primary" />
              </template>
            </q-input>
            <q-input rounded outlined v-model="password" label="密码" type="password" >
              <template v-slot:prepend>
                <q-icon name="mdi-key" color="primary" />
              </template>
            </q-input>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn @click="handleLogin" color="primary" label="登录" class="full-width rounded-button" />

          </q-card-actions>
          <q-card-actions align="center" v-if="isElectron">
            <q-btn @click="closeApp" color="warning" label="退出" class="full-width rounded-button" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>

import {ref, watchEffect} from 'vue'
import { getEncryptedResult } from 'src/utils/GetCrypto.js'; // 导入加密函数
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import {useLoginStore} from "stores/login-store.js";
const loginStore = useLoginStore();
const $q = useQuasar();
const router = useRouter();
const username = ref('');
const password = ref('');
let isElectron = ref(false)
function closeApp() {
  if (process.env.MODE === 'electron') {
    window.myWindowAPI.close()
  }
}
watchEffect(() => {
  if (process.env.MODE === 'electron') {
    isElectron.value = true
  }
})

const handleLogin = () => {
  let user = username.value;
  let pwd = password.value;
  let { isSuccess, token } = getEncryptedResult(user, pwd); // 加密后的用户名和密码
  if (!isSuccess) {
    $q.notify({
      type: 'negative',
      message: '用户名或密码错误',
      position: 'left',
    });
    return;
  }
  loginStore.token = token; // 保存token到store中
  router.push({ path: '/mapcal' });
};
</script>

<style scoped>
:root {
  --main-color: #007BFF; /* 主色调 */
  --secondary-color: #FFFFFF; /* 次要色调，如白色 */
  --input-border-color: #CCD1D9; /* 输入框边框颜色 */
}
.page-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../assets/3.jpg') no-repeat center center;
  background-size: cover;
  color: var(--secondary-color); /* 设置页面文本颜色 */
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 20px;
}

.login-card {
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* 增加卡片阴影 */
}

.frosted-glass {
  background: rgba(221, 214, 214, 0.3); /* Slightly transparent white background */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px); /* Frosted glass effect */
  -webkit-backdrop-filter: blur(10px); /* Safari support */
}

.q-card {
  padding: 20px;
}

.full-width {
  width: 100%;

}
.rounded-button {
  border-radius: 50px; /* Fully rounded corners */
  border: 2px solid var(--q-primary); /* Add a border with primary color */
  padding: 10px 20px; /* Add padding for better appearance */
  text-align: center; /* Center the text */
}

.rounded-button .q-btn__content {
  width: 100%;
  display: flex;
  justify-content: center; /* Center the content within the button */
  align-items: center;
}

.q-input {
  margin-bottom: 20px;
  border-color: var(--main-color);/* 聚焦时改变边框颜色 */
}
</style>
