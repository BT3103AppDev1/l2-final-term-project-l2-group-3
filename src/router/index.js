import Dashboard from '@/components/views/Dashboard.vue'
import Settings from '../components/views/Settings.vue'
import Resume from '../components/views/Resume.vue'
import Calendar from '../components/views/Calendar.vue'
import Performance from '../components/views/Performance.vue'
import Login from '@/components/views/Login.vue'
import Register from '@/components/views/Register.vue'
import PasswordReset from '@/components/views/PasswordReset.vue'
import Reset from '@/components/views/Reset.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'


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
        },

        {
            path:"/register",
            component: Register
        },

        {
            path:"/forgotPassword",
            component: PasswordReset
        },

        {
            path:"/login",
            component: Login
        },

        {
            path:"/reset",
            component: Reset
        }
    ]
});

router.beforeEach((to, from, next) => {
    const auth = getAuth();
    let isAuthenticatedChecked = false;

    onAuthStateChanged(auth, (user) => {
        if (!isAuthenticatedChecked) {
            isAuthenticatedChecked = true;
            if (to.path === '/login' || to.path === '/register' || to.path === '/forgotPassword' || to.path== '/reset' || user) {
                next();
            } else {
                next('/login');
            }
        }
    });

    setTimeout(() => {
        if (!isAuthenticatedChecked) {
            isAuthenticatedChecked = true;
            next();
        }
    }, 1000);
});

export default router