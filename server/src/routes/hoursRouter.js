const Router = require('express');

const hoursRouter = Router()

hoursRouter.get('/', (req, res, next) => {
	const horas = [];
	for (let i = 0; i < 24; i++) {
		horas.push(i.toString().padStart(2, '0') + ':00');
	}
	req.data = horas
	req.statusCode = 200
	next()
});

module.exports = hoursRouter