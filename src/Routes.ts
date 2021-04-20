import Router from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Body  from './components/Body.vue'
import Vue from 'vue/types/umd'

Vue.use(Router)
    const routes= [{
        path:'/',
        name:'header',
        component: Header
    },
    {
        path:'/',
        name:'body',
        Component: Body
    },
    {
        path:'/',
        name:'footer',
        component: Footer
    }
];
const router= new Router({
    mode: "history",
    routes
});
export default new Router;

