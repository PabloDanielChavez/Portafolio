const urlInformacion = "http://localhost:4000/informacion";
const urlContactos = "http://localhost:4000/contactos";

export const obtenerInformacion = async () => {
    try {
        const resultado = await fetch(urlInformacion);
        const informacion = await resultado.json();
        return informacion;
    } catch (error) {
        console.log(error);
    }
};

export const nuevoContacto = async contacto => {
    try {
        await fetch(urlContactos, {
            method: 'POST', 
            body: JSON.stringify(contacto), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}