import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import firebase from 'firebase'
import chat from './chat';
import Search from './views/Search.vue'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('./views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: ()=>import('./views/Signup.vue')
    },
    {
      path:'/dashboard',
      name: 'dashboard',
      component: ()=>import('./views/Dashboard.vue'),
      children:[{
            name:chat,
            path:'chat',
            component: Chat 
           },
          {
            name:'search',
            path:'search',
            component:Search
          },
    ],
      meta:{
        requiresAuth: true 
      }
    },
  ]
})
export default  router

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})