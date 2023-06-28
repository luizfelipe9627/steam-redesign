import outsideClick from "./outsideclick.js"; // O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.

// Classe responsável por abrir e fechar o menu mobile.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class MenuMobile {
  // O constructor é usado para definir os parâmetros que serão usados na classe.
  constructor() {
    this.menuButton = document.querySelector('[data-menu="button"]'); // Está selecionando o menu hamburguer e armazenando na constante menuButton.
    this.menuList = document.querySelector('[data-menu="smooth"]'); // Está selecionando o container nav e armazenando na constante menuList.

    this.activeClass = "active";  // Está criando uma variável que contém uma string chamada active.

    this.events = ["click", "touchstart"];  // Está criando uma variável que contém um array com dois eventos, um sendo o click e o outro sendo o touchstart.

    this.openMenu = this.openMenu.bind(this); // Está criando uma variável que contém a função openMenu e está referenciando o objeto da classe MenuMobile atráves do bind.
  }

  // Função openMenu responsável por abrir e fechar o menu mobile.
  openMenu(event) {
    if(event.cancelable) {
      event.preventDefault(); // Está prevenindo o comportamento padrão do evento.
    }
    
    
    this.menuList.classList.add(this.activeClass); // Está adicionando uma classe chamada ativo no menuList.
    this.menuButton.classList.add(this.activeClass); // Está adicionando uma classe chamada ativo no menuButton.

    // Função importada responsável por fazer o menu mobile sumir ao clicar fora dele, recebe três parâmetros, um sendo o element(menuList), o outro sendo os eventos de escuta e o outro o callback(transformada em uma função) que vai ser executada após o evento ser disparado.
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass); // Está removendo a classe chamada ativo no menuList.
      this.menuButton.classList.remove(this.activeClass); // Está removendo a classe chamada ativo no menuButton.
    });
  }

  // Função responsável por adicionar os eventos de click e touchstart ao menuButton.
  addMenuMobileEvents() {
    // O forEach passa por cada evento(nomeado como userEvent) e executa o escopo caso algum dos eventos definidos sejam disparados.
    this.events.forEach((userEvent) => {
      this.menuButton.addEventListener(userEvent, this.openMenu); // Está adicionando um evento de click e de touch no menuButton, que ao ser acionado executa a função openMenu.
    });
  }

  // Função responsável por iniciar as funções.
  init() {
    // Verifica se o menuButton e o menuList existe se existir executa o if.
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents(); // Está chamando a função addMenuMobileEvents.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}