/**Menú móvil**/
const navegacionMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu__movil");

navToggle.addEventListener("click", () => {
    const visibility = navegacionMenu.getAttribute("data-visible");

    if (visibility === "false") {
        navegacionMenu.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        navegacionMenu.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

/**Sticky menú**/
window.addEventListener("scroll", function (){
    var header = document.querySelector(".header");
    header.classList.toggle("menu-sticky",window.scrollY>80);
});

