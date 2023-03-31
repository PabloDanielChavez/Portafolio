const bienvenida__navegacion = document.querySelector('.bienvenida__navegacion');
const sobremi__datosBox = document.querySelector('.sobremi__datos-box');
const sobremi__interesGrid = document.querySelector('.sobremi__interes-grid');
const habilidades__tecnicas = document.querySelector('.habilidades__tecnicas');
const habilidades__profesionales = document.querySelector('.habilidades__profesionales');
const destacados__grid = document.querySelector('.destacados__grid');
const servicios__planes = document.querySelector('.servicios__planes');
const footer__redes = document.querySelector('.footer__redes');
const informacionPortafolio__grid = document.querySelector('.informacion-portafolio__grid');

const referenciaFooter = document.querySelector('#referenciaFooter');

const bienvenida__principalbox = document.querySelector('.bienvenida__principal-box');
const bienvenida__borderprincipal = document.querySelector('.bienvenida__border-principal');
const bienvenida__fotoperfilborde = document.querySelector('.bienvenida__fotoperfil-borde');
const bienvenida__fotoperfilprincipal = document.querySelector('.bienvenida__fotoperfil-principal');
const bienvenida__titulobienvenida = document.querySelector('.bienvenida__titulo-bienvenida');
const bienvenida__nombreh2 = document.querySelector('.bienvenida__nombre-h2');
const bienvenida__ocupacion = document.querySelector('.bienvenida__ocupacion');
const bienvenida__formulario = document.querySelector('.bienvenida__formulario');
// const bienvenida__navegacion = document.querySelector('.bienvenida__navegacion');
const bienvenida__contacto = document.querySelector('#btnContacto');
const bienvenida__inputForm = document.querySelector('.bienvenida__inputForm');
const bienvenida__textareaForm = document.querySelector('.bienvenida__textareaForm');

export function mostrarBienvenidaNavegacion(href, nombreImagen, alt) {

    const bienvenida__linkBienvenida = document.createElement('A');
    bienvenida__linkBienvenida.classList.add('bienvenida__link-bienvenida');
    bienvenida__linkBienvenida.setAttribute('href', `${href}`);
    bienvenida__navegacion.appendChild(bienvenida__linkBienvenida);

    const picture = document.createElement('PICTURE');
    bienvenida__linkBienvenida.appendChild(picture);

    const sourceAvif = document.createElement('SOURCE');
    sourceAvif.setAttribute("srcset", `build/img/iconos/${nombreImagen}.avif`);
    sourceAvif.setAttribute("type", "image/avif");
    picture.appendChild(sourceAvif);

    const sourceWebp = document.createElement('SOURCE');
    sourceWebp.setAttribute("srcset", `build/img/iconos/${nombreImagen}.webp`);
    sourceWebp.setAttribute("type", "image/webp");
    picture.appendChild(sourceWebp);

    const sourceJpg = document.createElement('SOURCE');
    sourceJpg.setAttribute("srcset", `build/img/iconos/${nombreImagen}.jpg`);
    sourceJpg.setAttribute("type", "image/jpg"); 
    picture.appendChild(sourceJpg);

    const bienvenida__redsocialImg = document.createElement('IMG');
    bienvenida__redsocialImg.classList.add('bienvenida__redsocial-img');
    bienvenida__redsocialImg.setAttribute("loading", "lazy");
    bienvenida__redsocialImg.setAttribute("decoding", "async");
    bienvenida__redsocialImg.setAttribute("src", `build/img/iconos/${nombreImagen}.jpg`);
    bienvenida__redsocialImg.setAttribute("lazyalt", "imagen");
    bienvenida__redsocialImg.setAttribute("alt", `${alt}`);
    bienvenida__redsocialImg.setAttribute("width", "auto");
    bienvenida__redsocialImg.setAttribute("height", "auto");
    picture.appendChild(bienvenida__redsocialImg);    
};

