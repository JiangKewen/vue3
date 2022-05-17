<template>
  <el-aside class="nav-box">
    <el-menu router class="el-menu-vertical-demo">
      <template v-for="route in routes" :key="route.name">
        <!-- 多级菜单 -->
        <el-sub-menu
          v-if="route.children && route.children.length"
          :index="route.path"
        >
          <!-- 父级菜单 -->
          <template #title>
            <span>{{ route.name }}</span>
          </template>
          <!-- 子级菜单 -->
          <el-menu-item
            :index="child.path"
            v-for="child in route.children"
            :key="child.name"
          >
            <span>{{ child.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <!-- 一级菜单 -->
        <el-menu-item v-else :index="route.path">
          <span>{{ route.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Nav {
  name: string
  path: string
  children?: Nav[]
}

const routes = ref<Nav[]>([
  {
    name: 'Vue3',
    path: '/demo',
    children: [
      {
        name: 'demo1',
        path: '/demo/1',
      },
      {
        name: 'demo2',
        path: '/demo/2',
      },
      {
        name: 'demo3',
        path: '/demo/3',
      },
      {
        name: 'demo4',
        path: '/demo/4',
      },
      {
        name: 'demo5',
        path: '/demo/5',
      },
      {
        name: 'demo6',
        path: '/demo/6',
      },
    ],
  },
  {
    name: '考勤表',
    path: '/work',
    children: [],
  },
])
</script>

<style scoped lang="less">
.nav-box {
  width: 12vw;
  min-width: 80px;
  max-width: 320px;
  .el-menu-vertical-demo {
    height: 100%;
    max-height: 100%;
  }
}
</style>
