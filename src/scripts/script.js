const nav = document.querySelector("nav");
const menu = document.querySelector(".menu-hamburguer label");
const container = document.querySelector(".container-nav");

const openAndCloseMenu = () => {
  nav.classList.toggle("active");

  container.classList.toggle("active");
}

menu.addEventListener("click", openAndCloseMenu)

