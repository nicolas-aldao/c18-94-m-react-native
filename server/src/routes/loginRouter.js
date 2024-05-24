const Router = require('express');
const { User, Doctor, Patient } = require('../models/schemas');

const loginRouter = Router()

// Ruta de Login
loginRouter.post('/', async (req, res, next) => {
	const { email, password } = req.body;
	try {
		// Busca al usuario
		const foundUser = await User.findOne({ email, password })
		if (!foundUser) throw new Error('Invalid username or password')

		// busca al perfil (paciente y medico)
		const foundPatient = await Patient.find({ user: foundUser._id }).populate('user')
		const foundDoctor = await Doctor.find({ user: foundUser._id }).populate('user')

		// devuelve un perfil encontrado
		req.data = (foundDoctor || foundPatient)
		req.statusCode = 200
		next()

	} catch (error) {
		next(error)
	}
});

module.exports = loginRouter