const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dni: { type: Number, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  birthDate: { type: String, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  profile_pic: { type: String, required: true },
});

// Doctor Schema
const doctorSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  specialty: { type: Schema.Types.ObjectId, ref: "Specialty", required: true },
});

// Specialty Schema
const specialtySchema = new Schema({
  name: { type: String, required: true },
  image_url: { type: String, required: true },
});

// Patient Schema
const patientSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  socialSecurityNumber: { type: String, required: true },
});

const availableAppointmentSchema = new Schema({
  doctorId: { type: Schema.Types.ObjectId, ref: "Doctor", required: true },
  date: { type: String, required: true },
  timeId: { type: Number, required: true },
  taken: { type: Boolean, required: true },
});

const appointmentSchema = new Schema({
  finished: { type: Boolean, default: false },
  patientId: { type: Schema.Types.ObjectId, ref: "Patient", required: true },
  doctorId: { type: Schema.Types.ObjectId, ref: "Doctor", required: true },
  date: { type: String, required: true },
  timeId: { type: Number, required: true },
  motive: { type: String, required: true },
});

const patientMedicalHistorySchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: "Patient", required: true },
  doctor: { type: Schema.Types.ObjectId, ref: "Doctor", required: true },
  specialty: { type: Schema.Types.ObjectId, ref: "Specialty", required: true },
  date: { type: String, required: true },
  control: { type: String, required: true },
  treatment: { type: String, required: false },
});

const videocallSchema = new Schema({
  appID: { type: String, required: true },
  channel: { type: String, required: true },
  token: { type: String, required: true },
});

// Model creation
const User = mongoose.model("User", userSchema);
const Doctor = mongoose.model("Doctor", doctorSchema);
const Specialty = mongoose.model("Specialty", specialtySchema);
const Patient = mongoose.model("Patient", patientSchema);
const AvailableAppointment = mongoose.model(
  "AvailableAppointment",
  availableAppointmentSchema
);
const Appointment = mongoose.model("Appointment", appointmentSchema);
const PatientMedicalHistory = mongoose.model(
  "PatientMedicalHistory",
  patientMedicalHistorySchema
);
const Videocall = mongoose.model("Videocall", videocallSchema);

// Export models
module.exports = {
  User,
  Doctor,
  Specialty,
  Patient,
  AvailableAppointment,
  Appointment,
  PatientMedicalHistory,
  Videocall,
};
