## GET ALL SPECIALTIES
GET - http://localhost:3000/api/specialty
devuelve todas las especialidades

## GET DOCTOR BY NAME / SPECIALTY_ID
GET - http://localhost:3000/api/doctor?specialtyId=664e7e8fa853520082ed6101&name=andres
recibe por query "specialtyId" para el ID de specialty y "name" para nombre de doctor
en caso de no recibir "name", devuelve todos los doctores por especialidad

