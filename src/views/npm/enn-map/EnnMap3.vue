<template>
  <EnnMap
    style="width: 80vw; height: 80vh"
    :datas="datas"
    :imgs="markerImgs"
    :loading="loading"
    @change-view="getNewData"
    @render-marker="renderMarker"
    @marker-click="markerClick"
  />
</template>

<script setup>
import { ref } from 'vue'

import icon1 from './map1.svg'
import icon2 from './icon4.png'
import icon3 from './icon03.png'

const datas = ref([
  {
    id: '49623fe8-23',
    lat: '31.48212',
    lng: '116.549919',
    infos: 'ffw',
  },
  {
    id: '49623fw8-23',
    lat: '31.848212',
    lng: '116.8549919',
    infos: 'fff',
  },
  {
    id: '4962gw38-23',
    lat: '31.18212',
    lng: '116.549919',
    infos: 'asdfasdfasdfadsfas',
  },
])

const markerImgs = ref([
  { icon: icon1, size: [30, 38] },
  { icon: icon2, size: [55 / 2, 106 / 2] },
  { icon: icon3, size: [46 / 2, 150 / 2] },
])

const loading = ref(false)

function getNewData(mapInfo) {
  console.log('获取到viewport', mapInfo)
  loading.value = true
  datas.value = getdatas()
  datas.value.push({
    id: '496238-23',
    lat: '31.48212',
    lng: '116.549919',
    infos: 'asdfasdfasdfadsfas',
  })
}

function renderMarker() {
  loading.value = false
}

function markerClick(val) {
  // console.log(val, 'markerClick');
}

function getdatas() {
  let datas = []
  for (let i = 0; i < 10; i++) {
    let data = {
      id: '4968-a222232' + Math.round(Math.random() * 1000),
      lat: '31.' + Math.round(Math.random() * 10000),
      lng: '116.' + Math.round(Math.random() * 10000),
      // smallInfo: '杭州: 这次真是无敌大棒棒锤',
      img: 'http://192.168.0.222:10010/static/media/default.jpg',
      infos: [
        ['名称', Math.round(Math.random() * 100)],
        ['压力', '六安次高压'],
        [
          '地址',
          '省燃输气站至合肥新奥门站，次高压管道。高速御景天地，胜利路203号。',
        ],
      ],
      icon: Math.floor(Math.random() * 3), // 0 - 第0种图标， 1 - 第1种图标
    }
    datas.push(data)
  }
  // this.loading = false
  return datas
}

function getSearch() {
  loading.value = true
  viewDatas.value = getdatas()
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
}
</style>
