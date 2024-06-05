## GET ALL SPECIALTIES
/api/specialty
devuelve todas las especialidades

## GET DOCTOR BY NAME / SPECIALTY_ID
/api/doctor?specialtyId=664e7e8fa853520082ed6101&name=andres
recibe por query "specialtyId" para el ID de specialty y "name" para nombre de doctor
en caso de no recibir "name", devuelve todos los doctores por especialidad

## GET AVAILABLE APPOINTMENTS BY DOCTOR ID / TAKEN
/api/available-appointment?doctorId=665fabe08177399fde1a037c&taken=false
Recibe doctorId y taken para determinar si los turnos que nos vamos a traer están disponibles o no, siendo su valor true o false según necesitemos.

## POST AVAILABLE APPOINTMENT
/api/available-appointment
Ejemplo de estructura body para agregar un horario de turno disponible:

{
    "doctorId": "665fabe08177399fde1a037c",
    "date": "2024-06-10",
    "timeId": 1,
    "taken": false
}

## GET APPOINTMENTS BY PATIENT ID / FINISHED
/api/appointment?patientId=333333333333333333333333&finished=false

## DELETE ALL APPOINTMENTS 
/api/appointment