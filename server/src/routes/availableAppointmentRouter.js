const Router = require('express');
const { AvailableAppointment, Doctor } = require('../models/schemas');

const AvailableAppointmentRouter = Router()

AvailableAppointmentRouter.get('/', async (req, res, next) => {
    const { doctorId, taken } = req.query;
    try {
        let query = { doctorId: doctorId, taken: taken };
        // const foundDoctor = await Specialty.findById(specialtyId)
        const foundAvailableAppointments = await AvailableAppointment.find(query);

        req.statusCode = 200;
        req.data = foundAvailableAppointments;
        next()
    } catch (error) {
        next(error)
    }
})

AvailableAppointmentRouter.post('/', async (req, res, next) => {
    const { doctorId, date, timeId, taken } = req.body
    try {
        // Encontrar la especialidad por nombre
        const foundDoctor = await Doctor.findById(doctorId);

        if (!foundDoctor) {
            return res.status(404).json({ error: 'foundDoctor not found' });
        }

        const availableAppointment = new AvailableAppointment({ doctorId: foundDoctor._id, date, timeId, taken });
        await availableAppointment.save();
        // const populatedAvailableAppointment = await AvailableAppointment.findById(availableAppointment._id)
        //     .populate('doctor')
        // console.log('availableAppointment created:', availableAppointment);

        // req.data = populatedAvailableAppointment;
        req.data = availableAppointment;
        req.statusCode = 201;
        next()

    } catch (error) {
        next(error)
    }
})

module.exports = AvailableAppointmentRouter