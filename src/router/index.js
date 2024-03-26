import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Manage.vue'),
    redirect: '/home', //重定向到home页
     children: [
       {
         path: 'home',
         name: 'Home',
         component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
       },
       {
         path: 'user',
         name: 'User',
         component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
       },
       {
         path: 'person',
         name: 'Person',
         component: () => import(/* webpackChunkName: "about" */ '../views/Person.vue')
       },
     ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