export function mostrarBienvenidaNavegacionError() {
    bienvenida__navegacion.innerHTML = `
        <a class="bienvenida__link-bienvenida" href="https://www.instagram.com/pablo.chavez20/"><picture><source srcset="build/img/iconos/icono-instagram-white.avif" type="image/avif"><source srcset="build/img/iconos/icono-instagram-white.webp" type="image/webp"><source srcset="build/img/iconos/icono-instagram-white.jpg" type="image/jpg"><img class="bienvenida__redsocial-img" loading="lazy" decoding="async" src="build/img/iconos/icono-instagram-white.jpg" lazyalt="imagen" alt="icono instagram white" width="auto" height="auto"></picture></a>
        <a class="bienvenida__link-bienvenida" href="https://wa.me/5491166621017"><picture><source srcset="build/img/iconos/icono-whatsapp-white.avif" type="image/avif"><source srcset="build/img/iconos/icono-whatsapp-white.webp" type="image/webp"><source srcset="build/img/iconos/icono-whatsapp-white.jpg" type="image/jpg"><img class="bienvenida__redsocial-img" loading="lazy" decoding="async" src="build/img/iconos/icono-whatsapp-white.jpg" lazyalt="imagen" alt="icono whatsapp white" width="auto" height="auto"></picture></a>
        <a class="bienvenida__link-bienvenida" href="https://www.youtube.com/channel/UCDKL4JLgdmVmmBAJPRGx0Eg/featured"><picture><source srcset="build/img/iconos/icono-youtube-white.avif" type="image/avif"><source srcset="build/img/iconos/icono-youtube-white.webp" type="image/webp"><source srcset="build/img/iconos/icono-youtube-white.jpg" type="image/jpg"><img class="bienvenida__redsocial-img" loading="lazy" decoding="async" src="build/img/iconos/icono-youtube-white.jpg" lazyalt="imagen" alt="icono youtube white" width="auto" height="auto"></picture></a>
    `;
    console.log('Hubo un error al conectarse a la base de datos "BienvenidaNavegacion", se imprimio codigo de respaldo');
};

export function mostrarDatosPersonales(nombre, dato, href) {
    
    const sobremi__dato = document.createElement('DIV');
    sobremi__dato.classList.add('sobremi__dato');
    sobremi__datosBox.appendChild(sobremi__dato);

    const sobremi__opcionDato = document.createElement('P');
    sobremi__opcionDato.classList.add('sobremi__opcion-dato');
    sobremi__opcionDato.textContent = nombre;
    sobremi__dato.appendChild(sobremi__opcionDato);

    const sobremi__detalle = document.createElement('A');
    sobremi__detalle.classList.add('sobremi__detalle');
    sobremi__detalle.setAttribute("href", dato);
    sobremi__detalle.textContent = href;
    sobremi__dato.appendChild(sobremi__detalle);

};

export function mostrarDatosPersonalesError() {
    sobremi__datosBox.innerHTML = `
        <div class="sobremi__dato"><p class="sobremi__opcion-dato">Fecha de nacimiento</p><a class="sobremi__detalle" href="#">05/12/1999</a></div>
        <div class="sobremi__dato"><p class="sobremi__opcion-dato">Telefono</p><a class="sobremi__detalle" href="tel:+54-911-6662-1017">+54-911-6662-1017</a></div>
        <div class="sobremi__dato"><p class="sobremi__opcion-dato">Correo</p><a class="sobremi__detalle" href="#">pablo_daniel_chavez@outlook.es</a></div>
        <div class="sobremi__dato"><p class="sobremi__opcion-dato">Sitio web</p><a class="sobremi__detalle" href="https://portafolio-pdc.netlify.app/">www.portafolio-pdc.netlify.app</a></div>
        <div class="sobremi__dato"><p class="sobremi__opcion-dato">Vivo en</p><a class="sobremi__detalle" href="https://goo.gl/maps/XxEwcjQFFGf6Gzme7">Buenos Aires - Argentina</a></div>
        <div class="sobremi__dato"><p class="sobremi__opcion-dato">Estado del trabajo</p><a class="sobremi__detalle" href="#">Freelance</a></div>
    `;
    console.log('Hubo un error al conectarse a la base de datos "DatosPersonales", se imprimio codigo de respaldo');
};

