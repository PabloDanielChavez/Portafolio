
import {
            cargarIndex,
            cargarInformacion,
        } from './funciones.js';

import { 
            pantallaDeCarga
        } from './variables.js';

(function () {
    if(window.location.href === 'http://127.0.0.1:5500/index.html' || window.location.href === 'https://portafolio-pdc.netlify.app' || window.location.href === 'https://portafolio-pdc.netlify.app/' || window.location.href === 'https://portafolio-pdc.netlify.app/index.html') {
        document.addEventListener("DOMContentLoaded", cargarIndex);
        setTimeout(() => {
            pantallaDeCarga.remove();
        }, 1000);
    } else if(window.location.href === 'http://127.0.0.1:5500/informacion.html' || window.location.href === 'https://portafolio-pdc.netlify.app/informacion.html' || window.location.href === 'https://portafolio-pdc.netlify.app/informacion') {
        document.addEventListener("DOMContentLoaded", cargarInformacion);
        setTimeout(() => {
            pantallaDeCarga.remove();
        }, 1000);
    }
})();