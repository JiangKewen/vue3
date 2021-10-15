<template>
  <div @click="handleClick">home - body | 点我</div>
  <div>双倍快乐： {{double}}</div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import {bodyEmit} from './modules/emit'; // 提到外面，方便父组件拿到数据类型

const emits = defineEmits<{
  (e: "click", value: bodyEmit): void;
  (e: "update", value: string): void;
}>();

const props = withDefaults(
  defineProps<{
    leaf: string;
    bar?: number;
  }>(),
  {
    leaf: "2",
  }
);

const count = ref<number>(0)
const double = computed(() => count.value * 2)

const handleClick = () => {
  emits("click", { body: 1, count: ++count.value });
};
</script>
