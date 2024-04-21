import App from './App.vue'
// Composables
import { createApp } from 'vue'
import router from './router'
import Vuetify from '@/plugins/vuetify';
import firebaseApp from './firebase';
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'



const app = createApp(App)


app.use(Vuetify).use(router).use(VueChartkick).mount('#app')
