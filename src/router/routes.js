const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: 'mapcal',
    children: [
      {
        path: 'mapcal',
        component: () => import('pages/MapCal.vue'),
        meta: {
          title: '地图量算',
          requiresAuth: true
        }

      }, //地图量算
      {
        path: 'query',
        component: () => import('pages/Query.vue'),
        meta: {
          title: '查询服务',
          requiresAuth: true
        }
      },  // 查询服务
      {
        path: 'travel',
        component: () => import('pages/Travel.vue'),
        meta: {
          title: '旅游景点',
          requiresAuth: true
        }
      },  // 旅游景点
      {
        path: 'rescue',
        component: () => import('pages/Rescue.vue'),
        meta: {
          title: '救援帮助',
          requiresAuth: true
        }
      },  // 救援帮助
      {
        path: 'transportation',
        component: () => import('pages/Bus.vue'),
        meta: {
          title: '公交换乘',
          requiresAuth: true
        }
      },  // 公交换乘
      {
        path: 'weather',
        component: () => import('pages/Weather.vue'),
        meta: {
          title: '天气查询',
          requiresAuth: true
        }
      },
      {
        path: 'setting',
        component: () => import('pages/Setting.vue'),
        meta: {
          title: '配置管理',
          requiresAuth: true
        }
      },
      {
        path: 'about',
        component: () => import('pages/About.vue'),
        meta: {
          title: '关于',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
    meta: {
      title: '登录',
      requiresAuth: false
    }
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
