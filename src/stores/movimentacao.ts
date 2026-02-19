import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getMovimentacao, type MovimentacaoDTO } from '@/services/movimentacao.service'

export const useMovimentacaoStore = defineStore('Movimentacao', () => {
  const transacoes = ref<MovimentacaoDTO[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const saldo = computed(() =>
    transacoes.value.reduce((acc, t) => acc + t.valor, 0)
  )

  async function fetchMovimentacao() {
    loading.value = true
    error.value = null

    try {
      transacoes.value = await getMovimentacao()
    } catch (err) {
      error.value = 'Não foi possível carregar o Movimentacao'
    } finally {
      loading.value = false
    }
  }

  return {
    transacoes,
    loading,
    error,
    saldo,
    fetchMovimentacao
  }
})