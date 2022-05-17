<template>
  <div class="demo">
    <el-button @click="add(1)">add Count is: {{ count }}</el-button>
    <el-button @click="minus(1)">minus Count is: {{ count }}</el-button>
  </div>
  <hr />
  <div class="demo">
    <el-button @click="change"
      >add fronts.count: {{ state.fronts.count }}</el-button
    >
    <el-button @click="change2">add count2: {{ count2 }}</el-button>
    <el-button>state.count2: {{ state.count2 }}</el-button>
  </div>
  <hr />
  <vue-child :fronts="state.fronts" :count2="state.count2" />
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from 'vue'
import useCount from './modules/count'
import VueChild from './VueChild.vue'
const { count, add, minus } = useCount()

onMounted(() => {
  console.log('这里执行onMounted', count.value)
})

// reactive

const state = reactive({
  fronts: {
    count: 1,
  },
  count2: 2,
})
let { fronts, count2 } = state

function change() {
  fronts.count++
}
function change2() {
  state.count2++
}

// ref

const count3 = ref(3)
const stateRef = ref({
  fronts: {
    count: 1,
    count2: ref(2),
  },
  count2: 2,
  count3,
})
stateRef.value.fronts.count++
stateRef.value.fronts.count2++ // 不用.value

// ref得是顶层property才会自动解包

/* class
  <!-- my-component 模板使用 $attrs 时 -->
  <p :class="$attrs.class">Hi!</p>
  <span>This is a child component</span>
*/
</script>
