import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login.vue'
import NotFound from "@/views/NotFound";
import CourseIndex from "@/views/CourseIndex";
import test from "@/views/test";
import Home from "@/components/Home";
import NatureTest from "@/views/NatureTest";
import MyIndex from "@/views/MyIndex";

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
        // path: '//:userId?',
        // name: 'Index',
        // component: Index,
        // props: true,
      },
      {
        path: '/CourseIndex/:courseId',
        component: CourseIndex,
        props: true,
      }
    ]
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/MyIndex',
    component: MyIndex
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
