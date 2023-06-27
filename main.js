/*
ALTERNATIVA DE CURSOR

const contenedor = document.querySelector('.contenedor');
const sizeDegradado = 400;

contenedor.style.background = `radial-gradient(circle at 50px 50px, transparent 0%, #0f172a ${sizeDegradado}px)`


contenedor.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY
    
    console.log(e)
    contenedor.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, #0f172a ${sizeDegradado}px)`
})

*/

// CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let y = e.clientY
    let x = e.clientX

    cursor.style.top = y + "px"
    cursor.style.left = x + "px"

console.log(e);

});

// SELECTOR MENU

const menuLinks = document.querySelectorAll('.menu li a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu li a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu li a.active").classList.remove("active");
        menuLink.classList.add("active");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
})