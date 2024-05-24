const errorHandler = (error, req, res, next) => {
	// si se envia un trow error desde un controlador con un mensaje personalizado, error.name por defecto es "error"
	// en este caso el servidor responde con un error pensado para un usuario
	if (error.name === 'Error') {
		res.send({ data: [error.message] });
	} else {
		// en caso de haber un error de ejecucion o un error interno del, error.name va a tener valores por defecto dependiendo el error. ej 'internal server error'
		// en este caso se escribe por consola el error interno específico y al usuario se le informa que hay un error interno
		console.log(error)
		res.status(500).send({ data: ['internal server error'] });
	}
}

module.exports = errorHandler