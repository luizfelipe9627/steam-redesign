import SlideGames from "./slide-games.js"; // Importa a classe Slide do arquivo slide.js.

// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
// Classe que extende a classe Slide, sendo assim ela herda todos os métodos e atributos da classe Slide.
export default class SlideNav extends SlideGames {
  // Método construtor da classe SlideNav, ele é executado assim que a classe é instanciada.
  constructor() {
    super(); // O super é usado para referenciar o construtor da classe pai, no caso a classe SlideGames.

    this.bindControlEvents(); // Executa o método bindControlEvents que é responsável por fazer o bind para referenciar o this do objeto da classe SlideNav ao invés do this do objeto da classe SlideGames.
  }

  // Método responsável por criar os controles de navegação do slide.
  createControl() {
    const control = document.createElement("span"); // Cria um elemento HTML do tipo ul e armazena na constante control.
    control.dataset.control = "slide"; // Adiciona um atributo data-control com o valor slide no elemento HTML criado anteriormente.

    // Percorre o array de slides e para cada item do array executa uma função.
    this.slideArray.forEach(() => {
      control.innerHTML += `
        <span></span
      `; // Cada vez que o loop é executado adiciona um elemento HTML do tipo LI dentro do elemento HTML do tipo ul criado anteriormente.
    });

    this.wrapper.appendChild(control); // Adiciona todos os LI criados anteriormente dentro do elemento HTML que possui a classe passada como parâmetro.

    return control; // Retorna o elemento HTML criado.
  }

  // Método responsável por adicionar o evento de click nos elementos HTML.
  eventControl(item, index) {
    item.addEventListener("click", (event) => {
      event.preventDefault(); // Previne o comportamento padrão do elemento HTML que é recarregar a página.
      this.changeSlide(index); // Executa o método changeSlide que é responsável por trocar o slide e passa como parâmetro o index do item do array de slides.
      this.activeControlItem(); // Executa o método activeControlItem que é responsável por adicionar a classe active no elemento HTML que possui o index do item do array de slides.
    });

    this.wrapper.addEventListener("changeEvent", this.activeControlItem); // Adiciona o evento criado chamado changeEvent no elemento LI que possui a classe passada como parâmetro e executa o método activeControlItem responsável por adicionar a classe active no elemento HTML que possui o index do item do array de slides.
  }

  // Método responsável por adicionar a classe active no elemento HTML que possui o index do item do array de slides.
  activeControlItem() {
    // O forEach está percorrendo a array controlArray e a cada iteração passa o item no parâmetro do método.
    this.controlArray.forEach((item) => {
      item.classList.remove(this.activeClass); // Remove a classe active de todos os elementos HTML que possuem a classe passada como parâmetro.
    });

    this.controlArray[this.index.active].classList.add(this.activeClass); // Adiciona a classe active no elemento HTML que possui o index do item do array de slides.
  }

  // Método responsável por adicionar os controles de navegação do slide.
  addControl(customControl) {
    this.control =
      document.querySelector(customControl) || this.createControl(); // Seleciona o elemento HTML que possui a classe passada como parâmetro pelo usuário ou se for undefined(não definida) executa o método createControl que é responsável por criar os controles de navegação do slide.
    this.controlArray = [...this.control.children]; // Desestrutura para uma array com todos os elementos HTML filhos do elemento control e armazena na constante controlArray.

    this.activeControlItem(); // Executa o método activeControlItem que é responsável por adicionar a classe active no elemento HTML que possui o index do item do array de slides, para que o primeiro item do array de slides já inicie com a classe active.

    this.controlArray.forEach(this.eventControl); // Percorre o array do controlArray e para cada item da array executa o método eventControl que é responsável por adicionar o evento de click nos elementos HTML e como parâmetro da função passa o item e o index do forEach.
  }

  // Método responsável por fazer o bind para referenciar o this do objeto da classe SlideNav ao invés do this do objeto da classe Slide.
  bindControlEvents() {
    // O bind(this) está fazendo com que o this dos métodos referencie o objeto da classe Slide, é sempre usado quando for passar um método como callback, geralmente em eventos de escuta.
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}