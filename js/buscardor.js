/* */
const tipo = document.querySelector('#tipo');
const pagina = document.querySelector('#pagina');
const idioma = document.querySelector('#idioma');

const proyectos = document.querySelector('#proyectos');

const datosBusqueda = {
    tipo: '',
    pagina: '',
    idioma: ''
}
/* */

document.addEventListener('DOMContentLoaded', () => {
    mostrarProyectos(pry);
});

/* */

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

/* */

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
    
    if(proyectos.length) {
        mostrarProyectos(proyectos);
        return;
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