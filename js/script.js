document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#header");
  const linksMenu = document.querySelectorAll(".menu li a");

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
      let linkActive = document.querySelector(".menu__item--active");
      linkActive.classList.remove("menu__item--active");
      linksMenu[index].classList.add("menu__item--active");
    });
  }
});
