import { http, HttpResponse } from 'msw'
import MovimentacaoMockData from './movimentacao.mock';

export const movimentacaoHandlers = [
  http.get('/api/extrato', async ({ request }) => {
    await new Promise(resolve => setTimeout(resolve, 800))

      const url = new URL(request.url)

      const categoria = url.searchParams.get('categoria')
      const status = url.searchParams.get('status')
      const recorrente = url.searchParams.get('recorrente')
      const dataInicio = url.searchParams.get('dataInicio')
      const dataFim = url.searchParams.get('dataFim')
      const search = url.searchParams.get('search')
      const sort = url.searchParams.get('sort')
      const order = url.searchParams.get('order') ?? 'asc'

      let data = [...MovimentacaoMockData]

      if (categoria) {
        data = data.filter(item => item.categoria === categoria);
      }

      if (status) {
        data = data.filter(item => item.status === status)
      }

      if (recorrente) {
        data = data.filter(item => item.recorrente === (recorrente === 'true'))
      }

      if (dataInicio) {
        data = data.filter(item => item.data >= dataInicio)
      }

      if (dataFim) {
        data = data.filter(item => item.data <= dataFim)
      }

      if (search) {
        data = data.filter(item =>
          item.local.toLowerCase().includes(search.toLowerCase())
        )
      }

      if (sort) {
        data.sort((a, b) => {
          if (order === 'desc') {
            return a[sort as keyof typeof a] < b[sort as keyof typeof b] ? 1 : -1
          }
          return a[sort as keyof typeof a] > b[sort as keyof typeof b] ? 1 : -1
        })
      }
    return HttpResponse.json(data);
  })
]