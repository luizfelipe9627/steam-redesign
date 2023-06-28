/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/modules/dropdown-menu.js":
/*!**********************************************!*\
  !*** ./src/scripts/modules/dropdown-menu.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outsideclick.js */ \"./src/scripts/modules/outsideclick.js\");\n\n\n // O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.\n\n// Classe responsável por abrir e fechar o dropdown aparecer ao clicar com o mouse no menu.\n// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.\nvar DropdownMenu = /*#__PURE__*/function () {\n  // O constructor é usado para definir os parâmetros que serão usados na classe.\n  function DropdownMenu() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, DropdownMenu);\n    this.dropdownMenus = document.querySelectorAll('[data-dropdown]'); // Está selecionando todos os elementos que contém o dataset dropdown.\n\n    this.profileDropdown = document.querySelector('.profile-dropdown'); // Está selecionando o elemento que contém o dataset profile-dropdown.\n\n    this.activeClass = \"active\"; // Está criando uma variável que contém a classe ativo.\n\n    this.events = [\"touchstart\", \"click\"]; // Está criando uma variável que contém um array com dois eventos, um sendo o touchstart e o outro sendo o click.\n\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this); // Está criando uma variável que contém a função activeDropdownMenu e está referenciando o objeto da classe DropdownMenu atráves do bind.\n  }\n\n  // Criado uma função chamada activeDropdownMenu que tem como intuito abrir e fechar o dropdown ao clique, recebe um parâmetro chamado de event.\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DropdownMenu, [{\n    key: \"activeDropdownMenu\",\n    value: function activeDropdownMenu(event) {\n      var _this = this;\n      event.preventDefault(); // Impede o carregamento da página.\n\n      var element = event.currentTarget; // Está criando uma variável que contém o elemento que está sendo clicado.\n\n      element.classList.add(this.activeClass); // Adiciona ao element(data-dropdown) a classe ativo.\n\n      this.profileDropdown.classList.add(this.activeClass); // Adiciona ao profileDropdown a classe active.\n\n      // Executa a função outsideClick que tem o elemento que está sendo clicado como referencia, no caso o element(data-dropdown) da função, a array referenciando o events que vão ser responsável por ativar o callback.\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, this.events, function () {\n        // Escopo do parâmetro callback criado na função.\n        element.classList.remove(_this.activeClass); // Remove do element(data-dropdown) a classe ativo.\n        _this.profileDropdown.classList.remove(_this.activeClass); // Remove do profileDropdown a classe active.\n      });\n    }\n\n    // Criado uma função chamada addDropdownMenusEvent que tem como intuito adicionar o evento de clique e touchstart ao dropdownMenus.\n  }, {\n    key: \"addDropdownMenusEvent\",\n    value: function addDropdownMenusEvent() {\n      var _this2 = this;\n      // O forEach passa por cada elemento do dropdownMenus, está recebendo um parâmetro que é cada menu.\n      this.dropdownMenus.forEach(function (menu) {\n        // Criado uma array que contém dois eventos de escuta, o forEach passa percorre por cada evento(nomeado com userEvent).\n        _this2.events.forEach(function (userEvent) {\n          menu.addEventListener(userEvent, _this2.activeDropdownMenu); // No menu atual do forEach anterior pega o evento disparado e aciona a função activeDropdownMenu criada.\n        });\n      });\n    }\n\n    // Criado uma função chamada init que tem como intuito iniciar a função addDropdownMenusEvent.\n  }, {\n    key: \"init\",\n    value: function init() {\n      // Verifica se o dropdownMenus existe se existir executa o if.\n      if (this.dropdownMenus.length) {\n        this.addDropdownMenusEvent(); // Executa a função addDropdownMenusEvent.\n      }\n\n      return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.\n    }\n  }]);\n  return DropdownMenu;\n}();\n\n\n//# sourceURL=webpack://steam/./src/scripts/modules/dropdown-menu.js?");

/***/ }),

