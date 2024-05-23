const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const specialtyRouter = require('./specialtyRouter')
const doctorRouter = require('./doctorRouter');
const patientRouter = require('./patientRouter');
const appointmentRouter = require('./appointmentRouter');
const userRouter = require('./userRouter');
const availableDateRouter = require('./availableDataRouter');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/patient', patientRouter)
router.use('/user', userRouter)
router.use('/specialty', specialtyRouter)
router.use('/doctor', doctorRouter)
router.use('/appointment', appointmentRouter)
router.use('/availableDate', availableDateRouter)


module.exports = router;
