import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login.vue'
import NotFound from "@/views/NotFound";
import CourseIndex from "@/views/CourseIndex";
import Home from "@/components/Home";
import NatureTest from "@/views/NatureTest";
import MyIndex from "@/views/MyIndex";
import test from "@/views/test";
import PersonMessage from "@/views/PersonMessage";

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
      {
        path: '/CourseIndex/:courseId',
        component: CourseIndex,
        props: true,
      },
      {
        path: '/PersonMessage',
        component: PersonMessage,
      },
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
    path: '/NatureTest',
    component: NatureTest,
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
