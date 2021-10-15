<template>
  <div>user</div>
  <el-input v-model="tempName"></el-input>
  <el-button @click="click">改变user</el-button>
</template>


<script setup lang="ts">
import {inject, ref, computed} from 'vue';
import {INIT_STORE, STORE_CHANGE_USERNAME} from '@/modules/store';

const store = inject(INIT_STORE, {user: {}})

const name = computed(() => {
  return store.user.name
})

const tempName = ref(name.value)

const changeUserName = inject(STORE_CHANGE_USERNAME, () => {})

const click = () => {
  changeUserName(tempName.value as string)
}

</script>