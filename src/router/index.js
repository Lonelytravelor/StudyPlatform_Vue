import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index'
import Login from '../views/Login.vue'
import NotFound from "@/views/NotFound";

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '*',
    component: NotFound
  },

]

const router = new VueRouter({
  routes
})

export default router
