import {
            nuevoContacto,
            obtenerInformacion
        } from './API.js';

import {    
            informacionPortafolio__grid,
            bienvenida__navegacion,
            bienvenida__principalbox,
            bienvenida__borderprincipal,
            bienvenida__fotoperfilborde,
            bienvenida__fotoperfilprincipal,
            bienvenida__titulobienvenida,
            bienvenida__nombreh2,
            bienvenida__ocupacion,
            bienvenida__formulario,
            bienvenida__contacto,
            btnContacto,
            input__nombre,
            input__correo,
            input__asunto,
            emergente,
            btnEnviar
        } from './variables.js';
export function cargarIndex() {
    if(window.location.href === 'http://127.0.0.1:5500/index.html' || window.location.href === 'https://portafolio-pdc.netlify.app' || window.location.href === 'https://portafolio-pdc.netlify.app/' || window.location.href === 'https://portafolio-pdc.netlify.app/index.html') {
        btnContacto.addEventListener("click", formularioContacto);
        bienvenida__formulario.addEventListener("submit", validarFormulario);
        mostrarEmergente("check_circle", "Pagina cargada con exito.", 2000);
    } else {
        mostrarEmergente("error", "La pagina no a cargado con exito.", 2000);
    }
}

export function cargarInformacion() {
    if(window.location.href === 'http://127.0.0.1:5500/informacion.html' || window.location.href === 'https://portafolio-pdc.netlify.app/informacion.html' || window.location.href === 'https://portafolio-pdc.netlify.app/informacion') {
        cargarVersiones();
        mostrarEmergente("check_circle","Pagina cargada con exito.", 2000);
    } else {
        mostrarEmergente("error", "La pagina no a cargado con exito.", 2000);
    }
}

// Cargar datos de la API a las funciones que la muestra
async function cargarVersiones() {
    const info = await obtenerInformacion();
    info.forEach( datos => {
        const { version, fechaInicio, fechaFin, tipo1, detalle1, tipo2, detalle2, tipo3, detalle3, tipo4, detalle4, tipo5, detalle5 } = datos;
        mostrarInformacion( version, fechaInicio, fechaFin, tipo1, detalle1, tipo2, detalle2, tipo3, detalle3, tipo4, detalle4, tipo5, detalle5 );
    });
};

