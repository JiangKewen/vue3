<template>
  <el-container class="layout-box">
    <LayoutHead :title="systemTitle" />
    <el-container class="layout-body">
      <LayoutNav />
      <el-main class="layout-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutHead from './components/LayoutHead.vue'
import LayoutNav from './components/LayoutNav.vue'
const systemTitle = 'Pinia 中文文档'
</script>

<style lang="less" scoped>
.layout-box {
  display: flex;
  flex-flow: column;
  height: 100vh;
  .layout-body {
    flex: 1;
    background: #fff;
    display: flex;
    overflow: hidden;
    .layout-main {
      flex: 1;
      background: #fff;
    }
  }
}
</style>
