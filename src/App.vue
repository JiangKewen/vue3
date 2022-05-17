<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { key } from '@/configs/index'
const route = useRoute()
const router = useRouter()
console.log('route', route)
console.log('router', router)

let time = new Date()
const globalDatas = reactive({
  time,
})
setInterval(() => (globalDatas.time = new Date()), 1000)
provide(key, globalDatas)
</script>

<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
}
</style>
