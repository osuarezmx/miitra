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

/** Animaciones **/
window.sr = ScrollReveal().reveal('', { mobile: false });

/** Inicio **/
//Landing
sr.reveal(".landing__titulo",{
    origin: 'top',
    delay: 200,
    interval: 106,
    duration: 1500,
    distance:'120%'
});
sr.reveal(".landing__texto",{
    origin: 'left',
    delay: 200,
    interval: 106,
    duration: 1500,
    distance:'120%'
});
sr.reveal(".landing__imagen",{
    origin: 'top',
    delay: 400,
    interval: 106,
    duration: 2000,
    distance:'120%'
});
//Repse
sr.reveal(".repse__uno",{
    origin: 'left',
    interval: 106,
    duration: 1500,
    distance:'100%'
});
sr.reveal(".repse__dos",{
    origin: 'bottom',
    delay: 400,
    interval: 106,
    duration: 2000,
    distance:'120%'
});
//Inicio Nosotros-Servicios
sr.reveal(".acerca__imagen",{
    origin: 'top',
    interval: 106,
    duration: 1500,
    distance:'150%'
});
sr.reveal(".acerca__contenido",{
    origin: 'right',
    delay: 200,
    interval: 106,
    duration: 1800,
    distance:'100%'
});
sr.reveal(".a-servicio-01",{
    origin: 'top',
    interval: 106,
    duration: 1800,
    distance:'200%'
});
sr.reveal(".a-servicio-02",{
    origin: 'top',
    delay: 500,
    interval: 106,
    duration: 1800,
    distance:'100%'
});
sr.reveal(".a-servicio-03",{
    origin: 'bottom',
    delay: 900,
    interval: 106,
    duration: 1800,
    distance:'100%'
});
sr.reveal(".a-servicio-04",{
    origin: 'bottom',
    delay: 1300,
    interval: 106,
    duration: 1800,
    distance:'100%'
});
//Beneficios
sr.reveal(".beneficios__titulo",{
    origin: 'left',
    interval: 106,
    duration: 1500,
    distance:'100%'
});
sr.reveal(".beneficios__texto",{
    origin: 'left',
    delay: 500,
    interval: 106,
    duration: 1800,
    distance:'100%'
});
sr.reveal(".beneficios__lista",{
    origin: 'bottom',
    delay: 900,
    interval: 106,
    duration: 2000,
    distance:'100%'
});
//Pre Footer
sr.reveal(".cta__titulo",{
    origin: 'top',
    interval: 106,
    duration: 1800,
    distance:'100%'
});
sr.reveal(".cta__texto",{
    origin: 'left',
    delay: 500,
    interval: 106,
    duration: 2000,
    distance:'100%'
});
sr.reveal(".cta__contacto",{
    origin: 'bottom',
    delay: 900,
    interval: 106,
    duration: 2200,
    distance:'120%'
});
//Footer
sr.reveal(".footer",{
    origin: 'top',
    interval: 106,
    duration: 600,
    distance:'20%'
});
sr.reveal(".footer__logo",{
    origin: 'left',
    delay: 300,
    interval: 106,
    duration: 900,
    distance:'120%'
});
sr.reveal(".footer__contacto",{
    origin: 'left',
    delay: 700,
    interval: 106,
    duration: 1200,
    distance:'120%'
});
sr.reveal(".footer__direccion",{
    origin: 'left',
    delay: 1100,
    interval: 106,
    duration: 1500,
    distance:'120%'
});
sr.reveal(".copyright",{
    origin: 'left',
    interval: 106,
    duration: 900,
    distance:'100%'
});
sr.reveal(".politicas",{
    origin: 'left',
    delay: 500,
    interval: 106,
    duration: 1100,
    distance:'100%'
});

/** Nosotros **/
sr.reveal(".nosotros__titulo",{
        origin: 'top',
        interval: 106,
        duration: 1500,
        distance:'80%'
});
sr.reveal(".nosotros__texto",{
        origin: 'left',
        interval: 106,
        duration: 2000,
        distance:'80%'
});
sr.reveal(".contenido__imagen",{
    origin: 'top',
    delay: '500',
    interval: 106,
    duration: 1500,
    distance:'80%'
});
sr.reveal(".contenido__titulo",{
    origin: 'left',
    interval: 106,
    duration: 2000,
    distance:'80%'
});
sr.reveal(".contenido__texto",{
    origin: 'left',
    interval: 106,
    duration: 2000,
    distance:'80%'
});
sr.reveal(".contenido__enlace",{
    origin: 'left',
    interval: 106,
    duration: 2000,
    distance:'80%'
});

/**Servicios**/
//Intro
sr.reveal(".servicios__nombre",{
    origin: 'left',
    interval: 106,
    duration: 1500,
    distance:'120%'
});
sr.reveal(".servicios__descripcion",{
    origin: 'right',
    delay: 300,
    interval: 106,
    duration: 1800,
    distance:'120%'
});
//Iconos
sr.reveal(".propiedad-1",{
    origin: 'bottom',
    delay: 500,
    interval: 106,
    duration: 1500,
    distance:'120%'
});
sr.reveal(".propiedad-2",{
    origin: 'bottom',
    delay: 900,
    interval: 106,
    duration: 1800,
    distance:'120%'
});
sr.reveal(".propiedad-3",{
    origin: 'bottom',
    delay: 1400,
    interval: 106,
    duration: 2000,
    distance:'120%'
});
//Variantes
sr.reveal(".a-s-int-01",{
    origin: 'bottom',
    interval: 106,
    duration: 1500,
    distance:'120%'
});
sr.reveal(".a-s-int-02",{
    origin: 'bottom',
    delay: 500,
    interval: 106,
    duration: 1800,
    distance:'120%'
});

/**Servicios Individuales**/
sr.reveal(".introduccion__titulo",{
    origin: 'top',
    interval: 106,
    duration: 1500,
    distance:'120%'
});
sr.reveal(".introduccion__texto",{
    origin: 'left',
    delay: 500,
    interval: 106,
    duration: 1800,
    distance:'120%'
});
//Tipo de Servicio
sr.reveal(".ani-serv-01",{
    origin: 'left',
    interval: 106,
    duration: 1500,
    distance:'100%'
});
sr.reveal(".ani-serv-02",{
    origin: 'left',
    delay: 500,
    interval: 106,
    duration: 1800,
    distance:'100%'
});
sr.reveal(".ani-serv-03",{
    origin: 'left',
    delay: 900,
    interval: 106,
    duration: 2000,
    distance:'100%'
});
/**Contacto**/
sr.reveal(".contacto__titulo",{
    origin: 'top',
    interval: 106,
    duration: 1500,
    distance:'100%'
});
sr.reveal(".contacto__texto",{
    origin: 'left',
    delay: 500,
    interval: 106,
    duration: 2000,
    distance:'100%'
});
sr.reveal(".contacto__bloque",{
    origin: 'left',
    delay: 900,
    interval: 106,
    duration: 2000,
    distance:'100%'
});
sr.reveal(".contacto__formulario",{
    origin: 'right',
    delay: 1300,
    interval: 106,
    duration: 1800,
    distance:'100%'
});