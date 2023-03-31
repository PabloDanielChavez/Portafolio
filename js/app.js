import {
            obtenerBienvenidaNavegacion,
            obtenerInteres,
            obtenerDatosPersonales,
            obtenerTecnicas,
            obtenerProfesionales,
            obtenerDestacados, obtenerPlan,
            obtenerFooter,
            obtenerInformacion
        } from './API.js';
import { 
            mostrarBienvenidaNavegacion,
            mostrarInteres,
            mostrarDatosPersonales,
            mostrarTecnicas,
            mostrarProfesionales,
            mostrarDestacados, mostrarPlan,
            mostrarFooter,
            mostrarInformacion, activarFormulario
    } from './funciones.js';

const btnContacto = document.querySelector('#btnContacto');

(function () {
    document.addEventListener("DOMContentLoaded", cargarDatos);
    if(window.location.href === 'http://127.0.0.1:5500/index.html' || window.location.href === 'https://portafolio-pdc.netlify.app/' || window.location.href === 'https://portafolio-pdc.netlify.app/index.html') {
        btnContacto.addEventListener("click", contacto);
    }

    function cargarDatos() {
        // if(window.location.href === 'http://127.0.0.1:5500/index.html' || window.location.href === 'https://portafolio-pdc.netlify.app/' || window.location.href === 'https://portafolio-pdc.netlify.app/index.html') {
        //     cargarBienvenidaNavegacion();
        //     setTimeout(() => {
        //         cargarDatosPersonales();
        //         setTimeout(() => {
        //             cargarInteres();
        //             cargarTecnicas();
        //             cargarProfesionales();
        //             cargarDestacados();
        //             cargarPlan();
        //             cargarFooter();
        //         }, 500);
        //     }, 500);
        // }
        if(window.location.href === 'http://127.0.0.1:5500/informacion.html' || window.location.href === 'https://portafolio-pdc.netlify.app/informacion.html') {
            cargarInformacion();
        }
    };

    function contacto() {
        activarFormulario();
        console.log("Desde btnContacto");
    }

    async function cargarBienvenidaNavegacion() {
        const bienvenidaNavegacion = await obtenerBienvenidaNavegacion();
        bienvenidaNavegacion.forEach( datos => {
            const {href, nombreImagen, alt} = datos;
            mostrarBienvenidaNavegacion(href, nombreImagen, alt);
        });
    };

    async function cargarDatosPersonales() {
        const datosPersonales = await obtenerDatosPersonales();
        datosPersonales.forEach( datos => {
            const {nombre, href, dato} = datos;
            mostrarDatosPersonales(nombre, href, dato);
        });
    };

    async function cargarInteres() {
        const interes = await obtenerInteres();
        interes.forEach( datos => {
            const {icono, nombre} = datos;
            mostrarInteres(icono, nombre);
        });
    };

    async function cargarTecnicas() {
        const tecnicas = await obtenerTecnicas();
        tecnicas.forEach( datos => {
            const {nombre, porcentaje} = datos;
            mostrarTecnicas(nombre, porcentaje);
        });
    };

    async function cargarProfesionales() {
        const profesionales = await obtenerProfesionales();
        profesionales.forEach( datos => {
            const {nombre, porcentaje} = datos;
            mostrarProfesionales(nombre, porcentaje);
        });
    };

    async function cargarDestacados() {
        const destacados = await obtenerDestacados();
        destacados.forEach( datos => {
            const {href, nombreImagen, alt, nombrePagina, infoPagina, id} = datos;
            mostrarDestacados(href, nombreImagen, alt, nombrePagina, infoPagina, id);
        });
    };

    async function cargarPlan() {
        const planes = await obtenerPlan();
        planes.forEach( datos => {
            const { nombre, info, paginas, revisiones, precio, descuento} = datos;
            mostrarPlan( nombre, info, paginas, revisiones, precio, descuento );
        });
    };

    async function cargarFooter() {
        const footer = await obtenerFooter();
        footer.forEach( datos => {
            const { href, nombreImagen, alt } = datos;
            mostrarFooter( href, nombreImagen, alt );
        });
    };

    async function cargarInformacion() {
        const info = await obtenerInformacion();
        info.forEach( datos => {
            const { version, fechaInicio, fechaFin, tipo1, detalle1, tipo2, detalle2, tipo3, detalle3, tipo4, detalle4, tipo5, detalle5 } = datos;
            mostrarInformacion( version, fechaInicio, fechaFin, tipo1, detalle1, tipo2, detalle2, tipo3, detalle3, tipo4, detalle4, tipo5, detalle5 );
        });
    };
})();