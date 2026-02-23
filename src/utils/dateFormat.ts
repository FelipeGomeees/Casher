export default (date: Date) => {
    // Parece ser instancia talvez vale a pena salvar para não ficar criando novamente
    const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    return dateFormatter.format(date);
}