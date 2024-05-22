const Router = require('express')

const specialtyRouter = Router()

specialtyRouter.get('/', (req, res) => {
	console.log('get all specialties')
	res.send('get all specialties')
})

module.exports = specialtyRouter