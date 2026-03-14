import { type MovimentacaoDTO } from "./movimentacao.types"

export async function getMovimentacao(): Promise<MovimentacaoDTO[]> {
  const response = await fetch('/api/extrato')

  if (!response.ok) {
    throw new Error('Erro ao buscar extrato')
  }

  return response.json()
}
F
export async function getMovimentacaoById(id: number): Promise<MovimentacaoDTO> {
  const response = await fetch(`/api/extrato/${id}`)

  if (!response.ok) {
    throw new Error('Erro ao buscar extrato')
  }

  return response.json()
}

export async function postMovimentacao(payload: MovimentacaoDTO): Promise<MovimentacaoDTO> {
  const response = await fetch('/api/movimentacao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Erro ao salvar movimentação')
  }

  return response.json()
}