import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/device',
    name: 'Device',
    component: () => import('@/views/device/Index.vue'),
    meta: {
      title: '设备'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/Index.vue'),
    meta: {
      title: '用户'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/v3'),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
