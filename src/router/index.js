import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Login from '../views/Login.vue'
import NotFound from "@/views/NotFound";
import CourseIndex from "@/views/CourseIndex";
import test from "@/views/test";
import NatureTest from "@/views/NatureTest";
import PersonCerter from "@/views/PersonCerter";

Vue.use(VueRouter)

const routes = [
  {
    path: '//:userId?',
    name: 'Index',
    component: Index,
    props: true,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/PersonCerter/:userId',
    name: 'PersonCerter',
    component: PersonCerter,
    props: true,
  },
  {
    path: '/Test',
    name: 'Test',
    component: test,
  },
  {
    path: '/NatureTest',
    name: 'NatureTest',
    component: NatureTest,
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
