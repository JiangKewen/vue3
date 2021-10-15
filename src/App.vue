<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    router
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/">home</el-menu-item>
    <el-menu-item index="device">device</el-menu-item>
    <el-menu-item index="user">user</el-menu-item>
    <el-menu-item index="login">login</el-menu-item>
  </el-menu>
  <router-view />
</template>

<script setup lang="ts">
import {ref,computed, watch, nextTick} from 'vue';
import {initStore} from '@/modules/store';
import {useRoute} from 'vue-router';

initStore()
const route = useRoute()
const initRoute = computed(() => route.path)

  const activeIndex = ref(initRoute.value)
nextTick(() => {
  activeIndex.value = initRoute.value
})


// let activeIndex = ref(initRoute.value)

// watch(() => initRoute.value, () => {
//   console.log('route', initRoute.value);
  
//   // activeIndex.value = initRoute.value
//   const activeIndex = ref(initRoute.value)
// })
</script>