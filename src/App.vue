<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    router
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/">home</el-menu-item>
    <el-menu-item index="device">device</el-menu-item>
    <el-menu-item index="login">login</el-menu-item>
  </el-menu>
  <router-view />
</template>

<script setup lang="ts">
import {provide,reactive,ref} from 'vue';
import {USER_PROVIDE, User} from '@/modules/provide';

const user = reactive<User>({
  name: 'jkw'
})
provide(USER_PROVIDE, user)

const activeIndex2 = ref('/')

</script>