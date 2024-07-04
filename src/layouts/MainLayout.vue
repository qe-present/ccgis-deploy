<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-bar class="q-electron-drag" v-if="isElectron">
        <div>CCGIS--长春市公共信息服务平台</div>
        <q-space/>
        <q-btn dense flat icon="minimize" @click="minimize"/>
        <q-btn dense flat icon="crop_square" @click="toggleMaximize"/>
        <q-btn dense flat icon="close" @click="closeApp"/>
      </q-bar>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-space v-for="i in 10" :key="i" />
        <q-btn
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
        >
          <q-tooltip class="bg-accent" v-if="$q.fullscreen.isActive">退出全屏</q-tooltip>
          <q-tooltip class="bg-accent" v-else>全屏</q-tooltip>
        </q-btn>
        <q-space/>
        <q-btn  @click="goGit">
          <q-icon name="mdi-git" />
          <q-tooltip class="bg-accent">git仓库</q-tooltip>
        </q-btn>

        <q-btn  @click="handleLogout">
          <q-icon name="logout" />
          <q-tooltip class="bg-accent">退出登录</q-tooltip>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-blue-4 text-black "
    >
      <q-list>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref, watchEffect} from 'vue'
import {useLoginStore} from "stores/login-store.js";
import EssentialLink from 'components/EssentialLink.vue'
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";
const router = useRouter();
const $q = useQuasar()
const loginStore = useLoginStore()
let isElectron = ref(false)
watchEffect(() => {
  if (process.env.MODE === 'electron') {
    isElectron.value = true
  }
})
const goGit = () => {
  window.open('https://gitee.com/its-hard-to-be-distracted/ccgis')
}
const handleLogout = () => {
  loginStore.logout()
  router.push({path: '/login'})
}
const toggleTheme = () => {
  $q.dark.toggle()
}

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: '地图量算',
    icon: 'straighten',
    link: 'MapCal',

  },
  {
    title: '查询服务',
    icon: 'search',
    link: 'query',

  },
  {
    title: '公交规划',
    icon: 'directions_bus',
    link: 'transportation'
  },
  {
    title: '旅游景点',
    icon: 'place',
    link: 'travel',

  },
  {
    title: '救援帮助',
    icon: 'local_hospital',
    link: 'rescue',

  },
  {
    title: '天气预报',

    icon: 'wb_sunny',
    link: 'weather'
  },
  {
    title: '配置管理',
    icon: 'settings',
    link: 'setting'
  },
  {
    title: '关于',
    icon: 'info',
    link: 'about'
  }
]

const leftDrawerOpen = ref(false)
let miniState = ref(true)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function minimize() {
  if (process.env.MODE === 'electron') {
    window.myWindowAPI.minimize()
  }
}

function toggleMaximize() {
  if (process.env.MODE === 'electron') {
    window.myWindowAPI.toggleMaximize()
  }
}

function closeApp() {
  if (process.env.MODE === 'electron') {
    window.myWindowAPI.close()
  }
}
</script>
<style scoped>

</style>