export function mostrarInteres(icono, nombre) {

    const sobremi__interesBox = document.createElement('DIV');
    sobremi__interesBox.classList.add('sobremi__interes-box');

    const materialSymbolsOutlined = document.createElement('SPAN');
    materialSymbolsOutlined.classList.add('material-symbols-outlined', 'sobremi__interes-icons');
    materialSymbolsOutlined.innerText = icono;
    sobremi__interesBox.appendChild(materialSymbolsOutlined);

    const sobremi__interesIconsNombre = document.createElement('SPAN');
    sobremi__interesIconsNombre.classList.add('sobremi__interes-icons-nombre');
    sobremi__interesIconsNombre.innerText = nombre;
    sobremi__interesBox.appendChild(sobremi__interesIconsNombre);

    sobremi__interesGrid.appendChild(sobremi__interesBox);
};

export function mostrarInteresError() {
    sobremi__interesGrid.innerHTML = `
        <div class="sobremi__interes-box"><span class="material-symbols-outlined sobremi__interes-icons">stadia_controller</span><span class="sobremi__interes-icons-nombre">Juegos</span></div>
        <div class="sobremi__interes-box"><span class="material-symbols-outlined sobremi__interes-icons">headphones</span><span class="sobremi__interes-icons-nombre">Musica</span></div>
        <div class="sobremi__interes-box"><span class="material-symbols-outlined sobremi__interes-icons">movie</span><span class="sobremi__interes-icons-nombre">Peliculas</span></div>
        <div class="sobremi__interes-box"><span class="material-symbols-outlined sobremi__interes-icons">smartphone</span><span class="sobremi__interes-icons-nombre">Celulares</span></div>
        <div class="sobremi__interes-box"><span class="material-symbols-outlined sobremi__interes-icons">menu_book</span><span class="sobremi__interes-icons-nombre">Leer</span></div>
        <div class="sobremi__interes-box"><span class="material-symbols-outlined sobremi__interes-icons">coffee</span><span class="sobremi__interes-icons-nombre">Café</span></div>
        <div class="sobremi__interes-box"><span class="material-symbols-outlined sobremi__interes-icons">travel_explore</span><span class="sobremi__interes-icons-nombre">Viajar</span></div>
        <div class="sobremi__interes-box"><span class="material-symbols-outlined sobremi__interes-icons">house</span><span class="sobremi__interes-icons-nombre">Hogar</span></div>
        <div class="sobremi__interes-box"><span class="material-symbols-outlined sobremi__interes-icons">groups</span><span class="sobremi__interes-icons-nombre">Amigos</span></div>
    `;
    console.log('Hubo un error al conectarse a la base de datos "Interes", se imprimio codigo de respaldo');
};

export function mostrarTecnicas(nombre, porcentaje) {

    const habilidades__tecnicasPanel = document.createElement('DIV');
    habilidades__tecnicasPanel.classList.add('habilidades__tecnicas');
    habilidades__tecnicas.appendChild(habilidades__tecnicasPanel);

    const habilidades__nombre = document.createElement('P');
    habilidades__nombre.classList.add('habilidades__nombre');
    habilidades__nombre.innerText = nombre;
    habilidades__tecnicasPanel.appendChild(habilidades__nombre);

    const barra = document.createElement('DIV');
    barra.classList.add('barra');
    habilidades__tecnicasPanel.appendChild(barra);

    const barra__porcentaje = document.createElement('P');
    barra__porcentaje.classList.add('barra__porcentaje');
    barra__porcentaje.textContent = porcentaje + '%';
    barra.appendChild(barra__porcentaje);

    const barra__bar = document.createElement('SPAN');
    barra__bar.classList.add('barra__bar', `barra__bar--${porcentaje}`);
    barra.appendChild(barra__bar);
};

export function mostrarTecnicaError() {
    habilidades__tecnicas.innerHTML = `
        <h3 class="habilidades__titulo-h3">Técnicas</h3>
        <div class="habilidades__tecnicas"><p class="habilidades__nombre">HTML</p><div class="barra"><p class="barra__porcentaje">10%</p><span class="barra__bar barra__bar--10"></span></div></div>
        <div class="habilidades__tecnicas"><p class="habilidades__nombre">CSS</p><div class="barra"><p class="barra__porcentaje">10%</p><span class="barra__bar barra__bar--10"></span></div></div>
        <div class="habilidades__tecnicas"><p class="habilidades__nombre">JavaScript</p><div class="barra"><p class="barra__porcentaje">5%</p><span class="barra__bar barra__bar--5"></span></div></div>
        <div class="habilidades__tecnicas"><p class="habilidades__nombre">PHP</p><div class="barra"><p class="barra__porcentaje">0%</p><span class="barra__bar barra__bar--0"></span></div></div>
    `;
    console.log('Hubo un error al conectarse a la base de datos "Tecnica", se imprimio codigo de respaldo');
};

