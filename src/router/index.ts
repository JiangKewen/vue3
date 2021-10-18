import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Index.vue'),
    alias: '/home',
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
  },
  {
    path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/404/Index.vue'),
    meta: {
      title: '404'
    }
  },
]

const router = createRouter({
  history: createWebHistory('/v3'),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  routes: constantRoutes
})

export default router
