const Router = require('express')
const { Appointment } = require('../models/schemas')

const appointmentRouter = Router()

appointmentRouter.get('/', async (req, res, next) => {
	const { patientId, finished } = req.query;
	try {
		let query = { patientId, finished };

		const foundAppointments = await Appointment.find(query).populate('doctorId')
			.populate({
				path: 'doctorId',
				populate: [
					{
						path: 'specialty',
						model: 'Specialty'
					},
					{
						path: 'user',
						model: 'User'
					}
				]
			});

		const formattedAppointments = foundAppointments.map(appointment => {
			return {
				_id: appointment._id,
				finished: appointment.finished,
				patientId: appointment.patientId,
				doctorName: appointment.doctorId.user.name,
				doctorImg: appointment.doctorId.user.profile_pic,
				specialtyName: appointment.doctorId.specialty.name,
				date: appointment.date,
				timeId: appointment.timeId
			};
		});

		req.statusCode = 200;
		req.data = formattedAppointments;
		next()
	} catch (error) {
		next(error)
	}
})

appointmentRouter.post('/', async (req, res, next) => {
	const { patientId, doctorId, date, timeId, motive } = req.body
	try {

		const appointment = new Appointment({ patientId, doctorId, date, timeId, motive });
		await appointment.save();

		req.data = appointment;
		req.statusCode = 201;
		next()

	} catch (error) {
		next(error)
	}
})

appointmentRouter.delete('/', async (req, res, next) => {
	try {
		const deleteResult = await Appointment.deleteMany({});

		if (deleteResult.deletedCount === 0) {
			return res.status(404).json({ message: 'No se encontraron registros para eliminar' });
		}

		res.status(200).json({ message: `Se eliminaron ${deleteResult.deletedCount} registros correctamente` });
	} catch (error) {
		next(error);
	}
});

module.exports = appointmentRouter