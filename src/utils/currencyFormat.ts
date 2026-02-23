export default (value: number) => {
    // Parece ser instancia talvez vale a pena salvar para não ficar criando novamente
    const currencyFormatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
    })
    return currencyFormatter.format(value);
}