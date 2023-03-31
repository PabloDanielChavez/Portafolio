import { mostrarBienvenidaNavegacionError, mostrarDatosPersonalesError, mostrarInteresError, mostrarTecnicaError, mostrarProfesionalesError, mostrarDestacadosError ,mostrarPlanError, mostrarFooterError, mostrarInformacionError} from "./funciones.js";

const urlBienvenidaNavegacion = "http://localhost:4000/bienvenidaNavegacion";
const urldatosPersonales = "http://localhost:4000/datosPersonales";
const urlInteres = "http://localhost:4000/interes";
const urlTecnicas = "http://localhost:4000/tecnicas";
const urlPofesionales = "http://localhost:4000/profesionales";
const urlDestacados = "http://localhost:4000/destacados";
const urlPlanes = "http://localhost:4000/planes";
const urlFooter = "http://localhost:4000/footer";
const urlInformacion = "http://localhost:4000/informacion";


export const obtenerBienvenidaNavegacion = async () => {
    try {
        const resultado = await fetch(urlBienvenidaNavegacion);
        const BienvenidaNavegacion = await resultado.json();
        return BienvenidaNavegacion;
    } catch (error) {
        console.log(error);
        mostrarBienvenidaNavegacionError();
    }
};

export const obtenerDatosPersonales = async () => {
    try {
        const resultado = await fetch(urldatosPersonales);
        const datosPersonales = await resultado.json();
        return datosPersonales;
    } catch (error) {
        console.log(error);
        mostrarDatosPersonalesError();
    }
};

export const obtenerInteres = async () => {
    try {
        const resultado = await fetch(urlInteres);
        const interes = await resultado.json();
        return interes;
    } catch (error) {
        console.log(error);
        mostrarInteresError();
    }
};

export const obtenerTecnicas = async () => {
    try {
        const resultado = await fetch(urlTecnicas);
        const tecnica = await resultado.json();
        return tecnica;
    } catch (error) {
        console.log(error);
        mostrarTecnicaError();
    }
};

export const obtenerProfesionales = async () => {
    try {
        const resultado = await fetch(urlPofesionales);
        const profesionales = await resultado.json();
        return profesionales;
    } catch (error) {
        console.log(error);
        mostrarProfesionalesError();
    }
};

export const obtenerDestacados = async () => {
    try {
        const resultado = await fetch(urlDestacados);
        const destacados = await resultado.json();
        return destacados;
    } catch (error) {
        console.log(error);
        mostrarDestacadosError();
    }
};

export const obtenerPlan = async () => {
    try {
        const resultado = await fetch(urlPlanes);
        const planes = await resultado.json();
        return planes;
    } catch (error) {
        console.log(error);
        mostrarPlanError();
    }
};

export const obtenerFooter = async () => {
    try {
        const resultado = await fetch(urlFooter);
        const footer = await resultado.json();
        return footer;
    } catch (error) {
        console.log(error);
        mostrarFooterError();
    }
};

export const obtenerInformacion = async () => {
    try {
        const resultado = await fetch(urlInformacion);
        const informacion = await resultado.json();
        return informacion;
    } catch (error) {
        console.log(error);
        mostrarInformacionError();
    }
};