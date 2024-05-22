const Router = require('express')

const patientRouter = Router()

patientRouter.get('/:id', (req, res) => {
	const { id } = req.params
	console.log(`get patient with id: ${id}`)
	res.send(`get patient with id: ${id}`)
})

module.exports = patientRouter