window.swiper = new Swiper({
    el: '.loop__contenedor',
    slideClass: 'loop__slide',
    createElements: true,
    autoplay: {
        delay: 5000
    },
    loop: true,
    pagination: true,
    navigation: true,
});

document.addEventListener('DOMContentLoaded', function() {

/*****************************/
    const email = {
        nombre: '',
        email: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz
    const inputNombre = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const spinner = document.querySelector('#spinner');
    const alertaMensaje = document.querySelector('#alerta-mensaje');

    // Asignar eventos
    inputNombre.addEventListener('input', validar);
    inputEmail.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    function validar(e) {
        if(e.target.value.trim() === '') {
            email[e.target.name] = '';
            error(e.target.parentElement);
            comprobarEmail();
            return;
        }
        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            email[e.target.name] = '';
            error(e.target.parentElement);
            comprobarEmail();
            return;
        }
        valido(e.target.parentElement);

        email[e.target.name] = e.target.value.trim().toLowerCase();

        comprobarEmail();
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('contacto__boton-des');
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.classList.remove('contacto__boton-des');
        btnSubmit.classList.add('contacto__boton');
        btnSubmit.disabled = false;
    }

    function enviarEmail(e) {
        e.preventDefault();
        spinner.classList.remove('non');

        setTimeout(() => {
            spinner.classList.add('non');
            resetFormulario();
            alertaMensaje.classList.remove('non');
            setTimeout(() => {
                alertaMensaje.classList.add('non');
            }, 3000);
        }, 3000);
    }

    function error(e) {
        e.classList.add('contacto__error');
        return;
    }
    function valido(e) {
        e.classList.remove('contacto__error');
        return;
    }

    function resetFormulario() {
        // reiniciar el objeto
        email.email = '';
        email.nombre = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }
/*****************************/
});