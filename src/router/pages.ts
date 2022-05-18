import { RouteRecordRaw } from 'vue-router'
import Layout from '../views/layout/LayoutIndex.vue'

export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: Layout,
    redirect: '/demo/1',
    children: [
      {
        name: 'demo',
        path: 'demo',
        meta: {
          type: '01',
        },
        component: () => import('../views/demo/DemoIndex.vue'),
        children: [
          {
            name: 'demo1',
            path: '1',
            meta: {
              type: '02',
            },
            component: () => import('../views/demo/demo1/VueDemo.vue'),
          },
          {
            name: 'demo2',
            path: '2',
            meta: {
              type: '02',
            },
            component: () => import('../views/demo/demo2/VueDemo.vue'),
          },
          {
            name: 'demo3',
            path: '3',
            meta: {
              type: '02',
            },
            component: () => import('../views/demo/demo3/VueDemo.vue'),
          },
          {
            name: 'demo4',
            path: '4',
            meta: {
              type: '02',
            },
            component: () => import('../views/demo/demo4/VueDemo.vue'),
          },
          {
            name: 'demo5',
            path: '5',
            meta: {
              type: '02',
            },
            component: () => import('../views/demo/demo5/VueDemo.vue'),
          },
          {
            name: 'demo6',
            path: '6',
            meta: {
              type: '02',
            },
            component: () => import('../views/demo/demo6/VueDemo.vue'),
          },
        ],
      },
      {
        name: 'schoolsystem',
        path: 'school',
        meta: {
          type: '01',
        },
        component: () => import('@/views/school/SchoolRoute.vue'),
        children: [
          {
            name: 'school',
            path: 'school',
            meta: {
              type: '02',
              name: '学校',
            },
            component: () => import('@/views/school/school/SchoolIndex.vue'),
          },
          {
            name: 'classes',
            path: 'classes',
            meta: {
              type: '02',
              name: '班级',
            },
            component: () => import('@/views/school/classes/ClassesIndex.vue'),
          },
          {
            name: 'teacher',
            path: 'teacher',
            meta: {
              type: '02',
              name: '教师',
            },
            component: () => import('@/views/school/teacher/TeacherIndex.vue'),
          },
          {
            name: 'student',
            path: 'student',
            meta: {
              type: '02',
              name: '学生',
            },
            component: () => import('@/views/school/student/StudentIndex.vue'),
          },
        ],
      },
      {
        name: 'work',
        path: 'work',
        meta: {
          type: '01',
        },
        component: () => import('../views/excel/WorkCheck.vue'),
      },
    ],
  },
]
