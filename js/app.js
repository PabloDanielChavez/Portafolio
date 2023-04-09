
import {
            cargarIndex,
            cargarInformacion
        } from './funciones.js';

(function () {
    if(window.location.href === 'http://127.0.0.1:5500/index.html' || window.location.href === 'https://portafolio-pdc.netlify.app' || window.location.href === 'https://portafolio-pdc.netlify.app/' || window.location.href === 'https://portafolio-pdc.netlify.app/index.html') {
        document.addEventListener("DOMContentLoaded", cargarIndex);
    } else if(window.location.href === 'http://127.0.0.1:5500/informacion.html' || window.location.href === 'https://portafolio-pdc.netlify.app/informacion.html' || window.location.href === 'https://portafolio-pdc.netlify.app/informacion') {
        document.addEventListener("DOMContentLoaded", cargarInformacion);
    }
})();