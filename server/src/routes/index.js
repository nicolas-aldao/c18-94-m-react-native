const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const specialtyRouter = require("./specialtyRouter");
const doctorRouter = require("./doctorRouter");
const patientRouter = require("./patientRouter");
const appointmentRouter = require("./appointmentRouter");
const userRouter = require("./userRouter");
const availableAppointmentRouter = require("./availableAppointmentRouter");
const patientMedicalHistoryRouter = require("./patientMedicalHistoryRouter");
const hoursRouter = require("./hoursRouter");
const loginRouter = require("./loginRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/patient", patientRouter);
router.use("/user", userRouter);
router.use("/login", loginRouter);
router.use("/specialty", specialtyRouter);
router.use("/doctor", doctorRouter);
router.use("/appointment", appointmentRouter);
router.use("/available-appointment", availableAppointmentRouter);
router.use("/medical-history", patientMedicalHistoryRouter);
router.use("/hours", hoursRouter);

module.exports = router;
