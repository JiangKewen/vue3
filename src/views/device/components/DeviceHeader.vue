<template>
  <el-page-header content="感知设备" @back="goBack"></el-page-header>
  <div class="page-box">
    <div class="device-head">
      <h3>感知设备</h3>
      <el-button type="primary">新增</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: 'goBack', n: number): void
}>()
const goBack = () => {
  emits('goBack', -1)
}
</script>

<style scoped lang="less">
.page-box {
  background: #fff;
}
</style>
