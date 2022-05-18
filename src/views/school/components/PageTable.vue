<template>
  <el-table :data="data" stripe style="width: 100%">
    <template v-for="column in schema.column" :key="column.key">
      <el-table-column
        v-if="column.inTable !== false"
        :prop="column.key"
        :label="column.name"
      />
    </template>
  </el-table>
</template>

<script lang="ts" setup>
interface Props {
  schema: any
  data: any[]
}
const { schema, data } = defineProps<Props>()
</script>
