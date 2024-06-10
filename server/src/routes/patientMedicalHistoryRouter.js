const Router = require("express");
const {
  Patient,
  Doctor,
  Specialty,
  PatientMedicalHistory,
} = require("../models/schemas");

const patientMedicalHistoryRouter = Router();

patientMedicalHistoryRouter.get("/", async (req, res, next) => {
  const { patientId } = req.query;
  try {
    const foundPatientMedicalHistory = await PatientMedicalHistory.find({
      patient: patientId,
    })
      .populate("patient")
      .populate("doctor")
      .populate("specialty");

    req.statusCode = 200;
    req.data = foundPatientMedicalHistory;
    next();
  } catch (error) {
    next(error);
  }
});

patientMedicalHistoryRouter.post("/", async (req, res, next) => {
  try {
    const { patientId, doctorId, specialtyId, date, control, treatment } =
      req.body;

    if (!patientId || !doctorId || !specialtyId) {
      return res
        .status(400)
        .json({ error: "Patient, Doctor and Specialty is required" });
    }

    const foundPatient = await Patient.findById(patientId);

    if (!foundPatient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    const foundDoctor = await Doctor.findById(doctorId);

    if (!foundDoctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    const foundSpecialty = await Specialty.findById(specialtyId);

    if (!foundSpecialty) {
      return res.status(404).json({ error: "Specialty not found" });
    }

    const newPatientMedicalHistory = new PatientMedicalHistory({
      patient: patientId,
      doctor: doctorId,
      specialty: specialtyId,
      date,
      control,
      treatment,
    });

    await newPatientMedicalHistory.save();

    req.statusCode = 201;
    req.data = newPatientMedicalHistory;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = patientMedicalHistoryRouter;
