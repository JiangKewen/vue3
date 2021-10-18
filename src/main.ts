import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index';

import('@/assets/styles/common.scss')

const app  = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

// console.log(app.config);
// app.config.globalProperties.$foo000000000 = 'bar'

