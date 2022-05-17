import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import 'element-plus/theme-chalk/src/message-box.scss'
// import 'element-plus/theme-chalk/src/message.scss'
// import 'element-plus/theme-chalk/src/button.scss'

const app = createApp(App)

// app.config.globalProperties // 全局对象，比如在模板上就可以直接使用

app.use(router)
app.mount('#app')
