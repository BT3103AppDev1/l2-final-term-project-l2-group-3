import Home from '@/components/views/LandingPage.vue'
import Dashboard from '@/components/views/Dashboard.vue'
import Settings from '../components/views/Settings.vue'
import Resume from '../components/views/Resume.vue'
import Calendar from '../components/views/Calendar.vue'
import Performance from '../components/views/Performance.vue'
import Login from '@/components/views/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'


const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },

        {
            path: "/dashboard",
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
        },

        {
            path:"/login",
            component: Login
        }
    ]
});

router.beforeEach((to, from, next) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        const requiresAuth = !['/', '/login', '/register'].includes(to.path);
        if (requiresAuth && !user) {
            next('/'); // If the route requires auth and there's no user, redirect to home
        } else {
            next(); // Otherwise, proceed as normal
        }
    });

});

export default router