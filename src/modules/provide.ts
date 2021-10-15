
import {InjectionKey} from 'vue';

export type User = {
  name: string,
  age?: number
}
export const USER_PROVIDE: InjectionKey<User> = Symbol()