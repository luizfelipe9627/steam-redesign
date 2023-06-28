// Está importando os módulos.
import MenuMobile from "./modules/menu-mobile.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuActive from "./modules/menu-active.js";
import StoreActive from "./modules/store-active.js";

const menuMobile = new MenuMobile(); // Está criando um objeto da classe MenuMobile.
menuMobile.init(); // Está executando a função init do objeto criado.

const dropdownMenu = new DropdownMenu(); // Está criando um objeto da classe DropdownMenu.
dropdownMenu.init(); // Está executando a função init do objeto criado.

const menuActive = new MenuActive(); // Está criando um objeto da classe MenuActive.
menuActive.init(); // Está executando a função init do objeto criado.

const storeActive = new StoreActive(); // Está criando um objeto da classe StoreActive.
storeActive.init(); // Está executando a função init do objeto criado.

