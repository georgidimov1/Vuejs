import VueRouter from 'vue-router';
import Register from './components/Register';
import Landing from './components/Landing';
import Login from './components/Login';
import Create from './components/Create';

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: Landing
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/create',
            component: Create
        }
             ]
});

export default router;
