import { nextTick, reactive, Ref, ref, watch } from 'vue'

export default (count: Ref<number> | number = ref(1)) => {
  const fruits = reactive({
    name: '苹果',
    // count: ref(count),
    count: count,
  })
  const changeFName = (name: string) => {
    fruits.name = name
  }
  const changeFCount = (count: number) => {
    nextTick(() => (fruits.count = count))
  }

  console.log(fruits, fruits.count)
  watch(fruits, (val) => {
    console.log('watch - fruits:', val, val.count)
  })

  return {
    fruits,
    changeFName,
    changeFCount,
  }
}
