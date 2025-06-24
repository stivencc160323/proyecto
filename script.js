let lastScrollTop = 0;
const menu = document.getElementById('menu-container');




window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  menu.style.top = scrollTop > lastScrollTop ? '-120px' : '0';
  lastScrollTop = scrollTop;
});

(function () {
  'use strict';

  // Selecciona todos los formularios que requieren validación
  const forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault(); // Opcional: para evitar recarga si rediriges
        window.location.href = 'grafica_lineas.html'; // sin tilde
      }

      form.classList.add('was-validated');
    }, false);
  });
})();



const video = document.getElementById("banner-video");
let lastScroll = window.scrollY;


const FPS = 30;
const DURATION = 5; // segundos
const TOTAL_FRAMES = FPS * DURATION;


function updateVideoFrame() {
  const scrollTop = window.scrollY;
  const scrollDirection = scrollTop > lastScroll ? 1 : -1;


  const maxScroll = window.innerHeight * 1; // Ajusta este valor si quieres más o menos rango
  const scrollPercent = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
  const targetFrame = scrollPercent * TOTAL_FRAMES;


  video.currentTime = targetFrame / FPS;


  lastScroll = scrollTop;
}


window.addEventListener("scroll", () => {
  requestAnimationFrame(updateVideoFrame);
});


// Prevenir reproducción automática
video.pause();
video.currentTime = 0;


const videoColombia = document.getElementById('videoFondoColombia');
const fps = 30;
const duration = 5; // segundos
const totalFrames = fps * duration;


window.addEventListener('scroll', () => {
  const seccion = document.getElementById('colombia');
  const rect = seccion.getBoundingClientRect();
  const visibleHeight = window.innerHeight;


  if (rect.top < visibleHeight && rect.bottom > 0) {
    const progress = 1 - Math.max(0, Math.min(1, (rect.top + rect.height) / (visibleHeight + rect.height)));
    const frame = Math.floor(progress * totalFrames);
    const time = frame / fps;


    if (!isNaN(time)) {
      videoColombia.currentTime = time;
    }
  }
});


// Asegúrate de que no se reproduzca automáticamente como loop
videoColombia.pause();
videoColombia.currentTime = 0;






const cards = document.querySelectorAll('.tipo-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  root: document.querySelector('#tipos-scroll'),
  threshold: 0.5
});
cards.forEach(card => observer.observe(card));









// Obtenemos todas las imágenes que deben animarse
const imagenesAnimadas = document.querySelectorAll('.foto-animada');


// Creamos un solo observer que maneja todo
const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // Para animación reversible
    }
  });
}, {
  threshold: 0.5
});

// Observamos cada imagen animada
imagenesAnimadas.forEach(img => imgObserver.observe(img));






const imagenIzquierda = document.querySelector('.animar-desde-izquierda');


const observerIzquierda = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.5
});


if (imagenIzquierda) {
  observerIzquierda.observe(imagenIzquierda);
}
