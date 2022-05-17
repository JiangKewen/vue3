<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="600px"
      :before-close="close"
    >
      <el-form label-width="100px" :model="excelForm" style="max-width: 460px">
        <el-form-item label="名称">
          <el-input v-model="excelForm.title" />
        </el-form-item>
        <el-form-item label="文件">
          <el-upload
            ref="upload"
            class="upload-demo"
            action="#"
            accept=".xlsx,.xls"
            :limit="1"
            :on-change="handleFile"
            :auto-upload="false"
          >
            <template #trigger>
              <el-button type="primary">上传</el-button>
            </template>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close">Cancel</el-button>
          <el-button type="primary" @click="confirm">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { Tab } from '../modules/tabs'
import { reactive, ref, toRefs } from 'vue'
import { ElMessageBox } from 'element-plus'
import * as XLSX from 'xlsx'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const props = defineProps<{
  dialogVisible: boolean
}>()
const { dialogVisible } = toRefs(props)
const emits = defineEmits<{
  (e: 'visible', visible: boolean): void
  (e: 'submit', form: Tab): void
}>()

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

const close = () => emits('visible', false)
const confirm = () => {
  emits('visible', false)
  emits('submit', excelForm)
  clearForm()
}

const excelForm = reactive<Tab>({
  id: '0',
  title: '',
  content: '',
  keys: [],
})

const upload = ref<UploadInstance>()

const clearForm = () => {
  const keys = Object.keys(excelForm)
  let obj: { [name: string]: string } = {}
  keys.forEach((item) => {
    obj[item] = ''
  })
  Object.assign(excelForm, obj)
  upload.value!.clearFiles()
}

const handleFile = (file: any) => {
  let reader = new FileReader()
  reader.onload = function (e: any) {
    let data = new Uint8Array(e?.target?.result)
    let workbook = XLSX.read(data, { type: 'array' })
    let first_sheet_name = workbook.SheetNames[0]
    let worksheet = workbook.Sheets[first_sheet_name]
    let content = XLSX.utils.sheet_to_json(worksheet)

    console.log('content', content)
    // TODO 对内容做一定的判断处理
    excelForm.content = content
  }
  reader.readAsArrayBuffer(file.raw)
}
</script>
