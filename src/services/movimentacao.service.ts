export interface MovimentacaoDTO {
  id: string
  local: string
  valor: number
  metodoPagamento: string,
  categoria: string,
  data: string
}

export async function getMovimentacao(): Promise<MovimentacaoDTO[]> {
  const response = await fetch('/api/extrato')

  if (!response.ok) {
    throw new Error('Erro ao buscar extrato')
  }

  return response.json()
}