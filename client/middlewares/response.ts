// Acá manejamos los distintos tipos de errores, los mensajes de 
// error están para ayudarnos en el desarrollo, después vamos a cambiar estos
// textos de error por algo más genérico para el usuario
export const responseMiddleware = (response) => {
    if (response.status >= 500) {
        throw new Error("Error interno del servidor");
    } else if (response.status >= 400) {
        throw new Error("Error, solicitud inválida");
    } else { // si es 200
        return response?.data;
    }
};