const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const specialtyRouter = require('./specialityRouter')
const doctorRouter = require('./doctorRouter');
const patientRouter = require('./patientRouter');
const appointmentRouter = require('./appointmentRouter');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/specialty', specialtyRouter)
router.use('/doctor', doctorRouter)
router.use('/patient', patientRouter)
router.use('/appointment', appointmentRouter)

module.exports = router;
