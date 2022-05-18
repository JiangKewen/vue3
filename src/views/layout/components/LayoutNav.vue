<template>
  <el-aside class="nav-box">
    <el-menu
      router
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
    >
      <template v-for="nav in routes" :key="nav.name">
        <!-- 多级菜单 -->
        <el-sub-menu
          v-if="nav.children && nav.children.length"
          :index="nav.path"
        >
          <!-- 父级菜单 -->
          <template #title>
            <span>{{ nav.name }}</span>
          </template>
          <!-- 子级菜单 -->
          <el-menu-item
            :index="child.path"
            v-for="child in nav.children"
            :key="child.name"
          >
            <span>{{ child.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <!-- 一级菜单 -->
        <el-menu-item v-else :index="nav.path">
          <span>{{ nav.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

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
    name: '学校系统',
    path: '/school',
    children: [
      {
        name: '学校',
        path: '/school/school',
      },
      {
        name: '班级',
        path: '/school/classes',
      },
      {
        name: '教师',
        path: '/school/teacher',
      },
      {
        name: '学生',
        path: '/school/student',
      },
    ],
  },
  {
    name: '考勤表',
    path: '/work',
    children: [],
  },
])

const route = useRoute()
console.log(route.fullPath, 'route')

const defaultActive = computed(() => {
  return route.fullPath || '/school/school'
})
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
