import App from './App.vue'
// Composables
import { createApp } from 'vue'
import router from './router'
import Vuetify from '@/plugins/vuetify';
import firebaseApp from './firebase';
import { MotionPlugin } from '@vueuse/motion'


const app = createApp(App)


app.use(Vuetify).use(MotionPlugin).use(router).mount('#app')
