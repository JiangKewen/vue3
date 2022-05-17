<template>
  <div>demo1使用下基础的响应式数据</div>
  <hr />
  <div>
    <el-button @click="addCount">count加1</el-button><br />
    <strong>第一个count{{ count }}</strong>
    <br />
    <strong>{{ fruits.name }}里的count{{ fruits.count }}</strong>
  </div>
  <hr />
  <div>
    <el-input style="width: 200px" v-model="fruits.name"></el-input>
    <el-input style="width: 200px" v-model.number="fruits.count"></el-input>
  </div>
</template>

<script setup lang="ts">
/**1
 * 组合式函数
 * ref
 * reactive
 */
import useCount from './useCount'
import useFruit from './useFruit'

const { count, addCount } = useCount(3)
const { fruits } = useFruit(count)
</script>
