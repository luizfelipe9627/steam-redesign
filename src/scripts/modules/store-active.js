export default class StoreActive {
  constructor() {
    this.menuActive = document.querySelectorAll('.store-navegation ul li'); // Está selecionando todos os elementos que contém a classe container-nav e dentro dela a classe nav e dentro dela a tag ul e dentro dela a tag li.
  
    this.activeClass = "active"; // Está criando uma variável que contém a classe active.

    this.events = ["touchstart", "click"]; // Está criando uma variável que contém um array com dois eventos, um sendo o touchstart e o outro sendo o click.

    this.activeMenu = this.activeMenu.bind(this); // Está criando uma variável que contém a função activeMenu e está referenciando o objeto da classe MenuActive atráves do bind.
  }

  // Criado uma função chamada activeMenu que tem como intuito adicionar a classe ativo ao menu clicado, recebe um parâmetro chamado de event.
  activeMenu(event) {
    const liClicked = event.currentTarget; // Está criando uma variável que contém o elemento que está sendo clicado.

    // O forEach passa por cada elemento do menuActive, está recebendo um parâmetro que é cada li.
    this.menuActive.forEach((li) => {
      // Se a li for diferente da li clicada e a li tiver a classe ativo, remove a classe ativo.
      if (li !== liClicked && li.classList.contains(this.activeClass)) {
        li.classList.remove(this.activeClass);
        // Senão se o li for igual ao li clicado e o li não tiver a classe ativo, adiciona a classe ativo.
      } else if (li === liClicked && !li.classList.contains(this.activeClass)) {
        li.classList.add(this.activeClass);
      }
    });
  }

  // Criado uma função chamada addMenuActiveEvent que tem como intuito adicionar o evento de clique e touchstart ao menuActive.
  addMenuActiveEvent() {
    // O forEach passa por cada elemento do menuActive, está recebendo um parâmetro que é cada li.
    this.menuActive.forEach((li) => {
      // Criado uma array que contém dois eventos de escuta, o forEach passa percorre por cada evento(nomeado com userEvent).
      this.events.forEach((userEvent) => {
        li.addEventListener(userEvent, this.activeMenu); // No li atual do forEach anterior pega o evento disparado e aciona a função activeMenu criada.
      });
    });
  }

  // Criado uma função chamada init que tem como intuito iniciar o objeto da classe MenuActive.
  init() {
    // Verifica se o menuActive existe se existir executa o if.
    if (this.menuActive.length) {
      this.addMenuActiveEvent(); // Executa a função addMenuActiveEvent.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}