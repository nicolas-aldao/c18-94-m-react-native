const Router = require('express')
const { User } = require('../models/schemas')

const userRouter = Router()

userRouter.get('/', async (req, res, next) => {

	const {
		email,
		password,
		dni,
		name,
		address,
		birthDate,
		gender,
		nationality
	} = req.body

	const user = req.body
	try {
		const user = new User(user);
		await user.save();
		req.statusCode = 201
		req.data = user
		next()
	} catch (error) {
		next(error);
	}

})

module.exports = userRouter