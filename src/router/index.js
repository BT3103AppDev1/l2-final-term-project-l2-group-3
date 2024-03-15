import Dashboard from '../components/views/Dashboard.vue'
import Settings from '../components/views/Settings.vue'
import Resume from '../components/views/Resume.vue'
import Calendar from '../components/views/Calendar.vue'
import Performance from '../components/views/Performance.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Dashboard
        },

        {
            path: "/settings",
            component: Settings
        },
        
        {
            path: "/resume",
            component: Resume
        },

        {
            path: "/calendar",
            component: Calendar
        },

        {
            path: "/performance",
            component: Performance
        }


    ]
})

export default router