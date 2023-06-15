const navbar = document.querySelector(".navbar");

window.addEventListener("resize", () => {
  let WindowWidth = window.innerWidth;

  if (WindowWidth > 768) {
    navbarCollapse.classList.remove("showNavbar");
    navbar.classList.remove("showNavbar");
  }
});

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-nav");

navbarToggler.onclick = () => {
  navbarCollapse.classList.toggle("showNavbar");
  navbar.classList.toggle("showNavbar");

  let navbarTogglerIcon = navbarToggler.querySelector("i").classList;
  if (navbarTogglerIcon.contains("fa-bars")) {
    navbarTogglerIcon.remove("fa-bars");
    navbarTogglerIcon.add("fa-times");
  } else {
    navbarTogglerIcon.remove("fa-times");
    navbarTogglerIcon.add("fa-bars");
  }
};
