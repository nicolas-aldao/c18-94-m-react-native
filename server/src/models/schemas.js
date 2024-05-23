const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dni: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  birthDate: { type: String, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true }
});

// Doctor Schema
const doctorSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  specialty: { type: Schema.Types.ObjectId, ref: 'Specialty', required: true }
});

// Specialty Schema
const specialtySchema = new Schema({
  name: { type: String, required: true }
});

// Patient Schema
const patientSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  socialSecurityNumber: { type: String, required: true }
});

// AvailableDate Schema
const availableDateSchema = new Schema({
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  dateAndTime: { type: Date, required: true }
});

// Appointment Schema
const appointmentSchema = new Schema({
  finished: { type: Boolean, default: false },
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  dateAndTime: { type: Date, required: true },
  observations: { type: String },
  appointmentURL: { type: String },
  motive: { type: String, required: true }
});

// Model creation
const User = mongoose.model('User', userSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);
const Doctor = mongoose.model('Doctor', doctorSchema);
const Specialty = mongoose.model('Specialty', specialtySchema);
const Patient = mongoose.model('Patient', patientSchema);
const AvailableDate = mongoose.model('AvailableDate', availableDateSchema);

// Export models
module.exports = {
  User,
  Appointment,
  Doctor,
  Specialty,
  Patient,
  AvailableDate
};