export function mostrarProfesionales(nombre, porcentaje) {

    const habilidades__profesionalesPanel = document.createElement('DIV');
    habilidades__profesionalesPanel.classList.add('habilidades__profesionales');
    habilidades__profesionales.appendChild(habilidades__profesionalesPanel);

    const habilidades__nombre = document.createElement('P');
    habilidades__nombre.classList.add('habilidades__nombre');
    habilidades__nombre.innerText = nombre;
    habilidades__profesionalesPanel.appendChild(habilidades__nombre);

    const barra = document.createElement('DIV');
    barra.classList.add('barra');
    habilidades__profesionalesPanel.appendChild(barra);

    const barra__porcentaje = document.createElement('P');
    barra__porcentaje.classList.add('barra__porcentaje');
    barra__porcentaje.textContent = porcentaje + '%';
    barra.appendChild(barra__porcentaje);

    const barra__bar = document.createElement('SPAN');
    barra__bar.classList.add('barra__bar', `barra__bar--${porcentaje}`);
    barra.appendChild(barra__bar);
};

export function mostrarProfesionalesError() {
    habilidades__profesionales.innerHTML = `
        <h3 class="habilidades__titulo-h3">Profesionales</h3>
        <div class="habilidades__profesionales"><p class="habilidades__nombre">Comunicación</p><div class="barra"><p class="barra__porcentaje">0%</p><span class="barra__bar barra__bar--0"></span></div></div>
        <div class="habilidades__profesionales"><p class="habilidades__nombre">Trabajo en equipo</p><div class="barra"><p class="barra__porcentaje">0%</p><span class="barra__bar barra__bar--0"></span></div></div>
        <div class="habilidades__profesionales"><p class="habilidades__nombre">Creatividad</p><div class="barra"><p class="barra__porcentaje">5%</p><span class="barra__bar barra__bar--5"></span></div></div>
        <div class="habilidades__profesionales"><p class="habilidades__nombre">Dedicación</p><div class="barra"><p class="barra__porcentaje">10%</p><span class="barra__bar barra__bar--10"></span></div></div>
    `;
    console.log('Hubo un error al conectarse a la base de datos "Profesionales", se imprimio codigo de respaldo');
};

export function mostrarDestacados(href, nombreImagen, alt, nombrePagina, infoPagina, id) {
    
    const destacados__box = document.createElement('A');
    destacados__box.classList.add('destacados__box');
    destacados__box.setAttribute('href', `${href}`);
    destacados__grid.appendChild(destacados__box);

    const picture = document.createElement('PICTURE');
    destacados__box.appendChild(picture);

    const sourceAvif = document.createElement('SOURCE');
    sourceAvif.setAttribute("srcset", `build/img/${nombreImagen}.avif`);
    sourceAvif.setAttribute("type", "image/avif");
    picture.appendChild(sourceAvif);

    const sourceWebp = document.createElement('SOURCE');
    sourceWebp.setAttribute("srcset", `build/img/${nombreImagen}.webp`);
    sourceWebp.setAttribute("type", "image/webp");
    picture.appendChild(sourceWebp);

    const sourceJpg = document.createElement('SOURCE');
    sourceJpg.setAttribute("srcset", `build/img/${nombreImagen}.jpg`);
    sourceJpg.setAttribute("type", "image/jpg"); 
    picture.appendChild(sourceJpg);

    const destacados__imagen = document.createElement('IMG');
    destacados__imagen.classList.add('destacados__imagen');
    destacados__imagen.setAttribute("loading", "lazy");
    destacados__imagen.setAttribute("decoding", "async");
    destacados__imagen.setAttribute("src", `build/img/${nombreImagen}.jpg`);
    destacados__imagen.setAttribute("lazyalt", "imagen");
    destacados__imagen.setAttribute("alt", `${alt}`);
    destacados__imagen.setAttribute("width", "auto");
    destacados__imagen.setAttribute("height", "auto");
    picture.appendChild(destacados__imagen);

    const destacados__h3 = document.createElement('H3');
    destacados__h3.classList.add('destacados__h3');
    destacados__h3.textContent = nombrePagina;
    destacados__box.appendChild(destacados__h3);

    const destacadosPaginaTexto = document.createElement('P');
    destacadosPaginaTexto.classList.add('destacados__texto');
    destacadosPaginaTexto.textContent = infoPagina;
    destacados__box.appendChild(destacadosPaginaTexto);
};

