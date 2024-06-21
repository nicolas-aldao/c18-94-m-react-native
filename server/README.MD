### Diagrama de base de datos

<img width="528" alt="diagrama" src="https://github.com/nicolas-aldao/c18-94-m-react-native/assets/68720883/b16c615b-a07a-4c93-9a64-e9ed45c01a2a">

### POST PATIENT

```javascript
/api/patient 
```   
Ejemplo de estructura body:  

```javascript
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
```

### GET ALL SPECIALTIES  

```javascript
/api/specialty
```  

devuelve todas las especialidades

### GET DOCTOR BY NAME / SPECIALTY_ID

```javascript
/api/doctor?specialtyId=664e7e8fa853520082ed6101&name=andres  
```

Recibe por query "specialtyId" para el ID de specialty y "name" para nombre de doctor
en caso de no recibir "name", devuelve todos los doctores por especialidad

### POST DOCTOR

```javascript
/api/doctor
```  

```javascript
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
```

### GET AVAILABLE APPOINTMENTS BY DOCTOR ID / TAKEN  

```javascript
/api/available-appointment?doctorId=665fabe08177399fde1a037c&taken=false  
```  
Recibe doctorId y taken para determinar si los turnos que nos vamos a traer están disponibles o no, siendo su valor true o false según necesitemos.

### POST AVAILABLE APPOINTMENT

```javascript
/api/available-appointment  
```

Ejemplo de estructura body para agregar un horario de turno disponible:  

```javascript
{
    "doctorId": "665fabe08177399fde1a037c",
    "date": "2024-06-10",
    "timeId": 1,
    "taken": false
}
```

### GET APPOINTMENTS BY PATIENT ID / FINISHED  

```javascript
/api/appointment?patientId=65b6d2b2e4ae979c61ad9afc&finished=false
```

### DELETE ALL APPOINTMENTS  

```javascript
/api/appointment
```

### POST PATIENT MEDICAL HISTORY  

```javascript
/api/medical-history
```  
Ejemplo de estructura body:  

```javascript
{
"patientId": "6666458967d6e7ebe8427ea1",
"doctorId": "665fa3caa906940295a5ed86",
"specialtyId": "665f9fce37eeba5d6ceb7293",
"date": "2024-06-05",
"control": "Control de rutina",
"treatment": "pastillas por semana"
}
```