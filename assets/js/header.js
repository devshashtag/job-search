window.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.querySelector(".header-menu > .toggle");
  const menuNav = document.querySelector(".header-menu > .nav");
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("is-active");
    menuNav.classList.toggle("is-active");
  });

});
