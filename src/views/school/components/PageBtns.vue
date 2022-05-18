<template>
  <section class="options-box">
    <el-button>新增</el-button>
    <slot></slot>
    <!-- <div :class="$style.a">外面的options-box不用$style,则这个不会生效</div> -->
  </section>
  <!-- <div :class="$style[b]">bbbbbbb</div> -->
  <!-- <div class="theme">theme</div> -->
</template>

<script setup lang="ts">
import { reactive, ref, useCssModule } from 'vue'

// useCssModule()
// useCssModule('classes') // 自定义注入名称的时候

const b = ref<string>('bb')

const theme = reactive({
  color: 'green',
})
setTimeout(() => {
  theme.color = 'tan'
}, 2000)
</script>

<style lang="scss" scoped>
// module
// module="classes"
// try vue3 css
.bb {
  color: green;
  margin: 20px;
}
.theme {
  color: v-bind('theme.color');
}

.options-box {
  margin: 18px 0 20px 0;
  .a {
    color: red;
  }
  :deep(.el-button) {
    // 深度选择器
    color: rgb(24, 113, 180);
  }
  :slotted(.el-button) {
    // 插槽选择器
    color: red;
  }
  :global(.yellow) {
    // 全局选择器
    color: yellow;
  }
}
</style>
