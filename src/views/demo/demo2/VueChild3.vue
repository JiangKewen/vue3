<template>
  <div>子组件3号：{{ time }}</div>
  <div><el-button @click="changeCount">子组件改变父组件count</el-button></div>
</template>

<script setup lang="ts">
/**child3
 * inject
 * update:value
 */
import { inject } from 'vue'
import { key } from '@/configs/index'

const time = inject(key)

interface Props {
  count: number
}
const props = defineProps<Props>()
const emits = defineEmits<{
  (e: 'update:count', n: number): void
}>()

const changeCount = () => {
  const n = Math.round(Math.random() * 100)
  emits('update:count', n)
}
</script>