// Crea y muestra datos tomados de API.js en la pagina "Informacion"
function mostrarInformacion( version, fechaInicio, fechaFin, tipo1, detalle1, tipo2, detalle2, tipo3, detalle3, tipo4, detalle4, tipo5, detalle5 ) {
    const informacionPortafolio__box = document.createElement('LI');
    informacionPortafolio__box.classList.add('informacion-portafolio__box');
    informacionPortafolio__grid.appendChild(informacionPortafolio__box);

    const portafolio__hf = document.createElement('DIV');
    portafolio__hf.classList.add("informacion-portafolio__hf");
    informacionPortafolio__box.appendChild(portafolio__hf);

    const informacionPortafolio__versionParrafo = document.createElement('P');
    informacionPortafolio__versionParrafo.classList.add('informacion-portafolio__version-parrafo');
    informacionPortafolio__versionParrafo.textContent = version;
    portafolio__hf.appendChild(informacionPortafolio__versionParrafo);

    const informacionPortafolio__fechaInicio = document.createElement('P');
    informacionPortafolio__fechaInicio.classList.add('informacion-portafolio__fecha');
    informacionPortafolio__fechaInicio.textContent = fechaInicio;
    portafolio__hf.appendChild(informacionPortafolio__fechaInicio);

    const informacionPortafolio__fechaFin = document.createElement('P');
    informacionPortafolio__fechaFin.classList.add('informacion-portafolio__fecha');
    informacionPortafolio__fechaFin.textContent = fechaFin;
    portafolio__hf.appendChild(informacionPortafolio__fechaFin);

    const informacionPortafolio__texto1 = document.createElement('DIV');
    informacionPortafolio__texto1.classList.add('informacion-portafolio__texto');
    informacionPortafolio__box.appendChild(informacionPortafolio__texto1);

    const informacionPortafolio__iconoDone1 = document.createElement('P');
    if(tipo1 === 'done') {
        informacionPortafolio__iconoDone1.textContent = 'check_circle';
        informacionPortafolio__iconoDone1.classList.add('material-symbols-outlined', 'icono--done');
    } else if( tipo1 === 'error' ) {
        informacionPortafolio__iconoDone1.textContent = 'error';
        informacionPortafolio__iconoDone1.classList.add('material-symbols-outlined', 'icono--error');
    }
    informacionPortafolio__texto1.appendChild(informacionPortafolio__iconoDone1);

    const informacionPortafolio__parrafo1 = document.createElement('P');
    informacionPortafolio__parrafo1.classList.add('informacion-portafolio__parrafo');
    informacionPortafolio__parrafo1.textContent = detalle1;
    informacionPortafolio__texto1.appendChild(informacionPortafolio__parrafo1);

    const informacionPortafolio__texto2 = document.createElement('DIV');
    informacionPortafolio__texto2.classList.add('informacion-portafolio__texto');
    informacionPortafolio__box.appendChild(informacionPortafolio__texto2);

    const informacionPortafolio__iconoDone2 = document.createElement('P');
    if(tipo2 === 'done') {
        informacionPortafolio__iconoDone2.textContent = 'check_circle';
        informacionPortafolio__iconoDone2.classList.add('material-symbols-outlined', 'icono--done');
    } else if( tipo2 === 'error' ) {
        informacionPortafolio__iconoDone2.textContent = 'error';
        informacionPortafolio__iconoDone2.classList.add('material-symbols-outlined', 'icono--error');
    }
    informacionPortafolio__texto2.appendChild(informacionPortafolio__iconoDone2);

    const informacionPortafolio__parrafo2 = document.createElement('P');
    informacionPortafolio__parrafo2.classList.add('informacion-portafolio__parrafo');
    informacionPortafolio__parrafo2.textContent = detalle2;
    informacionPortafolio__texto2.appendChild(informacionPortafolio__parrafo2);

    const informacionPortafolio__texto3 = document.createElement('DIV');
    informacionPortafolio__texto3.classList.add('informacion-portafolio__texto');
    informacionPortafolio__box.appendChild(informacionPortafolio__texto3);

    const informacionPortafolio__iconoDone3 = document.createElement('P');
    if(tipo3 === 'done') {
        informacionPortafolio__iconoDone3.textContent = 'check_circle';
        informacionPortafolio__iconoDone3.classList.add('material-symbols-outlined', 'icono--done');
    } else if( tipo3 === 'error' ) {
        informacionPortafolio__iconoDone3.textContent = 'error';
        informacionPortafolio__iconoDone3.classList.add('material-symbols-outlined', 'icono--error');
    }
    informacionPortafolio__texto3.appendChild(informacionPortafolio__iconoDone3);

    const informacionPortafolio__parrafo3 = document.createElement('P');
    informacionPortafolio__parrafo3.classList.add('informacion-portafolio__parrafo');
    informacionPortafolio__parrafo3.textContent = detalle3;
    informacionPortafolio__texto3.appendChild(informacionPortafolio__parrafo3);

    const informacionPortafolio__texto4 = document.createElement('DIV');
    informacionPortafolio__texto4.classList.add('informacion-portafolio__texto');
    informacionPortafolio__box.appendChild(informacionPortafolio__texto4);

    const informacionPortafolio__iconoDone4 = document.createElement('P');
    if(tipo4 === 'done') {
        informacionPortafolio__iconoDone4.textContent = 'check_circle';
        informacionPortafolio__iconoDone4.classList.add('material-symbols-outlined', 'icono--done');
    } else if( tipo4 === 'error' ) {
        informacionPortafolio__iconoDone4.textContent = 'error';
        informacionPortafolio__iconoDone4.classList.add('material-symbols-outlined', 'icono--error');
    }
    informacionPortafolio__texto4.appendChild(informacionPortafolio__iconoDone4);

    const informacionPortafolio__parrafo4 = document.createElement('P');
    informacionPortafolio__parrafo4.classList.add('informacion-portafolio__parrafo');
    informacionPortafolio__parrafo4.textContent = detalle4;
    informacionPortafolio__texto4.appendChild(informacionPortafolio__parrafo4);

    const informacionPortafolio__texto5 = document.createElement('DIV');
    informacionPortafolio__texto5.classList.add('informacion-portafolio__texto');
    informacionPortafolio__box.appendChild(informacionPortafolio__texto5);

    const informacionPortafolio__iconoDone5 = document.createElement('P');
    if(tipo5 === 'done') {
        informacionPortafolio__iconoDone5.textContent = 'check_circle';
        informacionPortafolio__iconoDone5.classList.add('material-symbols-outlined', 'icono--done');
    } else if( tipo5 === 'error' ) {
        informacionPortafolio__iconoDone5.textContent = 'error';
        informacionPortafolio__iconoDone5.classList.add('material-symbols-outlined', 'icono--error');
    }
    informacionPortafolio__texto5.appendChild(informacionPortafolio__iconoDone5);

    const informacionPortafolio__parrafo5 = document.createElement('P');
    informacionPortafolio__parrafo5.classList.add('informacion-portafolio__parrafo');
    informacionPortafolio__parrafo5.textContent = detalle5;
    informacionPortafolio__texto5.appendChild(informacionPortafolio__parrafo5);
};

