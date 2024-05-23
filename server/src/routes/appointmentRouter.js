const Router = require('express')

const appointmentRouter = Router()

appointmentRouter.get('/', (req, res) => {
	const { role, id, finished } = req.query
	console.log(`get appointments with params : ${role}, ${id}, ${finished}`)
	res.send(`get appointments with params : ${role}, ${id}, ${finished}`)
})

appointmentRouter.post('/', (req, res) => {
	const { role, id, finished } = req.query
	console.log(`get appointments with params : ${role}, ${id}, ${finished}`)
	res.send(`get appointments with params : ${role}, ${id}, ${finished}`)
})

module.exports = appointmentRouter