export function mostrarDestacadosError() {
    destacados__grid.innerHTML = `
        <a class="destacados__box" href="#"><picture><source srcset="build/img/fondo-gales.avif" type="image/avif"><source srcset="build/img/fondo-gales.webp" type="image/webp"><source srcset="build/img/fondo-gales.jpg" type="image/jpg"><img class="destacados__imagen" loading="lazy" decoding="async" src="build/img/fondo-gales.jpg" lazyalt="imagen" alt="Fondo gales" width="auto" height="auto"></picture><h3 class="destacados__h3">Pagina Ejemplo</h3><p class="destacados__texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio commodi accusamus tempora rem dignissimos ut iste qui illum! Itaque maxime tempore tempora suscipit veniam voluptas, sed assumenda quae corrupti aliquid.</p></a>
        <a class="destacados__box" href="#"><picture><source srcset="build/img/fondo-gales.avif" type="image/avif"><source srcset="build/img/fondo-gales.webp" type="image/webp"><source srcset="build/img/fondo-gales.jpg" type="image/jpg"><img class="destacados__imagen" loading="lazy" decoding="async" src="build/img/fondo-gales.jpg" lazyalt="imagen" alt="Fondo gales" width="auto" height="auto"></picture><h3 class="destacados__h3">Pagina Ejemplo</h3><p class="destacados__texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio commodi accusamus tempora rem dignissimos ut iste qui illum! Itaque maxime tempore tempora suscipit veniam voluptas, sed assumenda quae corrupti aliquid.</p></a>
    `;
    console.log('Hubo un error al conectarse a la base de datos "Destacados", se imprimio codigo de respaldo');
};

export function mostrarPlan(nombre, info, paginas, revisiones, precio, descuento) {

    const servicios__planesBox = document.createElement('DIV');
    servicios__planesBox.classList.add('servicios__planes-box');

    const servicios__h3Servicios = document.createElement('H3');
    servicios__h3Servicios.classList.add('servicios__h3-servicios');
    servicios__h3Servicios.textContent = nombre;
    servicios__planesBox.appendChild(servicios__h3Servicios);

    const servicios__detalles = document.createElement('P');
    servicios__detalles.classList.add('servicios__detalles');
    servicios__detalles.textContent = info;
    servicios__planesBox.appendChild(servicios__detalles);

    const servicios__contenidoPagina = document.createElement('DIV');
    servicios__contenidoPagina.classList.add('servicios__contenido');
    servicios__planesBox.appendChild(servicios__contenidoPagina);

    const servicios__opcionPaginas = document.createElement('SPAN');
    servicios__opcionPaginas.classList.add('servicios__opcion');
    servicios__opcionPaginas.textContent = 'Paginas';
    servicios__contenidoPagina.appendChild(servicios__opcionPaginas);

    const servicios__cantidadPaginas = document.createElement('SPAN');
    servicios__cantidadPaginas.classList.add('servicios__cantidad');
    servicios__cantidadPaginas.textContent = paginas;
    servicios__contenidoPagina.appendChild(servicios__cantidadPaginas);

    const servicios__contenidoServicios = document.createElement('DIV');
    servicios__contenidoServicios.classList.add('servicios__contenido');
    servicios__planesBox.appendChild(servicios__contenidoServicios);

    const servicios__opcionServicios = document.createElement('SPAN');
    servicios__opcionServicios.classList.add('servicios__opcion');
    servicios__opcionServicios.textContent = 'Revisiones';
    servicios__contenidoServicios.appendChild(servicios__opcionServicios);

    const servicios__cantidadServicios = document.createElement('SPAN');
    servicios__cantidadServicios.classList.add('servicios__cantidad');
    servicios__cantidadServicios.textContent = revisiones;
    servicios__contenidoServicios.appendChild(servicios__cantidadServicios);

    const servicios__divisor = document.createElement('SPAN');
    servicios__divisor.classList.add('servicios__divisor');
    servicios__planesBox.appendChild(servicios__divisor);

    const servicios__pre = document.createElement('DIV');
    servicios__pre.classList.add('servicios__pre');
    servicios__planesBox.appendChild(servicios__pre);

    const servicios__precio = document.createElement('P');
    servicios__precio.classList.add('servicios__precio');
    servicios__precio.innerHTML += `<span class="servicios__dolar">$</span>${precio}`;
    servicios__pre.appendChild(servicios__precio);

    const servicios__descuento = document.createElement('SPAN');
    servicios__descuento.classList.add('servicios__descuento');
    servicios__descuento.innerHTML += `${descuento}% de descuento`;
    servicios__pre.appendChild(servicios__descuento);

    servicios__planes.appendChild(servicios__planesBox);
};

