<template>
  <div>demo2</div>
  <el-button @click="changeFName(value)">改名字</el-button>
  <el-button @click="changeFCount(Number.parseFloat(value))">改数量</el-button>
  <el-input style="width: 200px; margin-left: 12px" v-model="value"></el-input>
  <hr />
  <div>
    <span>父组件中：{{ fruits }}</span>
  </div>
  <div>
    <VueChild1 :name="fruits.name" :count="fruits.count" />
  </div>
  <div>
    <VueChild2 :name="fruits.name" :count="fruits.count" @change-count="eat" />
  </div>
  <hr />
  <div>
    <VueChild3 v-model:count="fruits.count" />
  </div>
</template>
<script setup lang="ts">
/**2
 * 父子组件
 */
import { ref } from 'vue'
import useFruit from '../demo1/useFruit'
import VueChild1 from './VueChild1.vue'
import VueChild2 from './VueChild2.vue'
import VueChild3 from './VueChild3.vue'

const { fruits, changeFName, changeFCount } = useFruit(1)
const value = ref('')

const eat = () => {
  if (fruits.count <= 0) return
  fruits.count--
}
</script>
