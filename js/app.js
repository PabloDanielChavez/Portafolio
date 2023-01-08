let DB;

document.addEventListener('DOMContentLoaded', () => {
    crearDB();
    conectarDB();
    mostrarProyectos(pry);

    // Asignar eventos
    inputNombre.addEventListener('input', validar);
    inputEmail.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarEmail);
    formulario.addEventListener('submit', validarCliente);

    inputNombre.value = JSON.parse(localStorage.getItem('Nombre')) || '';
    inputEmail.value = JSON.parse(localStorage.getItem('Email')) || '';
    inputMensaje.value = JSON.parse(localStorage.getItem('Mensaje')) || '';

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
})

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