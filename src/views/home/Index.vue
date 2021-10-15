<template>
  <div>home</div>
  <HomeBody leaf="1" :bar="2" @click="getBody" />
</template>

<script setup lang="ts">
import {inject} from 'vue';
import {USER_PROVIDE, User} from '@/modules/provide';
import HomeBody from './HomeBody.vue';
import { ElMessage } from 'element-plus';
import {bodyEmit} from './modules/emit';

const initUser: User = {name: 'na'}
const user = inject(USER_PROVIDE, initUser)

console.log(user, '得到user');

const getBody = (val: bodyEmit) => {
  ElMessage.success(`点击了${val.count||0}次`)
}

/**
 * import { InjectionKey, provide, inject } from 'vue'
 */
</script>