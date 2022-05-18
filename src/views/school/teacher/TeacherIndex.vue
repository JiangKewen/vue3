<template>
  <PageHeader content="教师" />
  <PageBtns></PageBtns>
  <PageTable :schema="TableSchema" :data="tableData" />
  <el-backtop target=".layout-main" :right="80" :bottom="80" class="yellow" />
  <!-- 这个yellow类是在pagebtns里设置的全局选择器 -->
</template>
<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import PageTable from '../components/PageTable.vue'
import TableSchema from './teacher.schema.json'
import PageBtns from '../components/PageBtns.vue'

const tableData = ref([
  {
    id: '2016-05-03',
    name: 'Tom',
    sex: '男',
    classes: '3-2',
    grades: '3',
    school: '航空',
    age: '13',
  },
  {
    id: '2',
    name: 'Tom',
    sex: '男',
    classes: '3-2',
    grades: '3',
    school: '航空',
    age: '13',
  },
  {
    id: '3',
    name: 'Tom',
    sex: '男',
    classes: '3-2',
    grades: '3',
    school: '航空',
    age: '13',
  },
])
</script>
