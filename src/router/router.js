import Vue from 'vue'
import VueRouter from 'vue-router'
import app from '../pages/App/app.vue'
console.log(app)
Vue.use(VueRouter)

const routesMap = [
  {
    path: '/',
    component: app,
    redirect: '/r',
    name: 'studySys',
    children: [
      {
        path: '/r',
        redirect: '/r/reception_center',
        component: (resolve) => { require(['../pages/ReceptionPortal/main.vue'], resolve) },
        name: 'study protal',
        children: [
          {
            path: '/r/reception_center',
            component: (resolve) => { require(['../pages/ReceptionCenter/main.vue'], resolve) },
            name: 'node crud',
            meta: {
              leftMuen: true,
              muenIndex: 0
            }
          },
          {
            path: '/r/my_reception',
            component: (resolve) => { require(['../pages/MyReception/main.vue'], resolve) },
            name: 'pdf',
            meta: {
              leftMuen: true,
              muenIndex: 0
            }
          },

          {
            path: '/r/my_attend',
            component: (resolve) => { require(['../pages/MyAttend/main.vue'], resolve) },
            name: 'node chat room',
            meta: {
              leftMuen: true,
              muenIndex: 0
            }
          }
        ]
      }
    ]
  }
]

/** 路由配置**/
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routesMap,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