export function mostrarPlanError() {
    servicios__planes.innerHTML = `
    <div class="servicios__planes-box"><h3 class="servicios__h3-servicios">Basico</h3><p class="servicios__detalles">Con este plan podras tener una web con 1 pagina</p><div class="servicios__contenido"><span class="servicios__opcion">Paginas</span><span class="servicios__cantidad">1</span></div><div class="servicios__contenido"><span class="servicios__opcion">Revisiones</span><span class="servicios__cantidad">2</span></div><span class="servicios__divisor"></span><div class="servicios__pre"><p class="servicios__precio"><span class="servicios__dolar">$</span>450</p><span class="servicios__descuento">0% de descuento</span></div></div>
    <div class="servicios__planes-box"><h3 class="servicios__h3-servicios">Estandar</h3><p class="servicios__detalles">Con este plan podras tener una web con hasta 3 paginas</p><div class="servicios__contenido"><span class="servicios__opcion">Paginas</span><span class="servicios__cantidad">3</span></div><div class="servicios__contenido"><span class="servicios__opcion">Revisiones</span><span class="servicios__cantidad">3</span></div><span class="servicios__divisor"></span><div class="servicios__pre"><p class="servicios__precio"><span class="servicios__dolar">$</span>1080</p><span class="servicios__descuento">20% de descuento</span></div></div>
    <div class="servicios__planes-box"><h3 class="servicios__h3-servicios">Premium</h3><p class="servicios__detalles">Este plan te permite tener hasta una web con hasta 5 paginas</p><div class="servicios__contenido"><span class="servicios__opcion">Paginas</span><span class="servicios__cantidad">5</span></div><div class="servicios__contenido"><span class="servicios__opcion">Revisiones</span><span class="servicios__cantidad">5</span></div><span class="servicios__divisor"></span><div class="servicios__pre"><p class="servicios__precio"><span class="servicios__dolar">$</span>1700</p><span class="servicios__descuento">25% de descuento</span></div></div>
    `;
    console.log('Hubo un error al conectarse a la base de datos "Plan", se imprimio codigo de respaldo');
};

export function mostrarFooter(href, nombreImagen, alt) {

    const footer__redsocialBox = document.createElement('A');
    footer__redsocialBox.classList.add('footer__redsocialBox');
    footer__redsocialBox.setAttribute('href', `${href}`);
    footer__redes.insertBefore(footer__redsocialBox, referenciaFooter);

    const picture = document.createElement('PICTURE');
    footer__redsocialBox.appendChild(picture);

    const sourceAvif = document.createElement('SOURCE');
    sourceAvif.setAttribute("srcset", `build/img/iconos/${nombreImagen}.avif`);
    sourceAvif.setAttribute("type", "image/avif");
    picture.appendChild(sourceAvif);

    const sourceWebp = document.createElement('SOURCE');
    sourceWebp.setAttribute("srcset", `build/img/iconos/${nombreImagen}.webp`);
    sourceWebp.setAttribute("type", "image/webp");
    picture.appendChild(sourceWebp);

    const sourceJpg = document.createElement('SOURCE');
    sourceJpg.setAttribute("srcset", `build/img/iconos/${nombreImagen}.jpg`);
    sourceJpg.setAttribute("type", "image/jpg"); 
    picture.appendChild(sourceJpg);

    const footer__redsocialImg = document.createElement('IMG');
    footer__redsocialImg.classList.add('footer__redsocial-img');
    footer__redsocialImg.setAttribute("loading", "lazy");
    footer__redsocialImg.setAttribute("decoding", "async");
    footer__redsocialImg.setAttribute("src", `build/img/iconos/${nombreImagen}.jpg`);
    footer__redsocialImg.setAttribute("lazyalt", "imagen");
    footer__redsocialImg.setAttribute("alt", `${alt}`);
    footer__redsocialImg.setAttribute("width", "auto");
    footer__redsocialImg.setAttribute("height", "auto");
    picture.appendChild(footer__redsocialImg);    
};

