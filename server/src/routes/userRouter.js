const Router = require('express')
const { User } = require('../models/schemas')

const userRouter = Router()

userRouter.get('/', async (req, res, next) => {
	try {
		const foundUsers = await User.find({})
		req.data = foundUsers
		req.statusCode = 200
		next()
	} catch (error) {
		next(error)
	}
})


module.exports = userRouter