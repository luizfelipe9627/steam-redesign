// Função chamada outsideClick responsável por fazer o dropdown sumir ao clicar fora dele, recebe três parâmetros, um sendo o element(data-dropdown), o outro sendo os eventos e o outro o callback(transformada em uma função) que vai ser executada após o evento ser disparado.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default function outsideClick(element, events, callback) {
  const html = document.documentElement; // Está selecionando o HTML e armazenando na constante html.
  const outside = "data-outisde"; // Criado uma constante contendo uma string de um novo dataset.

  // Função nomeada como handleOutsideClick responsável por tendo um parâmetro chamado de event responsável pelos eventos de escuta.
  function handleOutsideClick(event) {
    // Faz uma verificação que se dentro do element(data-dropdown) conter o target do elemento clicado retorna true e executa o escopo do if.
    if (!element.contains(event.target)) {
      element.removeAttribute(outside, ""); // No element(data-dropdown) remove o atributo dataset chamado outside quando clicado fora do element.

      // O forEach passa por cada evento e executa o escopo caso algum dos eventos definidos sejam disparados.
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick); // Remove o evento de escuta de clique criado no elemento html.
      });

      callback(); // Está executando no handleClick a função criada.
    }
  }

  // Se o element(data-dropdown) não ter o atributo data-outside retorna true e ativa o evento de clique criado no html, para assim ele não ser executado mais de uma vez sem necessidade.
  if (!element.hasAttribute(outside)) {
    // O forEach passa por cada evento(nomeado como userEvent) e executa o escopo caso algum dos eventos definidos sejam disparados.
    events.forEach((userEvent) => {
      // O setTimeout faz a fase de bubble ser passada primeiro, e depois o callback do setTimeout.
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick); // Está adicionando um evento de clique e de touch no HTML, que ao ser acionado executa a função handleOutside.
      });
    });

    element.setAttribute(outside, ""); // No element(data-dropdown) seta um novo atributo dataset chamado outside.
  }
}