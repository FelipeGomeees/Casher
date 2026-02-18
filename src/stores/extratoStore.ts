import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getExtrato, type TransacaoDTO } from '@/services/extrato.service.ts'

export const useExtratoStore = defineStore('extrato', () => {
  const transacoes = ref<TransacaoDTO[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const saldo = computed(() =>
    transacoes.value.reduce((acc, t) => acc + t.valor, 0)
  )

  async function fetchExtrato() {
    loading.value = true
    error.value = null

    try {
      transacoes.value = await getExtrato()
    } catch (err) {
      error.value = 'Não foi possível carregar o extrato'
    } finally {
      loading.value = false
    }
  }

  return {
    transacoes,
    loading,
    error,
    saldo,
    fetchExtrato
  }
})