import VueRouter from 'vue-router';
import Register from './components/Register';
import Landing from './components/Landing';
import Login from './components/Login';
import Create from './components/Create';
import NotFound from './components/NotFound';
import Trek from './components/Trek';

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
            name: "create",
            component: Create,
            beforeEnter:(to, from, next)=>{
                if(sessionStorage.authtoken){next()}
                else {next('/login')}
            }                 
        },
        {
            path: '/trek',
            name: "trek",
            component: Trek,
            beforeEnter:(to, from, next)=>{
                if(sessionStorage.authtoken){next()}
                else {next('/login')}
            }                 
        },
        {
            path: '*',
            component: NotFound
        }
             ]
});

export default router;
