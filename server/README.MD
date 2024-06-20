## POST PATIENT

/api/patient
Ejemplo de estructura body:

{
"email": "correo@example.com",
"password": "contraseña123",
"dni": "123456789",
"name": "Juan Pérez",
"address": "Calle Principal, 123",
"birthDate": "1990-05-20",
"gender": "male",
"nationality": "Spanish",
"socialSecurityNumber": "123456789012"
"profile_pic": ""
}

## GET ALL SPECIALTIES

/api/specialty
devuelve todas las especialidades

## GET DOCTOR BY NAME / SPECIALTY_ID

/api/doctor?specialtyId=664e7e8fa853520082ed6101&name=andres
recibe por query "specialtyId" para el ID de specialty y "name" para nombre de doctor
en caso de no recibir "name", devuelve todos los doctores por especialidad

## POST DOCTOR

/api/doctor

{
"email": "chad@example.com",
"password": "securepassword123",
"dni": "12345678",
"name": "Chad Gilbert",
"address": "123 Main St, Springfield",
"birthDate": "1990-01-01",
"gender": "male",
"nationality": "American",
"specialtyId": "665fab408177399fde1a0375",
"profile_pic": "https://www.figma.com/component/84b4a3264661952ea89fc34693afae90f7ae5067/thumbnail?ver=2259%3A574&fuid=1375887789832720451"
}

## GET AVAILABLE APPOINTMENTS BY DOCTOR ID / TAKEN

/api/available-appointment?doctorId=665fabe08177399fde1a037c&taken=false
Recibe doctorId y taken para determinar si los turnos que nos vamos a traer están disponibles o no, siendo su valor true o false según necesitemos.

## POST AVAILABLE APPOINTMENT

/api/available-appointment
Ejemplo de estructura body para agregar un horario de turno disponible:

\`\`\`json
{
    "doctorId": "665fabe08177399fde1a037c",
    "date": "2024-06-10",
    "timeId": 1,
    "taken": false
}
\`\`\`

## GET APPOINTMENTS BY PATIENT ID / FINISHED

/api/appointment?patientId=333333333333333333333333&finished=false

## DELETE ALL APPOINTMENTS

/api/appointment

## POST PATIENT MEDICAL HISTORY

/api/medical-history
Ejemplo de estructura body:
{
"patientId": "6666458967d6e7ebe8427ea1",
"doctorId": "665fa3caa906940295a5ed86",
"specialtyId": "665f9fce37eeba5d6ceb7293",
"date": "2024-06-05",
"control": "Control de rutina",
"treatment": "pastillas por semana"
}
