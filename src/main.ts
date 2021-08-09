import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css'

const app = createApp(App).use(router).mount('#app')
// app.config.globalProperties.$http = () => {}