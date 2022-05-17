<template>
  <div>
    <span>子组件2号： {{ name }} - {{ count }}</span>
    <el-button size="small" style="margin-left: 12px" @click="eat"
      >2号吃掉一个苹果</el-button
    >
  </div>
</template>

<script setup lang="ts">
/**child1
 * define emits
 */
import { toRefs } from 'vue'

interface Props {
  name: string
  count: number
}
const props = defineProps<Props>()
const { name, count } = toRefs(props) // 记得这样使用props

const emits = defineEmits<{
  (e: 'changeCount'): void
}>()

const eat = () => {
  emits('changeCount')
}
</script>
