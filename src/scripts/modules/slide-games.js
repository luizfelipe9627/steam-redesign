import debounce from "./debounce.js"; // Importa a função debounce do arquivo debounce.js.

// Classe responsável por fazer o carrossel funcionar.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class SlideGames {
  // O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor() {
    this.wrapper = document.querySelector(".featureds-games"); // Seleciona a propriedade featureds-games e armazena na propriedade wrapper.

    this.slide = document.querySelector(".slides-games"); // Seleciona a propriedade slides-games e armazena na propriedade slide.
   
    // O objeto distance é responsável por armazenar as distâncias do mouse.
    this.distance = {
      finalPosition: 0, // Posição final do mouse, começa com 0.
      startX: 0, // Posição inicial do mouse, começa com 0.
      movement: 0, // Movimento do mouse no momento clicado, começa com 0.
    };

    this.activeClass = "active"; // Armazena a classe active na propriedade activeClass.

    this.changeEvent = new Event("changeEvent"); // Cria um evento personalizado chamado changeEvent e armazena na propriedade changeEvent.
  }

  // Método responsável por adicionar efeito de transição ao slide.
  transition(active) {
    this.slide.style.transition = active ? "transform .3s" : ""; // Se o parâmetro active for true, adiciona o efeito de transição ao slide, se não, remove o efeito de transição do slide.
  }

  // Método responsável por mover o slide de acordo com a distância do mouse.
  moveSlide(distanceX) {
    this.distance.movePosition = distanceX; // Armazena a distância do mouse na propriedade movePosition.
    this.slide.style.transform = `translate3d(${distanceX}px, 0, 0)`; // Move o slide de acordo com a distância do mouse presente no parâmetro distanceX.
  }

  // Método responsável por atualizar a posição do mouse.
  updatePosition(clientX) {
    this.distance.movement = (this.distance.startX - clientX) * 1.6; // Armazena a distância do movimento do mouse na propriedade movement multiplicando por 1.6 para que o movimento do carrossel seja mais rápido.
    return this.distance.finalPosition - this.distance.movement; // Retorna a posição final do mouse menos a distância do movimento do mouse.
  }

  // Método responsável por capturar a posição do mouse quando o usuário clicar no botão do mouse.
  onStart(event) {
    let movetype; // Cria a variável movetype.

    // Se o evento for mousedown, executa o if se não, executa o else.
    if (event.type === "mousedown") {
      event.preventDefault(); // Previne o comportamento padrão do evento.
      this.distance.startX = event.clientX; // Armazena a posição inicial do mouse na propriedade startX.
      movetype = "mousemove"; // Armazena o tipo do evento na variável movetype.
    } else {
      this.distance.startX = event.changedTouches[0].clientX; // Armazena a posição inicial do touch mobile na propriedade startX.
      movetype = "touchmove"; // Armazena o tipo do evento na variável movetype.
    }

    this.wrapper.addEventListener(movetype, this.onMove); // Adiciona o evento armazenado no movetype ao wrapper que ao ser acionado executa o método onMove.
    this.transition(false); // Executa o método transition passando false como parâmetro.
  }

  // Método responsável por capturar a posição do mouse quando o usuário mover o mouse.
  onMove(event) {
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX; // Se o evento for mousemove, armazena a posição do mouse na variável pointerPosition, se não, armazena a posição do touch mobile na variável pointerPosition.

    const finalPosition = this.updatePosition(pointerPosition); // Armazena a posição final do mouse na variável finalPosition.

    this.moveSlide(finalPosition); // Executa o método moveSlide passando a posição final do mouse como parâmetro.
  }

  // Método responsável por capturar a posição do mouse quando o usuário soltar o botão do mouse.
  onEnd(event) {
    const movetype = event.type === "mouseup" ? "mousemove" : "touchmove"; // Se o evento for mouseup armazena mousemove na variável, se não, armazena touchmove na variável movetype.
    this.wrapper.removeEventListener(movetype, this.onMove); // Remove o evento de escuta do wrapper ao ser acionado os eventos mouseup ou touchend.
    this.distance.finalPosition = this.distance.movePosition; // Armazena a posição final do mouse na propriedade finalPosition.

    this.transition(true); // Executa o método transition responsável por adicionar efeito de transição ao slide. Passa true como parâmetro.
    this.changeSlideOnEnd(); // Executa o método changeSlideOnEnd responsável por mudar o slide de acordo com a posição final do mouse.
  }

  // Método responsável por mudar o slide de acordo com a posição final do mouse.
  changeSlideOnEnd() {
    // Se a a distância do movimento do mouse for maior que 120, e a propriedade next do objeto index for diferente de undefined, executa o if.
    if (this.distance.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide(); // Executa o método activeNextSlide responsável por mudar o slide para o próximo.
    } // Senão se a a distância do movimento do mouse for menor que -120 e a propriedade previous do objeto index for diferente de undefined, executa o else if.
    else if (
      this.distance.movement < -120 &&
      this.index.previous !== undefined
    ) {
      this.activePreviousSlide(); // Executa o método activePreviousSlide responsável por mudar o slide para o anterior.
    } // Senão executa o else.
    else {
      this.changeSlide(this.index.active); // Executa o método changeSlide responsável por mudar o slide de acordo com o index passado no parâmetro. Passa o index do slide ativo como parâmetro.
    }
  }

  // Método responsável por adicionar os eventos ao wrapper.
  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart); // Adiciona o evento mousedown ao wrapper que ao ser acionado executa o método onStart.
    this.wrapper.addEventListener("touchstart", this.onStart, {passive: true}); // Adiciona o evento touchstart ao wrapper que ao ser acionado executa o método onStart.
    this.wrapper.addEventListener("mouseup", this.onEnd); // Adiciona o evento mouseup ao wrapper que ao ser acionado executa o método onEnd.
    this.wrapper.addEventListener("touchend", this.onEnd); // Adiciona o evento touchend ao wrapper que ao ser acionado executa o método onEnd.
  }

  // Método responsável por criar um objeto com as informações de navegação dos slides.
  slideIndexNav(index) {
    const last = this.slideArray.length - 1; // Armazena o último index do slideArray na variável last.

    // Criado uma propriedade no objeto chamda index que contém um objeto que contém as informações de navegação dos slides.
    this.index = {
      // Se o index for igual a 0, armazena undefined na propriedade previous, se não, armazena o index do slide antes do ativo.
      previous: index ? index - 1 : undefined, // Armazena o index do slide antes do ativo.

      active: index, // Armazena o index do slide ativo.

      // Se o index for igual ao último index do slideArray, armazena undefined na propriedade next, se não, armazena o index do slide depois do ativo.
      next: index === last ? undefined : index + 1, // Armazena o index do slide depois do ativo.
    };
  }

  // Método responsável por mudar o slide de acordo com o index passado no parâmetro.
  changeSlide(index) {
    const activeSlide = this.slideArray[index]; // Armazena o slide ativo na variável activeSlide.

    this.moveSlide(activeSlide.position); // Executa o método moveSlide que é responsável por mover o slide. Passa o valor da propriedade position do slide ativo como parâmetro.
    this.slideIndexNav(index); // Executa o método slideIndexNav que é responsável por criar um objeto com as informações de navegação dos slides. Passa o index do slide que está sendo mostrado como parâmetro.

    this.distance.finalPosition = activeSlide.position; // Armazena a posição final do slide ativo na propriedade finalPosition para que o slide não volte para a posição inicial quando o usuário clicar no slide.

    this.changeActiveClass(); // Executa o método changeActiveClass responsável por adicionar a classe active ao slide ativo.

    this.wrapper.dispatchEvent(this.changeEvent); // Dispara o evento changeEvent no wrapper.
  }

  // Método responsável por calcular a posição do slide.
  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2; // Armazena a margem do slide na variável margin.
    return -(slide.offsetLeft - margin); // Retorna o slide.offsetLeft menos a margem do slide para que o slide fique centralizado.
  }

  // Método responsável por configurar os slides.
  slidesConfig() {
    // O spread operator (...) está transformando os elementos filhos do slide em um array e o map está percorrendo a array e retornando uma nova array com os elementos.
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element); // Armazena a posição do slide na variável position.

      // Retorna um objeto com a posição e o elemento atual da iteração do map.
      return {
        position, // Retorna a posição do elemento atual da iteração do map,
        element, // Retorna o elemento atual da iteração do map.
      };
    });
  }

  // Método responsável por adicionar a classe active ao slide ativo.
  changeActiveClass() {
    // O forEach está percorrendo cada li do slideArray e a cada iteração armaenando o elemento na parâmetro item.
    this.slideArray.forEach((item) => {
      item.element.classList.remove(this.activeClass); // Remove a classe active de todos os slides.
    });
    this.slideArray[this.index.active].element.classList.add(this.activeClass); // Adiciona a classe active ao slide ativo.
  }

  // Método responsável por mudar o slide para o anterior.
  activePreviousSlide() {
    // Se a propriedade previous do objeto index for diferente de undefined, executa o if.
    if (this.index.previous !== undefined) {
      this.changeSlide(this.index.previous); // Executa o método changeSlide responsável por mudar o slide de acordo com o index passado no parâmetro. Passa o index do slide anterior ao ativo como parâmetro.
    }
  }

  // Método responsável por mudar o slide para o próximo.
  activeNextSlide() {
    // Se a propriedade next do objeto index for diferente de undefined, executa o if.
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next); // Executa o método changeSlide responsável por mudar o slide de acordo com o index passado no parâmetro. Passa o index do slide depois do ativo como parâmetro.
    } 
    // Senão executa o else.
    else {
      this.changeSlide(0); // Executa o método changeSlide responsável por mudar o slide de acordo com o index passado no parâmetro. Passa 0 como parâmetro.
    }
  }

  // Método responsável por recalcular a posição do slide quando a tela for redimensionada.
  onResize() {
    // O setTimeout está executando a função anonima depois de 1 segundo.
    setTimeout(() => {
      this.slidesConfig(); // Executa o método slidesConfig responsável por configurar os slides.
      this.changeSlide(this.index.active); // Executa o método changeSlide responsável por mudar o slide de acordo com o index passado no parâmetro. Passa o index do slide ativo como parâmetro.
    }, 1000);
  }

  // Método responsável por adicionar o evento resize ao window.
  addResizeEvent() {
    window.addEventListener("resize", this.onResize); // Adiciona o evento resize ao window que ao ser acionado executa o método onResize.
  }

  // Método responsável por fazer o bind refereciar o objeto da classe Slide ao invés do elemento HTML.
  bindEvents() {
    // O bind(this) está fazendo com que o this dos métodos referencie o objeto da classe Slide, é sempre usado quando for passar um método como callback, geralmente em eventos de escuta.
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200); // O debounce está fazendo com que o método onResize seja executado somente depois de 1 segundo.
    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.activePreviousSlide = this.activePreviousSlide.bind(this);
  }

  // Método responsável por fazer o slide passar automaticamente para o próximo a cada 3 segundos.
  autoSlide() {
    setInterval(() => {
      this.activeNextSlide(); // Chama o método activeNextSlide para mudar para o próximo slide.
    }, 3000); // Intervalo de 3 segundos (3000 milissegundos).
  }


  // Método responsável por iniciar o carrossel.
  init() {
    // Se o wrapper e o slide existirem, executa o if.
    if (this.wrapper && this.slide) {
      this.bindEvents(); // Executa o método bindEvents responsável por fazer o bind refereciar o objeto da classe Slide ao invés do elemento HTML.
      this.addSlideEvents(); // Executa o método addSlideEvents responsável por adicionar os eventos ao wrapper.
      this.slidesConfig(); // Executa o método slidesConfig responsável por configurar os slides.
      this.transition(true); // Executa o método transition responsável por adicionar efeito de transição ao slide. Passa true como parâmetro.
      this.addResizeEvent(); // Executa o método addResizeEvent responsável por adicionar o evento resize ao window.
      this.changeSlide(0); // Executa o método changeSlide responsável por mudar o slide de acordo com o index passado no parâmetro. Passa 0 como parâmetro.
      this.autoSlide(); // Chama o método autoSlide para iniciar o slide automático.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}