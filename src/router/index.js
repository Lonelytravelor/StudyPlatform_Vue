import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Login from '../views/Login.vue'
import NotFound from "@/views/NotFound";
import CourseIndex from "@/views/CourseIndex";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/CourseIndex/:courseId',
    name: 'CourseIndex',
    component: CourseIndex,
    props: true,
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
