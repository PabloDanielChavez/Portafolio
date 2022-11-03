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

const proyectos = document.querySelector('#proyectos');

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

    mostrarProyectos(pry);

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

    // Asignar eventos
    inputNombre.addEventListener('input', validar);
    inputEmail.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarEmail);

    inputNombre.value = JSON.parse(localStorage.getItem('Nombre')) || '';
    inputEmail.value = JSON.parse(localStorage.getItem('Email')) || '';
    inputMensaje.value = JSON.parse(localStorage.getItem('inputMensaje')) || '';
    /*                     */
    tipo.addEventListener('change', e => {
        datosBusqueda.tipo = e.target.value;
        filtrarProyectos();
    })
    pagina.addEventListener('change', e => {
        datosBusqueda.pagina = e.target.value;
        filtrarProyectos();
    })
    idioma.addEventListener('change', e => {
        datosBusqueda.idioma = e.target.value;
        filtrarProyectos();
    })


    
    function validar(e) {
        if(e.target.value.trim() === '') {
            email[e.target.name] = '';
            error(e.target.parentElement);
            comprobarEmail();
            sincronizarStorage();
            return;
        }
        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            email[e.target.name] = '';
            error(e.target.parentElement);
            comprobarEmail();
            sincronizarStorage();
            return;
        }
        valido(e.target.parentElement);

        email[e.target.name] = e.target.value.trim().toLowerCase();

        sincronizarStorage();

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
                sincronizarStorage();
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
    function mostrarProyectos(pry) {
        limpiarHTML();
        pry.forEach( proyecto => {
            const { link, im } = proyecto;
            const proyectoHTML = document.createElement('a');
            proyectoHTML.setAttribute( "href" , link );
            proyectoHTML.innerHTML=`${im}`;

            proyectos.appendChild(proyectoHTML);
        })
    }

    function limpiarHTML() {
        while(proyectos.firstChild) {
            proyectos.removeChild(proyectos.firstChild);
        }
    }

    function filtrarProyectos() {
        const proyectos = pry.filter(filtrarTipo).filter(filtrarPagina).filter(filtrarIdioma);
        
        if(proyectos) {
            mostrarProyectos(proyectos);
        }
    }

    function filtrarTipo(proyecto) {
        const { tipo } = datosBusqueda;
        if(tipo) {
            return proyecto.tipo === tipo;
        }
        return proyecto;
    }

    function filtrarPagina(proyecto) {
        const { pagina } = datosBusqueda;
        if(pagina) {
            return proyecto.pagina === pagina;
        }
        return proyecto;
    }

    function filtrarIdioma(proyecto) {
        const { idioma } = datosBusqueda;
        if(idioma) {
            return proyecto.idioma === idioma;
        }
        return proyecto;
    }
    
// Sincronizar con Storage


    function sincronizarStorage() {
        localStorage.setItem('Nombre', JSON.stringify(inputNombre.value));
        localStorage.setItem('Email', JSON.stringify(inputEmail.value));
        localStorage.setItem('Mensaje', JSON.stringify(inputMensaje.value));
    }
    
});
