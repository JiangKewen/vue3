<template>
  <PageHeader content="班级" />
  <PageBtns></PageBtns>
  <PageTable :schema="TableSchema" :data="tableData" />
  <el-backtop target=".layout-main" :right="80" :bottom="80" class="yellow" />
  <!-- 这个yellow类是在pagebtns里设置的全局选择器 -->
</template>
<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import PageTable from '../components/PageTable.vue'
import TableSchema from './class.schema.json'
import PageBtns from '../components/PageBtns.vue'

const tableData = ref([
  {
    id: '2016-05-03',
    name: 'Tom',
  },
  {
    id: '2016-05-02',
    name: 'Tom',
  },
  {
    id: '2016-05-04',
    name: 'Tom',
  },
  {
    id: '2016-05-01',
    name: 'Tom',
  },
])
</script>
