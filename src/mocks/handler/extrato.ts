import { http, HttpResponse } from 'msw'

export const extratoHandlers = [
  http.get('/api/extrato', async () => {
    await new Promise(resolve => setTimeout(resolve, 800))

    return HttpResponse.json([
      {
        id: '1',
        descricao: 'Pix recebido',
        valor: 250,
        data: '2026-02-18'
      },
      {
        id: '2',
        descricao: 'Compra cartão',
        valor: -120,
        data: '2026-02-17'
      }
    ])
  })
]