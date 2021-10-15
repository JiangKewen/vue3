<template>
    <el-form class="login-form" label-width="120px">
      <el-form-item label="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Login</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { reactive , getCurrentInstance } from "vue";
import { AuthLogin } from "../../api/types";
import { basicApi } from "../../api/index";

const instance = getCurrentInstance()
console.log(instance, 'login instance');


const form = reactive<AuthLogin>({
  username: "",
  password: "",
});

const onSubmit = () => {
  basicApi.authLogin(form).then((res) => {
    console.log(res);
  });
};
</script>

<style lang="scss">
.login-form {
  width: 500px;
  margin: 30vh auto;
}
</style>
