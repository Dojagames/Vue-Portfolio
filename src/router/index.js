import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',

      component: () => import('../views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
    
      component: () => import('../views/about.vue')
    }, 
    {
      path: '/work',
      name: 'work',

      component: () => import('../views/work.vue')
    },
    {
      path: '/photo',
      name: 'photo',

      component: () => import('../views/Photography.vue')
    }

  ]
})

export default router
