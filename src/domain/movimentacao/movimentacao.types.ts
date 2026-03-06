    export interface MovimentacaoFormModel {
        nome: string
        valor: string
        metodoPagamento: string
        categoria: string
        data: string | undefined,
        status: string
        recorrente: boolean
        observacao: string
    }