export function mostrarFooterError() {
    footer__redes.innerHTML = `
    <span class="footer__linea-horizontal"></span>
    <a class="footer__redsocialBox" href="https://www.instagram.com/pablo.chavez20/"><picture><source srcset="build/img/iconos/icono-instagram-white.avif" type="image/avif"><source srcset="build/img/iconos/icono-instagram-white.webp" type="image/webp"><source srcset="build/img/iconos/icono-instagram-white.jpg" type="image/jpg"><img class="footer__redsocial-img" loading="lazy" decoding="async" src="build/img/iconos/icono-instagram-white.jpg" lazyalt="imagen" alt="icono instagram white" width="auto" height="auto"></picture></a><a class="footer__redsocialBox" href="https://wa.me/5491166621017"><picture><source srcset="build/img/iconos/icono-whatsapp-white.avif" type="image/avif"><source srcset="build/img/iconos/icono-whatsapp-white.webp" type="image/webp"><source srcset="build/img/iconos/icono-whatsapp-white.jpg" type="image/jpg"><img class="footer__redsocial-img" loading="lazy" decoding="async" src="build/img/iconos/icono-whatsapp-white.jpg" lazyalt="imagen" alt="icono whatsapp white" width="auto" height="auto"></picture></a><a class="footer__redsocialBox" href="https://www.youtube.com/channel/UCDKL4JLgdmVmmBAJPRGx0Eg/featured"><picture><source srcset="build/img/iconos/icono-youtube-white.avif" type="image/avif"><source srcset="build/img/iconos/icono-youtube-white.webp" type="image/webp"><source srcset="build/img/iconos/icono-youtube-white.jpg" type="image/jpg"><img class="footer__redsocial-img" loading="lazy" decoding="async" src="build/img/iconos/icono-youtube-white.jpg" lazyalt="imagen" alt="icono youtube white" width="auto" height="auto"></picture></a>
    <span id="referenciaFooter" class="footer__linea-horizontal"></span>
    `
};

export function mostrarInformacion( version, fechaInicio, fechaFin, tipo1, detalle1, tipo2, detalle2, tipo3, detalle3, tipo4, detalle4, tipo5, detalle5 ) {
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
        informacionPortafolio__iconoDone1.classList.add('material-symbols-outlined', 'informacion-portafolio__icono--done');
    } else if( tipo1 === 'error' ) {
        informacionPortafolio__iconoDone1.textContent = 'error';
        informacionPortafolio__iconoDone1.classList.add('material-symbols-outlined', 'informacion-portafolio__icono--error');
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
        informacionPortafolio__iconoDone2.classList.add('material-symbols-outlined', 'informacion-portafolio__icono--done');
    } else if( tipo2 === 'error' ) {
        informacionPortafolio__iconoDone2.textContent = 'error';
        informacionPortafolio__iconoDone2.classList.add('material-symbols-outlined', 'informacion-portafolio__icono--error');
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
        informacionPortafolio__iconoDone3.classList.add('material-symbols-outlined', 'informacion-portafolio__icono--done');
    } else if( tipo3 === 'error' ) {
        informacionPortafolio__iconoDone3.textContent = 'error';
        informacionPortafolio__iconoDone3.classList.add('material-symbols-outlined', 'informacion-portafolio__icono--error');
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
        informacionPortafolio__iconoDone4.classList.add('material-symbols-outlined', 'informacion-portafolio__icono--done');
    } else if( tipo4 === 'error' ) {
        informacionPortafolio__iconoDone4.textContent = 'error';
        informacionPortafolio__iconoDone4.classList.add('material-symbols-outlined', 'informacion-portafolio__icono--error');
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
        informacionPortafolio__iconoDone5.classList.add('material-symbols-outlined', 'informacion-portafolio__icono--done');
    } else if( tipo5 === 'error' ) {
        informacionPortafolio__iconoDone5.textContent = 'error';
        informacionPortafolio__iconoDone5.classList.add('material-symbols-outlined', 'informacion-portafolio__icono--error');
    }
    informacionPortafolio__texto5.appendChild(informacionPortafolio__iconoDone5);

    const informacionPortafolio__parrafo5 = document.createElement('P');
    informacionPortafolio__parrafo5.classList.add('informacion-portafolio__parrafo');
    informacionPortafolio__parrafo5.textContent = detalle5;
    informacionPortafolio__texto5.appendChild(informacionPortafolio__parrafo5);
};

