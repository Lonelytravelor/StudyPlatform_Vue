import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Login from '../views/Login.vue'
import NotFound from "@/views/NotFound";
import CourseIndex from "@/views/CourseIndex";
import test from "@/views/test";
import NatureTest from "@/views/NatureTest";
import PersonCerter from "@/views/PersonCerter";
import Home from "@/components/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/',
    component: Home,
    children:[
      {
        path: '/index',
        component: Index,
      },
    ]
  },
  {
    path: '/test',
    component: test
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
