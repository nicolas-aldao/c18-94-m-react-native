const Router = require('express');
const { AvailableDate } = require('../models/schemas');

const availableDateRouter = Router()

availableDateRouter.post('/', async (req, res, next) => {
	try {
		const doctorId = req.body.doctorId; // Assuming doctorId is provided in the request body
		if (!doctorId) {
			return res.status(400).json({ error: 'Doctor ID is required' });
		}

		const currentDate = new Date();
		const endDate = new Date();
		endDate.setDate(currentDate.getDate() + 7);

		const availableDates = [];

		// Iterar desde el día actual hasta una semana después
		for (let date = new Date(currentDate); date <= endDate; date.setDate(date.getDate() + 1)) {
			for (let hour = 8; hour <= 17; hour++) {
				const dateAndTime = new Date(date);
				dateAndTime.setHours(hour, 0, 0, 0);
				availableDates.push({ doctorId, dateAndTime });
			}
		}

		// Guardar los horarios disponibles en la base de datos
		const savedDates = await AvailableDate.insertMany(availableDates);

		res.status(201).json(savedDates);
	} catch (error) {
		next(error);
	}
})

module.exports = availableDateRouter