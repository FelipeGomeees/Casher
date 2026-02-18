export interface TransacaoDTO {
  id: string
  descricao: string
  valor: number
  data: string
}

export async function getExtrato(): Promise<TransacaoDTO[]> {
  const response = await fetch('/api/extrato')

  if (!response.ok) {
    throw new Error('Erro ao buscar extrato')
  }

  return response.json()
}