const Router = require('express')
const { Specialty } = require('../models/schemas')

const specialtyRouter = Router()

specialtyRouter.get('/', async (req, res, next) => {
	const specialties = await Specialty.find()
	req.data = specialties
	req.statusCode = 200
	next()
})

specialtyRouter.post('/', async (req, res, next) => {
	const { name } = req.query
	try {
		console.log('create specialtie')

		const specialty = new Specialty({ name });
		await specialty.save();
		console.log('Specialty created:', specialty);

		req.data = name
		req.statusCode = 200
		next()

	} catch (error) {
		next(error)
	}
})

module.exports = specialtyRouter