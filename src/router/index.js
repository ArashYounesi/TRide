import { createRouter, createWebHistory } from 'vue-router'
import WhereToGoView from '@/views/WhereToGoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'where-to-go',
      component: WhereToGoView
    },
    {
      path: '/pick-up',
      name: 'pick-up',
      // route level code-splitting
      // this generates a separate chunk (About.[PickUpView].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PickUpView.vue')
    },
    {
      path: '/pick-off',
      name: 'pick-off',
      component: () => import('../views/PickOffView.vue')
    },
    {
      path: '/choose-trip',
      name: 'choose-trip',
      component: () => import('../views/ChooseTripView.vue')
    },
    {
      path: '/arriving',
      name: 'arriving',
      component: () => import('../views/ArrivingView.vue')
    }
  ]
})

export default router
