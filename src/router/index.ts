import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import ExtratoView from '@/views/extrato/ExtratoView.vue'
import MovimentacaoView from '@/views/movimentacao/MovimentacaoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/extrato',
      component: ExtratoView,
    },
    {
      path: '/extrato/movimentacao',
      component: MovimentacaoView,
    }
  ],
})

router.beforeEach((to, from, next) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length

  to.meta.transition =
    toDepth > fromDepth ? 'pop-forward' : 'pop-back'

  next()
})

export default router