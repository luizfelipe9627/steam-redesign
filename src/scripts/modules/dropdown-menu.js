import outsideClick from "./outsideclick.js"; // O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.

// Classe responsável por abrir e fechar o dropdown aparecer ao clicar com o mouse no menu.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class DropdownMenu {
  // O constructor é usado para definir os parâmetros que serão usados na classe.
  constructor() {
    this.dropdownMenus = document.querySelectorAll('[data-dropdown]'); // Está selecionando todos os elementos que contém o dataset dropdown.

    this.profileDropdown = document.querySelector('.profile-dropdown'); // Está selecionando o elemento que contém a classe profile-dropdown.

    this.activeClass = "active"; // Está criando uma variável que contém a classe active.

    this.events = ["touchstart", "click"]; // Está criando uma variável que contém um array com dois eventos, um sendo o touchstart e o outro sendo o click.

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this); // Está criando uma variável que contém a função activeDropdownMenu e está referenciando o objeto da classe DropdownMenu atráves do bind.
  }

  // Criado uma função chamada activeDropdownMenu que tem como intuito abrir e fechar o dropdown ao clique, recebe um parâmetro chamado de event.
  activeDropdownMenu(event) {
    const element = event.currentTarget; // Está criando uma variável que contém o elemento que está sendo clicado.

    element.classList.add(this.activeClass); // Adiciona ao element(data-dropdown) a classe ativo.

    this.profileDropdown.classList.add(this.activeClass); // Adiciona ao profileDropdown a classe active.

    // Executa a função outsideClick que tem o elemento que está sendo clicado como referencia, no caso o element(data-dropdown) da função, a array referenciando o events que vão ser responsável por ativar o callback.
    outsideClick(element, this.events, () => {
      // Escopo do parâmetro callback criado na função.
      element.classList.remove(this.activeClass); // Remove do element(data-dropdown) a classe ativo.
      this.profileDropdown.classList.remove(this.activeClass); // Remove do profileDropdown a classe active.
    });
  }

  // Criado uma função chamada addDropdownMenusEvent que tem como intuito adicionar o evento de clique e touchstart ao dropdownMenus.
  addDropdownMenusEvent() {
    // O forEach passa por cada elemento do dropdownMenus, está recebendo um parâmetro que é cada menu.
    this.dropdownMenus.forEach((menu) => {
      // Criado uma array que contém dois eventos de escuta, o forEach passa percorre por cada evento(nomeado com userEvent).
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu); // No menu atual do forEach anterior pega o evento disparado e aciona a função activeDropdownMenu criada.
      });
    });
  }

  // Criado uma função chamada init que tem como intuito iniciar a função addDropdownMenusEvent.
  init() {
    // Verifica se o dropdownMenus existe se existir executa o if.
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent(); // Executa a função addDropdownMenusEvent.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}