export function mostrarInformacionError() {
    informacionPortafolio__grid.innerHTML = `
    <li class="informacion-portafolio__box"><div class="informacion-portafolio__hf"><p class="informacion-portafolio__version-parrafo">0.0.3-Betha</p><p class="informacion-portafolio__fecha">10/2/2023</p><p class="informacion-portafolio__fecha">20/3/2023</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">Las siguientes secciones consumen datos de una API local: 'Bienvenida Navegacion', 'Datos Personales', 'Interés', 'Habilidades', 'Destacados', 'Planes', 'Footer' y 'Informacion'. La API que se está utilizando es local, si estás viendo el portafolio desde internet significa que no está consumiendo una API, y esta utilizando código de error. Será así hasta que se pueda crear una base de datos real.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">Las opciones 'telefono', 'Sitio web' y 'Vivo en' de datos personales ahora cuentan con enlaces redireccionales.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">Modificaciones simples a las secciones 'destacados' y 'Servicios', ya coinciden con el estilo general de el portafolio.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">La seccion Recientes pasara a tener una pagina propia. Este no esta completo, falta implementar circulos progresivos los cuales muestran el SEO.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">Se modifico el diseño de las barras de progreso en la seccion 'Habilidades'.</p></div></li>
        <li class="informacion-portafolio__box"><div class="informacion-portafolio__hf"><p class="informacion-portafolio__version-parrafo">0.0.2-Betha</p><p class="informacion-portafolio__fecha">8/2/2023</p><p class="informacion-portafolio__fecha">9/2/2023</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">El diseño de las barras de habildiades ya tiene el estilo deseado.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">Nuevo diseño para la pagina 'Informacion' la cual, hasta ahora solo muestra las versiones del portafolio.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--error">error</p><p class="informacion-portafolio__parrafo">Hay problemas con las fuentes (Roboto Condensed e iconos), Al querer comprobar el 'SEO', las fuentes bloquean los styles hasta terminear de cargar los mismos, y perjudica la 'Perfomance'.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">Se agrego la ultima seccion llamada 'Footer' al portafolio principal.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">El diseño de la seccion Bienvenido se remplazo por uno con más detalles, y se agrego dos secciones más acompañando a esta, las cuales son sobremi y habilidades.</p></div></li>
        <li class="informacion-portafolio__box"><div class="informacion-portafolio__hf"><p class="informacion-portafolio__version-parrafo">0.0.1-Betha</p><p class="informacion-portafolio__fecha">1/2/2023</p><p class="informacion-portafolio__fecha">8/2/2023</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">La distribucion del header se cambio.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">El diseño de la seccion 'servicios' se termino.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">Se remplazo la seccion de 'Trabajos' por un nuevo diseño.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">El diseño de las secciones header, bienvenido y trabajos fueron terminados.</p></div><div class="informacion-portafolio__texto"><p class="material-symbols-outlined informacion-portafolio__icono--done">check_circle</p><p class="informacion-portafolio__parrafo">Se comenzo a trabajar con un nuevo diseño del portafolio.</p></div></li>
    `;
    console.log('Hubo un error al conectarse a la base de datos "Informacion", se imprimio codigo de respaldo');
};

export function activarFormulario() {
    console.log("Desde funciones");
    if(bienvenida__contacto.classList.value === "bienvenida__contacto") {
        console.log("Desde la condicion");
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
        bienvenida__contacto.textContent = 'Enviar';
    } else {
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
};