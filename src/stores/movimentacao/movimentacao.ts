import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getMovimentacao, getMovimentacaoById, type MovimentacaoDTO } from '@/services/movimentacao.service'
import { useStaleCache } from '@/composables/useStaleCache'

export const useMovimentacaoStore = defineStore('Movimentacao', () => {
  const transacoes = ref<MovimentacaoDTO[]>([])
  const movimentacoes = ref<Record<number, MovimentacaoDTO>>({})
  const movimentacaoAtual = ref<MovimentacaoDTO>()

  const loading = ref(false)
  const error = ref<string | null>(null)
  const cache = useStaleCache(1000 * 60 * 5);
  

  const saldo = computed(() =>
    transacoes.value.reduce((acc, t) => acc + t.valor, 0)
  )
  

  async function fetchMovimentacao() {
    const key = 'movimentacoes'

    if (!cache.isStale(key)) return

    loading.value = true
    error.value = null

    try {
      transacoes.value = await getMovimentacao()
      cache.markFresh(key);
    } catch (err) {
      error.value = 'Não foi possível carregar as movimentações'
    } finally {
      loading.value = false
    }
  }

  async function fetchMovimentacaoById(id: number) {
    const key = `movimentacoes/${id}`

    if (movimentacoes.value[id] && !cache.isStale(key)) {
      movimentacaoAtual.value = movimentacoes.value[id]
      return
    }

    loading.value = true
    error.value = null

    try {
      const data = await getMovimentacaoById(id)

      movimentacoes.value[id] = data;
      movimentacaoAtual.value = data;
      
      cache.markFresh(key);
    } catch (err) {
      error.value = 'Não foi possível carregar a Movimentacao'
    } finally {
      loading.value = false
    }
  } 

  return {
    transacoes,
    movimentacaoAtual ,
    loading,
    error,
    saldo,
    fetchMovimentacao,
    fetchMovimentacaoById,
  }
})