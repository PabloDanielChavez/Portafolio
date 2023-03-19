import { mostrarInteresError, mostrarPlanError, mostrarTecnicaError, mostrarProfesionalesError, mostrarInformacionError} from "./funciones.js";

const urlInteres = "http://localhost:4000/interes";
const urlTecnicas = "http://localhost:4000/tecnicas";
const urlPofesionales = "http://localhost:4000/profesionales";
const urlPlanes = "http://localhost:4000/planes";
const urlInformacion = "http://localhost:4000/Informacion";

export const obtenerInteres = async () => {
    try {
        const resultado = await fetch(urlInteres);
        const interes = await resultado.json();
        return interes;
    } catch (error) {
        console.log(error);
        mostrarInteresError();
    }
}

export const obtenerTecnicas = async () => {
    try {
        const resultado = await fetch(urlTecnicas);
        const tecnica = await resultado.json();
        return tecnica;
    } catch (error) {
        console.log(error);
        mostrarTecnicaError();
    }
}

export const obtenerProfesionales = async () => {
    try {
        const resultado = await fetch(urlPofesionales);
        const profesionales = await resultado.json();
        return profesionales;
    } catch (error) {
        console.log(error);
        mostrarProfesionalesError();
    }
}

export const obtenerPlan = async () => {
    try {
        const resultado = await fetch(urlPlanes);
        const planes = await resultado.json();
        return planes;
    } catch (error) {
        console.log(error);
        mostrarPlanError();
    }
}

export const obtenerInformacion = async () => {
    try {
        const resultado = await fetch(urlInformacion);
        const informacion = await resultado.json();
        return informacion;
    } catch (error) {
        console.log(error);
        mostrarInformacionError();
    }
}