// Muestra el formulario de contacto
function formularioContacto() {
    if(bienvenida__contacto.classList.value === "bienvenida__contacto") {
        mostrarContacto();
        disabled(btnContacto, 500);
    } else {
        ocultarContacto();
        disabled(btnContacto, 500);
    }
};

function mostrarContacto() {
    bienvenida__principalbox.classList.add("bienvenida__principal-box-activo");
    bienvenida__principalbox.classList.remove("bienvenida__principal-box");
    bienvenida__borderprincipal.classList.add("bienvenida__border-principal-activo");
    bienvenida__borderprincipal.classList.remove("bienvenida__border-principal");
    bienvenida__fotoperfilborde.classList.add("bienvenida__fotoperfil-borde-activo");
    bienvenida__fotoperfilborde.classList.remove("bienvenida__fotoperfil-borde");
    bienvenida__fotoperfilprincipal.classList.add("ienvenida__fotoperfil-principal-activo");
    bienvenida__fotoperfilprincipal.classList.remove("ienvenida__fotoperfil-principal");
    bienvenida__titulobienvenida.classList.add("bienvenida__titulo-bienvenida-activo");
    bienvenida__titulobienvenida.classList.remove("bienvenida__titulo-bienvenida");
    bienvenida__nombreh2.classList.add("bienvenida__nombre-h2-activo");
    bienvenida__nombreh2.classList.remove("bienvenida__nombre-h2");
    bienvenida__ocupacion.classList.add("bienvenida__ocupacion-activo");
    bienvenida__ocupacion.classList.remove("bienvenida__ocupacion");
    bienvenida__formulario.classList.add("bienvenida__formulario-activo");
    bienvenida__formulario.classList.remove("bienvenida__formulario");
    bienvenida__navegacion.classList.add("bienvenida__navegacion-activo");
    bienvenida__navegacion.classList.remove("bienvenida__navegacion");
    setTimeout(() => {
        bienvenida__formulario.classList.add("scale1");
        bienvenida__formulario.classList.remove("scale0");
    }, 1);
    bienvenida__contacto.classList.add("bienvenida__contacto-activo");
    bienvenida__contacto.classList.remove("bienvenida__contacto");
    bienvenida__contacto.textContent = 'Ocultar';
}

function ocultarContacto() {
    bienvenida__principalbox.classList.remove("bienvenida__principal-box-activo");
    bienvenida__principalbox.classList.add("bienvenida__principal-box");
    bienvenida__borderprincipal.classList.remove("bienvenida__border-principal-activo");
    bienvenida__borderprincipal.classList.add("bienvenida__border-principal");
    bienvenida__fotoperfilborde.classList.remove("bienvenida__fotoperfil-borde-activo");
    bienvenida__fotoperfilborde.classList.add("bienvenida__fotoperfil-borde");
    bienvenida__fotoperfilprincipal.classList.remove("ienvenida__fotoperfil-principal-activo");
    bienvenida__fotoperfilprincipal.classList.add("ienvenida__fotoperfil-principal");
    bienvenida__titulobienvenida.classList.remove("bienvenida__titulo-bienvenida-activo");
    bienvenida__titulobienvenida.classList.add("bienvenida__titulo-bienvenida");
    bienvenida__nombreh2.classList.remove("bienvenida__nombre-h2-activo");
    bienvenida__nombreh2.classList.add("bienvenida__nombre-h2");
    bienvenida__ocupacion.classList.remove("bienvenida__ocupacion-activo");
    bienvenida__ocupacion.classList.add("bienvenida__ocupacion");
    bienvenida__formulario.classList.remove("bienvenida__formulario-activo", "scale1");
    bienvenida__formulario.classList.add("bienvenida__formulario", "scale0");
    bienvenida__navegacion.classList.remove("bienvenida__navegacion-activo");
    bienvenida__navegacion.classList.add("bienvenida__navegacion");
    bienvenida__contacto.classList.remove("bienvenida__contacto-activo");
    bienvenida__contacto.classList.add("bienvenida__contacto");
    bienvenida__contacto.textContent = 'Contactar';
}

