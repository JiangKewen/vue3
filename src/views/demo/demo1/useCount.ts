import { Ref, ref, unref } from 'vue'

export default (init: number | Ref<number> = 1) => {
  const initCount = unref(init)

  const count = ref<number>(initCount)
  const addCount = () => count.value++

  return {
    count,
    addCount,
  }
}
