import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css'
// import { firestore } from '@/plugins/firebase'

// declare module '@vue/runtime-core' {
//   export interface ComponentCustomProperties {
//     $firestore: typeof firestore
//   }
// }


const app = createApp(App)
// app.config.globalProperties.$firestore = firestore
app.use(router).mount('#app')

