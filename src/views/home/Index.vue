<template>
  <div>home</div>
  <HomeBody leaf="1" :bar="2" @click="getBody" />
  <div>用户信息(放在全局provide中):{{ store.user.name || "-" }}</div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { INIT_STORE, STORE } from "@/modules/store";
import HomeBody from "./HomeBody.vue";
import { ElMessage } from "element-plus";
import { bodyEmit } from "./modules/emit";

const initUser: STORE = { user: { name: "na" } };
const store = inject(INIT_STORE, initUser);

const getBody = (val: bodyEmit) => {
  ElMessage.success(`点击了${val.count || 0}次`);
};

/**
 * import { InjectionKey, provide, inject } from 'vue'
 */
</script>
