const Router = require('express')

const doctorRouter = Router()

doctorRouter.get('/', (req, res) => {
	const { specialty } = req.query
	console.log(`get doctor by specialty ${specialty}`)
	res.send(`get doctor by specialty ${specialty}`)
})

module.exports = doctorRouter