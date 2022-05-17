import { ref } from 'vue'

export const useCount = (init: number = 1) => {
  const count = ref<number>(init)
  const add = (n: number = 1): number => {
    const res = count.value + n
    count.value = res
    return res
  }
  const minus = (n: number = 1): number => {
    const res = count.value - n
    count.value = res
    return res
  }

  return {
    count,
    add,
    minus,
  }
}

export default useCount
