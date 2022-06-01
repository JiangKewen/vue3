<template>
  <div class="app">
    <enn-pie
      style="width: 500px; height: 300px"
      :time="3000"
      :datas="pieData"
      :options="pieOptions"
    />
    <hr />
    <enn-line
      style="width: 500px; height: 300px"
      :datas="datas"
      :options="options"
    />
    <hr />
    <enn-bar
      :time="3000"
      style="width: 500px; height: 300px"
      :datas="barDatas"
      @init="getChart"
    />
  </div>
</template>

<script>
// import ChartBar from '../lib/components/ChartBar.vue'
// import ChartLine from '../lib/components/ChartLine.vue'
// import ChartPie from '../lib/components/ChartPie.vue'
export default {
  // components: { ChartBar, ChartLine, ChartPie },
  name: 'App',

  data() {
    return {
      datas: {
        name: ['七月', '八月'],
        x: ['a1', 'b2', 'c3', 'd4', 'e5'],
        data: [
          [29, 53, 3, 102, 45],
          [65, 4, 123, 87, 182],
        ],
      },
      options: {},

      pieData: {
        name: '七月',
        x: ['a1', 'b2', 'cc'],
        data: [29, 33, 18],
      },
      barDatas: {
        name: ['七月'],
        x: ['a1', 'b2', 'c3', 'd4', 'e5'],
        data: [29, 53, 3, 102, 45],
      },
      pieOptions: {
        // title: {
        //   text: 'aaaabbbbb',
        // },
        series: {
          radius: ['46%', '70%'],
        },
      },
    }
  },

  mounted() {
    setInterval(() => {
      this.datas.data = [
        [29, 53, 3, 102, 45, 2],
        [2, 3, 55, 33, 22, 65],
        [
          65,
          Math.ceil(Math.random() * 100),
          123,
          87,
          182,
          Math.ceil(Math.random() * 40),
        ],
      ]
      this.datas.name = ['7777', '8888', '9999']
      this.datas.x = ['a1', 'b2', 'c3', 'd4', 'e5', 'f6']
      this.options.color = [
        `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(
          Math.random() * 255,
        )},${Math.ceil(Math.random() * 255)})`,
        `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(
          Math.random() * 255,
        )},${Math.ceil(Math.random() * 255)})`,
        'black',
      ]
    }, 2000)
  },
  methods: {
    getChart(chart) {
      console.log('chart父组件获取到', chart)
      console.log(chart.getOption(), 'option')
    },
  },
}
</script>