// Validar Formulario Contacto
async function validarFormulario(e) {
    e.preventDefault();

    const nombre = input__nombre.value;
    const correo = input__correo.value;
    const asunto = input__asunto.value;
    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const contacto = {
        nombre, 
        correo, 
        asunto,
        fecha: ` ${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
    }

    if( validar(contacto) ) {
        mostrarEmergente("error", "¡Todos los campos son obligatorios!", 2000);
        return;
    }
    await nuevoContacto(contacto);
    setTimeout(() => {
        vaciarFormulario();
        formularioContacto();
    }, 4000);
}

function validar(obj) {
    return !Object.values(obj).every(element => element !== '') ;
}

function vaciarFormulario() {
    input__nombre.value = "";
    input__correo.value = "";
    input__asunto.value = "";
}

export function mostrarEmergente(tipo, texto, tiempo) {
    crearEmergente(tipo, texto, tiempo);
}

function crearEmergente(tipo, texto, tiempo) {
        const panel__emergente = document.querySelector('.panel__emergente');

        const emergente = document.createElement('DIV');
        emergente.classList.add('emergente', 'scale0');
        panel__emergente.appendChild(emergente);

        const emergente__grid = document.createElement('DIV');
        emergente__grid.classList.add('emergente__grid');
        emergente.appendChild(emergente__grid);
    
        const emergente__header = document.createElement('HEADER');
        emergente__header.classList.add('emergente__header');
        emergente__grid.appendChild(emergente__header);
    
        const iconoUno = document.createElement('p');
        if(tipo === "error") {
            iconoUno.classList.add("material-symbols-outlined", "icono--error");
            iconoUno.textContent = "error";
        } else if(tipo === "done") {
            iconoUno.classList.add("material-symbols-outlined", "icono--done");
            iconoUno.textContent = "done";
        } else if(tipo === "check_circle") {
            iconoUno.classList.add("material-symbols-outlined", "icono--done");
            iconoUno.textContent = "check_circle";
        } else if(tipo === "database") {
            iconoUno.classList.add("material-symbols-outlined", "icono--error");
            iconoUno.textContent = "database";
        } else if(tipo === "send") {
            iconoUno.classList.add("material-symbols-outlined", "icono--done");
            iconoUno.textContent = "send";
        }
        emergente__header.appendChild(iconoUno);
    
        const emergente__h3 = document.createElement('H3');
        emergente__h3.classList.add('emergente__h3');
        
        if(tipo === "error") {
            emergente__h3.textContent = `error`;
        } else if(tipo === "done") {
            emergente__h3.textContent = `Hecho`;
        } else if(tipo === "check_circle") {
            emergente__h3.textContent = `Cargado`;
        } else if(tipo === "database") {
            emergente__h3.textContent = `API`;
        } else if(tipo === "send") {
            emergente__h3.textContent = `Enviado`;
        }
        emergente__header.appendChild(emergente__h3);
    
        const iconoDos = document.createElement('p');
        if(tipo === "error") {
            iconoDos.classList.add("material-symbols-outlined", "icono--error");
            iconoDos.textContent = "error";
        } else if(tipo === "done") {
            iconoDos.classList.add("material-symbols-outlined", "icono--done");
            iconoDos.textContent = "done";
        } else if(tipo === "check_circle") {
            iconoDos.classList.add("material-symbols-outlined", "icono--done");
            iconoDos.textContent = "check_circle";
        } else if(tipo === "database") {
            iconoDos.classList.add("material-symbols-outlined", "icono--error");
            iconoDos.textContent = "database";
        } else if(tipo === "send") {
            iconoDos.classList.add("material-symbols-outlined", "icono--done");
            iconoDos.textContent = "send";
        }
        emergente__header.appendChild(iconoDos);
    
        const emergente__info = document.createElement('DIV');
        emergente__info.classList.add('emergente__info');
        emergente__grid.appendChild(emergente__info);
    
        const emergente__texto = document.createElement('p');
        emergente__texto.classList.add('emergente__texto');
        emergente__texto.innerHTML = `${texto}`;
        emergente__info.appendChild(emergente__texto);
    
        setTimeout(() => {
            emergente.classList.remove('scale0');
            emergente.classList.add('scale1');
            disabled(btnEnviar, tiempo);
            setTimeout(() => {
                emergente.classList.remove('scale1');
                emergente.classList.add('scale0');
                setTimeout(() => {
                    emergente.remove();
                }, 200);
            }, tiempo);
        }, 200);
}

export function disabled(elemento, tiempo) {
    elemento.setAttribute('disabled', '');
    setTimeout(() => {
        elemento.removeAttribute('disabled');
    }, tiempo);
}