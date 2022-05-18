<template>
  <el-page-header :content="content" :title="title" @back="goBack" />
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

interface Props {
  title?: string
  content: string
}
const { title = '学校系统', content } = defineProps<Props>()

const router = useRouter()
const goBack = () => {
  router.push('/school/school')
}
</script>
