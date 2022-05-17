<template>
  <DeviceHeader @go-back="goBack" />
  <div>DeviceHeader device</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import DeviceHeader from './components/DeviceHeader.vue'
const router = useRouter()
const goBack = (n: number) => {
  router.go(n)
}
</script>
