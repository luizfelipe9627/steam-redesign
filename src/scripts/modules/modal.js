// Classe responsável por fazer o modal de login aparecer e sumir da tela.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class Modal {
  // O constructor é usado para definir os parâmetros que serão usados na classe.
  constructor() {
    this.openButton = document.querySelector('[data-modal="open"]'); // Está selecionando o elemento que contém o dataset modal com o valor open.
    this.closeButton = document.querySelector('[data-modal="close"]'); // Está selecionando o elemento que contém o dataset modal com o valor close.;
    this.containerModal = document.querySelector('[data-modal="container"]'); // Está selecionando o elemento que contém o dataset modal com o valor container.

    // O bind(this) é usado para manter o this do objeto criado, sem ele o this iria referenciar o elemento que está sendo clicado.
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  // Criado uma função responsável por abrir o modal.
  toggleModal() {
    this.containerModal.classList.toggle("active"); // Adiciona(se não tiver) a classe chamada ativo e remove(caso já tenha) a classe no elemento containerModal.
  }

  // Criado uma função responsável por abrir o modal quando for clicado no botão, a função contém um parâmetro chamado event.
  eventToggleModal(event) {
    event.preventDefault(); // Evita que ao clicar ele saia da página.
    this.toggleModal(event); // Executa a função abrirModal.
  }

  // Criado uma função responsável fechar o modal quando for clicado fora dele, a função contém um parâmetro chamado event.
  clickOutsideModal(event) {
    // Verifica se o elemento clicado é o mesmo que está sendo referenciado pelo this, no caso o containerModal, se for executa o bloco de comando.
    if (event.target === this.containerModal) {
      this.toggleModal(); // Executa a função fecharModal.
    }
  }

  // Criado uma função responsável por adicionar os eventos de click ao botão de abrir e fechar o modal.
  addModalEvents() {
    this.openButton.addEventListener("click", this.eventToggleModal); // Adiciona o evento de click ao botão de abrir o modal.
    this.closeButton.addEventListener("click", this.eventToggleModal); // Adiciona o evento de click ao botão de fechar o modal.
    this.containerModal.addEventListener("click", this.clickOutsideModal); // Adiciona o evento de click ao container do modal.
  }

  // Criado uma função responsável por iniciar as funções.
  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvents(); // Adiciona os eventos ao elemento.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}