<template>{{ fronts }}:{{ count2 }}/{{ bar }}</template>

<script setup lang="ts">
/* eslint-disable vue/no-setup-props-destructure */
import { toRefs } from 'vue'

interface Props {
  fronts: any
  count2?: any
  bar?: number
}

// const props = defineProps<Props>()
// const { fronts, count2 } = toRefs(props)
// const { fronts, count2, bar = 10 } = { ...props }
const { fronts, count2 = 20, bar = 10 } = defineProps<Props>()

// import { useAttrs } from 'vue'
// const attrs = useAttrs()
</script>
