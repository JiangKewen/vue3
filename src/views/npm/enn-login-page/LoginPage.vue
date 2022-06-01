<template>
  <LoginPage title="LoRaWAN网络控制平台">
    <LoginForm
      :if-err="ifError"
      :err-msg="errorMsg"
      v-model:loading="loading"
      :has-captcha="false"
      @login="loginhandle"
    >
      <template #otherBtns="{ validate, ref, form }">
        <el-col :span="24">
          <el-button
            class="login-btn"
            type="primary"
            style="width: 100%"
            @click="onClick(validate, form, ref)"
            >注册</el-button
          >
        </el-col>
      </template>
    </LoginForm>
  </LoginPage>
</template>

<script setup>
import { LoginPage, LoginForm } from 'enn-login-page-v3'
import { ref } from 'vue'

// loading: false,
// errorMsg: '',
// ifError: false,
const loading = ref(false)
const errorMsg = ref('')
const ifError = ref(false)

function onClick(validate, form, ref) {
  validate((valid) => {
    console.log(valid, form)
  })
}
function loginhandle(form) {
  loading.value = true
  ifError.value = false
  fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(form),
  })
    .then((res) => {
      if (res.data.code === 200) {
        // ...
        loading.value = false
      }
    })
    .catch(() => {
      setTimeout(() => {
        errorMsg.value = '用户名或密码错误'
        ifError.value = true
        loading.value = false

        // setTimeout(() => {
        //   // 或者根据实际业务处理报错提示的3s后隐藏
        //   ifError.value = false;
        // }, 3000);
        loading.value = false
      }, 800)
    })
}
</script>
