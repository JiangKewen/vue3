<template>
  <div class="work-box">
    <div class="tables">
      <el-tabs
        v-model="currentTab"
        type="card"
        editable
        class="demo-tabs"
        @edit="editTabs"
      >
        <el-tab-pane
          v-for="item in tabs"
          :key="item.id"
          :label="item.title"
          :name="item.id"
        >
          <el-table :data="item.content" style="width: 100%">
            <el-table-column
              v-for="col in item.keys"
              :prop="col"
              :label="col"
              :key="col"
              width="180"
            />
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>

    <add-excel
      v-if="dialogVisible"
      :dialog-visible="dialogVisible"
      @visible="visible"
      @submit="submit"
    />
  </div>
</template>

<script setup lang="ts">
import useTabs from './modules/tabs'
import AddExcel from './components/AddExcel.vue'
import { ref } from 'vue'
import type { Tab } from './modules/tabs'

const dialogVisible = ref(false)
const visible = (visible: boolean) => {
  dialogVisible.value = visible
}

const addFc = () => {
  console.log(1)
  visible(true)
}
const { tabIndex, currentTab, tabs, editTabs, addTab } = useTabs(addFc)

const submit = (form: Tab) => {
  console.log(form, '得到数据')
  const id = `${++tabIndex.value}`
  let keysObj = new Set()
  form.content.forEach((sheet: any) => {
    Object.keys(sheet).forEach((key) => {
      keysObj.add(key)
    })
  })
  const tabData = {
    title: form.title, // label
    id, // id
    content: form.content, // data
    keys: [...keysObj], // table
  }
  addTab(tabData)

  localStorage.setItem('DATA', JSON.stringify(tabs.value))
}
</script>

<style scoped lang="less">
.work-box {
  background-color: #fff;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 16px;
}
</style>
