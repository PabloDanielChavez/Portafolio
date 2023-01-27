function crearDB() {
    const crearDB = window.indexedDB.open('datos', 1);

    crearDB.onerror = () => {
        console.log('Hubo un error');
    };

    crearDB.onsuccess = function() {
        DB = crearDB.result;
    };

    crearDB.onupgradeneeded = function(e) {
        // el evento que se va a correr tomamos la base de datos
        const db = e.target.result;

        // definir el objectstore, primer parametro el nombre de la BD, segundo las opciones
        // keypath es de donde se van a obtener los indices
        const objectStore = db.createObjectStore('datos', { keyPath: 'id',  autoIncrement: true } );

        //createindex, nombre y keypath, 3ro los parametros
        objectStore.createIndex('nombre', 'nombre', { unique: false } );
        objectStore.createIndex('email', 'email', { unique: false } );
        objectStore.createIndex('mensaje', 'mensaje', { unique: false } );
        objectStore.createIndex('id', 'id', { unique: true } );
        console.log('Database creada y lista');
    };
}

function imprimirAlerta(mensaje, tipo) {
    // Crea el div

    const divMensaje = document.createElement('div');
    divMensaje.classList.add('contacto__alerta');

    if(tipo === 'error') {
        divMensaje.classList.add('contacto__alerta-error');
    }
    
    // Mensaje de error
    divMensaje.textContent = mensaje;

    // Insertar en el DOM
    formulario.appendChild(divMensaje);

    // Quitar el alert despues de 3 segundos
    setTimeout( () => {
        divMensaje.remove();
    }, 3000);
}

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
        sincronizarStorage();
        imprimirAlerta('El mensaje ha sido enviado.');
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

function sincronizarStorage() {
    localStorage.setItem('Nombre', JSON.stringify(inputNombre.value));
    localStorage.setItem('Email', JSON.stringify(inputEmail.value));
    localStorage.setItem('Mensaje', JSON.stringify(inputMensaje.value));
}

function conectarDB() {
    // ABRIR CONEXIÓN EN LA BD:

    let abrirConexion = window.indexedDB.open('datos', 1);

    // si hay un error, lanzarlo
    abrirConexion.onerror = function() {
        console.log('Hubo un error');
    };

    // si todo esta bien, asignar a database el resultado
    abrirConexion.onsuccess = function() {
        // guardamos el resultado
        DB = abrirConexion.result;
    };
}

function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const mensaje = document.querySelector('#mensaje').value;

    if(nombre === '' || email === '' || mensaje === '') {
        
        imprimirAlerta('Todos los campos son obligatorios');
        return;
    }

    // añadir a la BD...
    // crear un nuevo objeto con toda la info

    const cliente = {
        nombre, 
        email,
        mensaje
    };

    // Generar un ID único
    cliente.id = Date.now();

    console.log(cliente)

    

        crearNuevoMensaje(cliente);
}

function crearNuevoMensaje(cliente) {

    // NUEVO: 
    const transaction = DB.transaction(['datos'], 'readwrite');
    const objectStore = transaction.objectStore('datos');
    // console.log(objectStore);
    objectStore.add(cliente);

    transaction.onerror = () => {
        console.log('Hubo un error!');
        imprimirAlerta('Hubo un Error', 'error');
    };

    transaction.oncomplete = () => {
        console.log('Mensaje Agregado');
    };
}

// // Secciones
// const headerDiv = document.querySelector('.header');

// function cargarHeader() {
//     const headerGrid = document.createElement('DIV');
//     headerGrid.classList.add('header__grid');
    
//     const headerLogo = document.createElement('DIV');
//     headerLogo.classList.add('header__logo');

//     const headerTituloPri = document.createElement('H1');
//     headerTituloPri.classList.add('header__titulo-pri');
//     headerTituloPri.textContent = 'Portafolio';

//     const headerSpanTit = document.createElement('SPAN');
//     headerSpanTit.classList.add('header__span-tit');
//     headerSpanTit.textContent = 'PC';

//     const headerSpanMin = document.createElement('SPAN');
//     headerSpanMin.classList.add('header__span-min');
//     headerSpanMin.textContent = 'Pablo Daniel Chavez';


//     const headerNavegacion = document.createElement('DIV');
//     headerNavegacion.classList.add('header__navegacion');

//     const headerNav = document.createElement('NAV');
//     headerNav.classList.add('header__nav');

//     const headerLinkInicio = document.createElement('A');
//     headerLinkInicio.setAttribute('href', 'index.html');
//     headerLinkInicio.classList.add('header__link');
//     headerLinkInicio.textContent = 'Inicio';

//     const headerLinkServicios = document.createElement('A');
//     headerLinkServicios.setAttribute('href', 'servicios.html');
//     headerLinkServicios.classList.add('header__link');
//     headerLinkServicios.textContent = 'Servicios';

//     const headerLinkContactame = document.createElement('A');
//     headerLinkContactame.setAttribute('href', '#');
//     headerLinkContactame.classList.add('header__link');
//     headerLinkContactame.textContent = 'Contáctame';

//     // Titulo
//     headerTituloPri.appendChild(headerSpanTit);
//     headerTituloPri.appendChild(headerSpanMin);
//     headerLogo.appendChild(headerTituloPri);
//     headerGrid.appendChild(headerLogo);

//     // Navegador
//     headerNav.appendChild(headerLinkInicio);
//     headerNav.appendChild(headerLinkServicios);
//     headerNav.appendChild(headerLinkContactame);
//     headerNavegacion.appendChild(headerNav);
//     headerGrid.appendChild(headerNavegacion);

//     // General
//     headerDiv.appendChild(headerGrid);
// }