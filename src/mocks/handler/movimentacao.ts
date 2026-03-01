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
        categoria: 'Receita',
        data: '2026-02-18',
        status: 'confirmado',
        recorrente: false
      },
      {
        id: '2',
        local: 'Mercadão VL',
        valor: -120,
        metodoPagamento: 'PIX',
        categoria: 'Alimentação',
        data: '2026-02-17',
        status: 'confirmado',
        recorrente: false
      },
      {
        id: '3',
        local: 'Padaria Central',
        valor: -35.5,
        metodoPagamento: 'Débito',
        categoria: 'Alimentação',
        data: '2026-02-18',
        status: 'confirmado',
        recorrente: false
      },
      {
        id: '4',
        local: 'Salário Empresa X',
        valor: 3500,
        metodoPagamento: 'Transferência',
        categoria: 'Salário',
        data: '2026-02-05',
        status: 'confirmado',
        recorrente: true
      },
      {
        id: '5',
        local: 'Netflix',
        valor: -39.9,
        metodoPagamento: 'Crédito',
        categoria: 'Assinaturas',
        data: '2026-03-14',
        status: 'agendado',
        recorrente: true
      },
      {
        id: '6',
        local: 'Uber',
        valor: -22.75,
        metodoPagamento: 'Crédito',
        categoria: 'Transporte',
        data: '2026-02-17',
        status: 'confirmado',
        recorrente: false
      },
      {
        id: '7',
        local: 'Farmácia São João',
        valor: -58.2,
        metodoPagamento: 'Débito',
        categoria: 'Saúde',
        data: '2026-02-18',
        status: 'confirmado',
        recorrente: false
      },
      {
        id: '8',
        local: 'Restaurante Sabor Caseiro',
        valor: -89.9,
        metodoPagamento: 'PIX',
        categoria: 'Alimentação',
        data: '2026-02-16',
        status: 'confirmado',
        recorrente: false
      },
      {
        id: '9',
        local: 'Freela Projeto Y',
        valor: 800,
        metodoPagamento: 'Transferência',
        categoria: 'Freelance',
        data: '2026-02-16',
        status: 'confirmado',
        recorrente: false
      },
      {
        id: '10',
        local: 'Amazon',
        valor: -199.99,
        metodoPagamento: 'Crédito',
        categoria: 'Compras',
        data: '2026-02-15',
        status: 'confirmado',
        recorrente: false
      },
      {
        id: '11',
        local: 'Academia FitLife',
        valor: -99.9,
        metodoPagamento: 'Débito automático',
        categoria: 'Saúde',
        data: '2026-03-01',
        status: 'agendado',
        recorrente: true
      },
      {
        id: '12',
        local: 'Pix recebido João',
        valor: 120,
        metodoPagamento: 'PIX',
        categoria: 'Receita',
        data: '2026-02-17',
        status: 'confirmado',
        recorrente: false
      },
      {
        id: '13',
        local: 'Aluguel',
        valor: -1200,
        metodoPagamento: 'Transferência',
        categoria: 'Moradia',
        data: '2026-03-05',
        status: 'agendado',
        recorrente: true
      },
      {
        id: '14',
        local: 'Conta de Luz',
        valor: -210.45,
        metodoPagamento: 'Débito automático',
        categoria: 'Contas',
        data: '2026-03-10',
        status: 'agendado',
        recorrente: true
      },
      {
        id: '15',
        local: 'Spotify',
        valor: -21.9,
        metodoPagamento: 'Crédito',
        categoria: 'Assinaturas',
        data: '2026-02-12',
        status: 'confirmado',
        recorrente: true
      },
      {
        id: '16',
        local: 'iFood',
        valor: -74.6,
        metodoPagamento: 'Crédito',
        categoria: 'Alimentação',
        data: '2026-02-19',
        status: 'confirmado',
        recorrente: false
      },
      {
        id: '17',
        local: 'Bônus Empresa X',
        valor: 1200,
        metodoPagamento: 'Transferência',
        categoria: 'Salário',
        data: '2026-03-20',
        status: 'agendado',
        recorrente: false
      }
    ])
  })
]