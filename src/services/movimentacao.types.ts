export interface MovimentacaoDTO {
  id: string
  local: string
  valor: number
  metodoPagamento: string,
  categoria: string,
  data: string
  status: string,
  recorrente: boolean,
}