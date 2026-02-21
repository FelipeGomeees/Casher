import { setupWorker } from 'msw/browser'
import { movimentacaoHandlers } from './handler/movimentacao'

export const worker = setupWorker(...movimentacaoHandlers)