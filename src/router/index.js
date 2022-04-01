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
import PersonCenter from "@/views/PersonCenter";
import CourseSummary from "@/views/CourseSummary";
import AllCourseByLabel from "@/views/AllCourseByLabel";
import SelectCourse from "@/views/SelectCourse";
import CourseStudy from "@/views/CourseStudy";
import CourseUniversity from "@/views/CourseUniversity";
import AllCourseByUniversity from "@/views/AllCourseByUniversity";

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
      {
        path: '/PersonCenter',
        component: PersonCenter,
      },
      {
        path: '/CourseSummary',
        component: CourseSummary,
      },
      {
        path: '/CourseUniversity',
        component: CourseUniversity,
      },
      {
        path: '/AllCourseByLabel/:label',
        component: AllCourseByLabel,
        props: true,
      },
      {
        path: '/AllCourseByUniversity/:university',
        component: AllCourseByUniversity,
        props: true,
      },
      {
        path: '/SelectCourse/:courseName',
        component: SelectCourse,
        props: true,
      },
      {
        path: '/CourseStudy',
        component: CourseStudy,
        props: true,
        redirect: '/CourseDetails',
        children: [
          {
            path: '/CourseDetails',
            component: () => import('../views/CourseDetails')
          },
          {
            path: '/CourseReference',
            component: () => import('../views/CourseReference'),
          },
          {
            path: '/CourseAnnouncement',
            component: () => import('../views/CourseAnnouncement'),
          },
          {
            path: '/CourseTestIndex',
            component: () => import('../views/CourseTestIndex'),
          },
          {
            path: '/CourseTest/:testTitle',
            component: () => import('../views/CourseTest'),
            props: true,
          },
          {
            path: '/CourseHistoricalTest/:testId',
            component: () => import('../views/CourseHistoricalTest'),
            props: true,
          },
          {
            path: '/CourseWareIndex',
            component: () => import('../views/CourseWareIndex'),
          },
          {
            path: '/CourseWare/:courseWareId?',
            component: () => import('../views/CourseWare'),
            children: [
              {
                path: '/CourseWareShow/:courseWareId',
                component: () => import('../views/CourseWareShow'),
                props: true
              }
            ]
          }
        ]
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