/***/ "./src/scripts/modules/menu-mobile.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/menu-mobile.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outsideclick.js */ \"./src/scripts/modules/outsideclick.js\");\n\n\n // O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.\n\n// Classe responsável por abrir e fechar o menu mobile.\n// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.\nvar MenuMobile = /*#__PURE__*/function () {\n  // O constructor é usado para definir os parâmetros que serão usados na classe.\n  function MenuMobile() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MenuMobile);\n    this.menuButton = document.querySelector('.menu-hamburguer'); // Está selecionando o menu hamburguer e armazenando na constante menuButton.\n    this.menuList = document.querySelector('[data-menu=\"smooth\"]'); // Está selecionando o container nav e armazenando na constante menuList.\n\n    this.activeClass = \"active\"; // Está criando uma variável que contém uma string chamada active.\n\n    this.events = [\"click\", \"touchstart\"]; // Está criando uma variável que contém um array com dois eventos, um sendo o click e o outro sendo o touchstart.\n\n    this.openMenu = this.openMenu.bind(this); // Está criando uma variável que contém a função openMenu e está referenciando o objeto da classe MenuMobile atráves do bind.\n  }\n\n  // Função openMenu responsável por abrir e fechar o menu mobile.\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MenuMobile, [{\n    key: \"openMenu\",\n    value: function openMenu(event) {\n      var _this = this;\n      event.preventDefault(); // Está prevenindo o comportamento padrão do evento.\n\n      this.menuList.classList.add(this.activeClass); // Está adicionando uma classe chamada ativo no menuList.\n      this.menuButton.classList.add(this.activeClass); // Está adicionando uma classe chamada ativo no menuButton.\n\n      // Função importada responsável por fazer o menu mobile sumir ao clicar fora dele, recebe três parâmetros, um sendo o element(menuList), o outro sendo os eventos de escuta e o outro o callback(transformada em uma função) que vai ser executada após o evento ser disparado.\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.menuList, this.events, function () {\n        _this.menuList.classList.remove(_this.activeClass); // Está removendo a classe chamada ativo no menuList.\n        _this.menuButton.classList.remove(_this.activeClass); // Está removendo a classe chamada ativo no menuButton.\n      });\n    }\n\n    // Função responsável por adicionar os eventos de click e touchstart ao menuButton.\n  }, {\n    key: \"addMenuMobileEvents\",\n    value: function addMenuMobileEvents() {\n      var _this2 = this;\n      // O forEach passa por cada evento(nomeado como userEvent) e executa o escopo caso algum dos eventos definidos sejam disparados.\n      this.events.forEach(function (userEvent) {\n        _this2.menuButton.addEventListener(userEvent, _this2.openMenu); // Está adicionando um evento de click e de touch no menuButton, que ao ser acionado executa a função openMenu.\n      });\n    }\n\n    // Função responsável por iniciar as funções.\n  }, {\n    key: \"init\",\n    value: function init() {\n      // Verifica se o menuButton e o menuList existe se existir executa o if.\n      if (this.menuButton && this.menuList) {\n        this.addMenuMobileEvents(); // Está chamando a função addMenuMobileEvents.\n      }\n\n      return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.\n    }\n  }]);\n  return MenuMobile;\n}();\n\n\n//# sourceURL=webpack://steam/./src/scripts/modules/menu-mobile.js?");

/***/ }),

/***/ "./src/scripts/modules/outsideclick.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/outsideclick.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\n// Função chamada outsideClick responsável por fazer o dropdown sumir ao clicar fora dele, recebe três parâmetros, um sendo o element(data-dropdown), o outro sendo os eventos e o outro o callback(transformada em uma função) que vai ser executada após o evento ser disparado.\n// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement; // Está selecionando o HTML e armazenando na constante html.\n  var outside = \"data-outisde\"; // Criado uma constante contendo uma string de um novo dataset.\n\n  // Função nomeada como handleOutsideClick responsável por tendo um parâmetro chamado de event responsável pelos eventos de escuta.\n  function handleOutsideClick(event) {\n    // Faz uma verificação que se dentro do element(data-dropdown) conter o target do elemento clicado retorna true e executa o escopo do if.\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside, \"\"); // No element(data-dropdown) remove o atributo dataset chamado outside quando clicado fora do element.\n\n      // O forEach passa por cada evento e executa o escopo caso algum dos eventos definidos sejam disparados.\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick); // Remove o evento de escuta de clique criado no elemento html.\n      });\n\n      callback(); // Está executando no handleClick a função criada.\n    }\n  }\n\n  // Se o element(data-dropdown) não ter o atributo data-outside retorna true e ativa o evento de clique criado no html, para assim ele não ser executado mais de uma vez sem necessidade.\n  if (!element.hasAttribute(outside)) {\n    // O forEach passa por cada evento(nomeado como userEvent) e executa o escopo caso algum dos eventos definidos sejam disparados.\n    events.forEach(function (userEvent) {\n      // O setTimeout faz a fase de bubble ser passada primeiro, e depois o callback do setTimeout.\n      setTimeout(function () {\n        html.addEventListener(userEvent, handleOutsideClick); // Está adicionando um evento de clique e de touch no HTML, que ao ser acionado executa a função handleOutside.\n      });\n    });\n\n    element.setAttribute(outside, \"\"); // No element(data-dropdown) seta um novo atributo dataset chamado outside.\n  }\n}\n\n//# sourceURL=webpack://steam/./src/scripts/modules/outsideclick.js?");

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./src/scripts/modules/menu-mobile.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./src/scripts/modules/dropdown-menu.js\");\n// Está importando os módulos.\n\n\nvar menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // Está criando um objeto da classe MenuMobile.\nmenuMobile.init(); // Está executando a função init do objeto criado.\n\nvar dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); // Está criando um objeto da classe DropdownMenu.\ndropdownMenu.init(); // Está executando a função init do objeto criado.\n\n//# sourceURL=webpack://steam/./src/scripts/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://steam/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://steam/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://steam/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://steam/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://steam/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/script.js");
/******/ 	
/******/ })()
;