// Variables
// Seleccionar los elementos de la interfaz
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#formulario');
const btnSubmit = document.querySelector('#formulario button[type="submit"]');
const spinner = document.querySelector('#spinner');


const alertaMensaje = document.querySelector('#alerta-mensaje');

// ************
const tipo = document.querySelector('#tipo');
const pagina = document.querySelector('#pagina');
const idioma = document.querySelector('#idioma');

const email = {
    nombre: '',
    email: '',
    mensaje: ''
}

const datosBusqueda = {
    tipo: '',
    pagina: '',
    idioma: ''
}