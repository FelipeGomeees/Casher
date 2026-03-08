import { describe, it, expect, beforeEach } from 'vitest'
import { useMovimentacaoStore } from './movimentacao'
import { type MovimentacaoDTO } from '@/services/movimentacao.service'
import { createPinia, setActivePinia } from 'pinia'

function createTransacao(
  overrides?: Partial<MovimentacaoDTO>
): MovimentacaoDTO {
  return {
    id: '1',
    local: 'Teste',
    valor: 0,
    metodoPagamento: 'pix',
    categoria: 'geral',
    data: '2024-01-01',
    status: 'pago',
    recorrente: false,
    ...overrides
  }
}

describe(' useMovimentacaoStore ', () => {

    beforeEach(() => {
        setActivePinia(createPinia());
    })

    it('should calculate saldo correctly', () => {
        const store =  useMovimentacaoStore();

        store.transacoes = [
            createTransacao({ valor: 100 }),
            createTransacao({ valor: -40 })
        ]

        expect(store.saldo).toBe(60)
    })
})