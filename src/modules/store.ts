
import {InjectionKey, reactive, provide} from 'vue';

export type User = {
  name?: string,
  age?: number,
  picture?: string
  userId?: number
  roleId?: number
  companyId?: number
}

export interface STORE {
  user: User
  token?: string
}


export const INIT_STORE: InjectionKey<STORE> = Symbol()

export interface ChangeNameFnc {
  (name: string):void
}
export const STORE_CHANGE_USERNAME: InjectionKey<ChangeNameFnc> = Symbol()


// 全局的store
export const store = reactive<STORE>({
  user: {
    name: 'qdh',
    age: 18,
    userId: 1
    // ...
  },
  token: ''
})

// 提供初始化provide的方法
export const initStore = () => {
  const changeUserName = (name: string) => {
    store.user.name = name
  }
  provide(INIT_STORE, store)
  provide(STORE_CHANGE_USERNAME, changeUserName)
}
