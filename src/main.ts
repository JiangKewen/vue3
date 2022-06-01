import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import 'element-plus/theme-chalk/src/message-box.scss'
// import 'element-plus/theme-chalk/src/message.scss'
// import 'element-plus/theme-chalk/src/button.scss'
import '@/assets/global.scss'

import EnnChart from 'enn-chart-v3'
import EnnMap from 'enn-map-v3'

const app = createApp(App)

app.use(EnnChart)
app.use(EnnMap, {
  ak: 'BI5VQIkfzwp43bSKmR87D56MjXT1MLfs',
})

// app.config.globalProperties // 全局对象，比如在模板上就可以直接使用

app.use(ElementPlus)
app.use(router)
app.mount('#app')
