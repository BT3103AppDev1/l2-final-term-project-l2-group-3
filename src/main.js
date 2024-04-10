import App from './App.vue'
// Composables
import { createApp } from 'vue'
import router from './router'
import Vuetify from '@/plugins/vuetify';
import firebaseApp from './firebase';
//import { MotionPlugin } from '@vueuse/motion'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';


const app = createApp(App)


app.use(Vuetify).use(router).use(VueChartkick).mount('#app')
app.use(VCalendar, {})
