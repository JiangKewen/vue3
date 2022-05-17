<router-link to="/home">Home</router-link>
<router-link :to="{ path: '/register', query: { plan: 'private' }}">

<router-link to="/abc" replace></router-link>

active-class默认router-link-active
exact-active-class精准激活

<router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition || 'fade'" mode="out-in">
    <keep-alive>
      <component
        :is="Component"
        :key="route.meta.usePathKey ? route.path : undefined"
      />
    </keep-alive>
  </transition>
</router-view>

export declare function createRouter(options: RouterOptions): Router
export declare function createWebHashHistory(base?: string): RouterHistory

import { START_LOCATION } from 'vue-router'

router.beforeEach((to, from) => {
  if (from === START_LOCATION) {
    // 初始导航
  }
})

// 类似于 beforeRouteLeave，但它可以在任何组件中使用
export declare function onBeforeRouteLeave(leaveGuard: NavigationGuard): void