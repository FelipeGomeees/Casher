import { http, HttpResponse } from 'msw'

export const movimentacaoHandlers = [
  http.get('/api/extrato', async () => {
    await new Promise(resolve => setTimeout(resolve, 800))

    return HttpResponse.json([
      {
        id: '1',
        local: 'Junior Esfihas',
        valor: 250,
        metodoPagamento: 'PIX',
        data: '2026-02-18'
      },
      {
        id: '2',
        local: 'Mercadão VL',
        valor: -120,
        metodoPagamento: 'PIX',
        data: '2026-02-17'
      },
      {
        id: '3',
        local: 'Padaria Central',
        valor: -35.5,
        metodoPagamento: 'Débito',
        data: '2026-02-18'
      },
      {
        id: '4',
        local: 'Salário Empresa X',
        valor: 3500,
        metodoPagamento: 'Transferência',
        data: '2026-02-15'
      },
      {
        id: '5',
        local: 'Netflix',
        valor: -39.9,
        metodoPagamento: 'Crédito',
        data: '2026-02-14'
      },
      {
        id: '6',
        local: 'Uber',
        valor: -22.75,
        metodoPagamento: 'Crédito',
        data: '2026-02-17'
      },
      {
        id: '7',
        local: 'Farmácia São João',
        valor: -58.2,
        metodoPagamento: 'Débito',
        data: '2026-02-18'
      },
      {
        id: '8',
        local: 'Restaurante Sabor Caseiro',
        valor: -89.9,
        metodoPagamento: 'PIX',
        data: '2026-02-16'
      },
      {
        id: '9',
        local: 'Freela Projeto Y',
        valor: 800,
        metodoPagamento: 'Transferência',
        data: '2026-02-16'
      },
      {
        id: '10',
        local: 'Amazon',
        valor: -199.99,
        metodoPagamento: 'Crédito',
        data: '2026-02-15'
      },
      {
        id: '11',
        local: 'Academia FitLife',
        valor: -99.9,
        metodoPagamento: 'Débito automático',
        data: '2026-02-14'
      },
      {
        id: '12',
        local: 'Pix recebido João',
        valor: 120,
        metodoPagamento: 'PIX',
        data: '2026-02-17'
      }
    ])
  })
]