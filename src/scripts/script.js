// Está importando os módulos.
import MenuMobile from "./modules/menu-mobile.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import ModalNotifications from "./modules/modal-notifications.js";
import ModalMessages from "./modules/modal-messages.js";
import SlideGames from "./modules/slide-games.js";
import SlideNav from "./modules/slide-nav.js";

const menuMobile = new MenuMobile(); // Está criando um objeto da classe MenuMobile.
menuMobile.init(); // Está executando a função init do objeto criado.

const dropdownMenu = new DropdownMenu(); // Está criando um objeto da classe DropdownMenu.
dropdownMenu.init(); // Está executando a função init do objeto criado.

const modalNotifications = new ModalNotifications();
modalNotifications.init();

const modalMessages = new ModalMessages();
modalMessages.init();

const slideGames = new SlideGames();
slideGames.init();

const slideNav = new SlideNav();
slideNav.init();
slideNav.addControl();

