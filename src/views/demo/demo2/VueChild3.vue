<template>
  <div>子组件3号：{{ time }}</div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { key } from '@/configs/index'

const time = inject(key)
</script>
