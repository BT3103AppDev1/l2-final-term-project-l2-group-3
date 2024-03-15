
// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'
import router from './router'
import Vuetify from '@/plugins/vuetify';

const app = createApp(App)


app.use(Vuetify).use(router).mount('#app')