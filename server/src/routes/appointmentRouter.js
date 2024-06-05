const Router = require('express')
const { Appointment } = require('../models/schemas')


const appointmentRouter = Router()

appointmentRouter.get('/', async (req, res, next) => {
	const { patientId, finished } = req.query;
	try {
		let query = { patientId, finished };
		// const foundDoctor = await Specialty.findById(specialtyId)
		const foundAppointments = await Appointment.find(query).populate('doctorId').populate({
			path: 'doctorId',
			populate: {
				path: 'specialty',
				model: 'Specialty'
			}
		});

		const formattedAppointments = foundAppointments.map(appointment => {
			return {
				_id: appointment._id,
				finished: appointment.finished,
				patientId: appointment.patientId,
				doctorName: appointment.doctorId.user.name,
				// doctorImg: appointment.user.profile_pic,
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
		// const populatedAvailableAppointment = await AvailableAppointment.findById(availableAppointment._id)
		//     .populate('doctor')
		// console.log('availableAppointment created:', availableAppointment);

		// req.data = populatedAvailableAppointment;
		req.data = appointment;
		req.statusCode = 201;
		next()

	} catch (error) {
		next(error)
	}
})

module.exports = appointmentRouter