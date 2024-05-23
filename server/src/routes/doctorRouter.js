const Router = require('express')
const { Doctor, Specialty, User } = require('../models/schemas')

const doctorRouter = Router()

// get doctors with filters
doctorRouter.get('/', async (req, res, next) => {
	const { specialty, name } = req.query
	try {
		const foundSpecialty = await Specialty.findOne({ name: specialty })
		const foundDoctors = await Doctor.find({ specialty: foundSpecialty._id }).populate('specialty').populate('user')
		if (name) {
			const filteredDoctors = foundDoctors.filter(doctor => doctor.user.name.toLowerCase() === name.toLowerCase())
			req.statusCode = 200
			req.data = filteredDoctors
			next()
		}

		req.statusCode = 200
		req.data = foundDoctors
		next()
	} catch (error) {
		next(error)
	}
})




// Create a doctor and specialty
doctorRouter.post('/', async (req, res, next) => {
	try {
		const {
			email,
			password,
			dni,
			name,
			address,
			birthDate,
			gender,
			nationality,
			specialty
		} = req.body;

		if (!specialty) {
			return res.status(400).json({ error: 'Specialty is required' });
		}

		// Encontrar la especialidad por nombre
		const foundSpecialty = await Specialty.findOne({ name: specialty });

		if (!foundSpecialty) {
			return res.status(404).json({ error: 'Specialty not found' });
		}

		// Crear el usuario
		const newUser = new User({
			email,
			password,
			dni,
			name,
			address,
			birthDate,
			gender,
			nationality
		});

		await newUser.save();

		// Crear el doctor con la especialidad encontrada
		const newDoctor = new Doctor({
			user: newUser._id,
			specialty: foundSpecialty._id
		});

		await newDoctor.save();

		// Buscar el doctor creado y poblar los campos userId y specialtyId
		const populatedDoctor = await Doctor.findById(newDoctor._id)
			.populate('user')
			.populate('specialty');

		req.statusCode = 201;
		req.data = populatedDoctor;
		next();
	} catch (error) {
		next(error);
	}
});



module.exports = doctorRouter