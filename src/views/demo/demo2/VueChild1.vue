<template>
  <div>
    <span>子组件1号： {{ name }} - {{ count }}</span>
  </div>
</template>

<script setup lang="ts">
/**child1
 * define props
 */
import { toRefs } from 'vue'

interface Props {
  name: string
  count: number
}
const props = defineProps<Props>()
const { name, count } = toRefs(props) // 记得这样使用props
</script>
