document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#header");
  const linksMenu = document.querySelectorAll(".menu li a");
  const iconHamburguer = document.querySelector("#icon-hamburger");
  const menu = document.querySelector("#menu");

  /**
   * For Scroll Menu Animation
   * */
  window.addEventListener("scroll", function () {
    let windowHeight = document.documentElement.scrollTop;

    if (windowHeight > 100) {
      header.classList.add("header--fixed");
    }
    if (windowHeight <= 100) {
      header.classList.remove("header--fixed");
    }
  });

  /**
   * For animation of menu items active
   */
  for (const [index, link] of linksMenu.entries()) {
    link.addEventListener("click", () => {
      const menuOpened = document.querySelector(".menu--open");
      let linkActive = document.querySelector(".menu__item--active");
      linkActive.classList.remove("menu__item--active");
      linksMenu[index].classList.add("menu__item--active");

      if (menuOpened) {
        removeClasesOpen();
      }
    });
  }

  /**
   * For Hamburguer menu
   */
  iconHamburguer.addEventListener("click", () => {
    iconHamburguer.classList.toggle("icon-hamburger--open");
    menu.classList.toggle("menu--open");
    header.classList.toggle("header--open");
  });

  document.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
      return;
    }

    let key = event.key || event.keyCode;

    if (key === "Escape" || key === "Esc" || key === 27) {
      removeClasesOpen();
    }
  });

  /** For close hamburguer menu - no mobile devices */
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 992) {
      removeClasesOpen();
    }
  });

  function removeClasesOpen() {
    header.classList.remove("header--open");
    menu.classList.remove("menu--open");
    iconHamburguer.classList.remove("icon-hamburger--open");

    console.log("cerrando menu");
  }
});
