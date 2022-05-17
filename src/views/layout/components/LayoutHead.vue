<template>
  <el-header class="head-box">
    <div class="head-left">
      <h1>{{ props.title }}</h1>
    </div>
    <div class="head-right">
      <span>个人中心</span>
    </div>
  </el-header>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<style lang="less" scoped>
.head-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  min-height: 46px;
  max-height: 90px;
  box-shadow: 0 -1px 0px 1px #eee inset;
  padding: 0 1vw;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
}
</style>
