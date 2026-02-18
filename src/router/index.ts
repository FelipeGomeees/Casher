import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/home/HomeView.vue'
import ExtratoView from '@/views/extrato/ExtratoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      // meta -- Use defaut layout later, no need for mobile for now
    },
    {
      path: '/extrato',
      component: ExtratoView,
    }
  ],
})

export default router
