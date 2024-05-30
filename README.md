# 📱 TeleMedicina MVP para No Country
¡Bienvenidos al proyecto de la clínica médica virtual! Aquí encontrarás toda la información necesaria para entender y contribuir al desarrollo del MVP
de nuestra aplicación móvil de TeleMedicina.

# 📝 Descripción del Proyecto
Nuestro objetivo es desarrollar un MVP (Producto Mínimo Viable) de una aplicación móvil para una clínica médica virtual. Los pacientes podrán:

- Registrarse
- Iniciar sesión
- Reservar citas médicas virtuales mediante videollamadas
- Chatear con médicos
- Acceder a su historial médico
# 🌟 Características Principales
Programación de citas médicas en línea
Videollamadas seguras entre pacientes y médicos
Acceso a historiales médicos durante las consultas
# 💻 Stack Tecnológico
- Frontend: React Native con Expo
- Backend: Node.js
- Base de Datos: MongoDB
- Estructura del Código: Monorepo
- Plataforma: Android (únicamente en esta primera iteración)
# 👥 Roles del Equipo
Frontend: Matías, Ramiro, Andrés, Luna, Oscar, Nicolás Florentin
Backend/Base de Datos: Nicolás Aldao, Maria Martinez
Diseño UX/UI: Delfina Rios
Scrum Masters: Nicolás Florenti, Nicolás Aldao, Maria Martinez
# 👤 Tipos de Usuario
- Paciente 
Es el usuario que requiere atención médica virtual.Puede:

Registrarse (No disponible en esta primera iteración)
Iniciar sesión (No disponible en esta primera iteración)
Reservar turnos médicos virtuales eligiendo especialidad, profesional, fecha y hora
Cancelar turnos
Ver su perfil, Ver historial de turnos con detalles de cada consulta (historial médico)

- Médico
 Son los profesionales que atenderán a los usuarios. Se cargarán nuevos médicos al sistema desde el código fuente y
podrán iniciar sesión con un nombre de usuario y contraseña. Pueden:
Ver los turnos próximos
Ver el perfil y el historial médico de sus pacientes
Hacer anotaciones durante la videollamada

- Administrador
 Gestión de citas de pacientes y asignación de médicos disponibles para las consultas virtuales.

# 🔧 Funcionalidades
- Registro (Paciente) - No disponible en esta primera iteración

- Los pacientes podrán registrarse para entrar a su cuenta. Los médicos serán cargados a través del código fuente.
- Login (Paciente y Médico) - No disponible en esta primera iteración
- Los pacientes y médicos podrán iniciar sesión en la app.
Reserva de turno (Paciente)

User Story: Como paciente, quiero poder programar consultas virtuales con médicos para recibir atención médica sin salir de casa.
Ver historial Médico del paciente (Médico)

User Story: Como médico, quiero tener acceso a los historiales médicos de mis pacientes durante las consultas virtuales para proporcionar un mejor diagnóstico.
Agregar nuevos turnos disponibles de médicos (Administrador)

User Story: Como administrador, quiero poder gestionar las citas de los pacientes y asignar médicos disponibles para las consultas virtuales.
# 📌 Paso a Paso del Proyecto
Inicio del Proyecto

Configuración del monorepo.
Configuración del entorno de desarrollo (React Native con Expo, Node.js, MongoDB).
Diseño UX/UI

Delfina Rios crea los mockups y prototipos en Figma.
Revisión y ajustes basados en feedback del equipo.
Desarrollo del Frontend

Matías, Ramiro, Andrés, Luna, Oscar y Nicolás Florentin desarrollan la interfaz de usuario utilizando React Native con Expo.
Implementación de la navegación entre pantallas.
Desarrollo del Backend

Nicolás Aldao y Maria Martinez configuran el servidor en Node.js y la base de datos en MongoDB.
Desarrollo de endpoints para la gestión de usuarios, reservas y historial médico.
Integración de Videollamadas

Selección de un servicio de videollamadas seguro (ej. WebRTC o un servicio de terceros).
Implementación de la funcionalidad de videollamadas en la app.
Implementación del Historial Médico

Configuración de la base de datos para almacenar y acceder a los historiales médicos.
Desarrollo de interfaces para que los médicos accedan a los historiales durante las consultas.
Pruebas y QA

Pruebas internas para asegurar el correcto funcionamiento de todas las funcionalidades básicas.
Feedback y correcciones.
Despliegue

Preparación para el lanzamiento de la aplicación en la Play Store de Android.
Planificación de futuras iteraciones que incluirán el registro y login de usuarios.
# 🔗 Referencias y Links
- Miró: Link a Miro : https://miro.com/welcomeonboard/MEEzaG5lMWxkQmU4aE1icGlaNGR2ZEZBaHFuWjI5THVFdmhLZGIydmN0aXJTdFBQZ1NiZ3ZvV0FDMzVMalhVM3wzNDU4NzY0NTI5NzQ1MTE3NjgzfDI=?share_link_id=439075746512
  
- Trello: Link a Trello : https://trello.com/invite/b/SxGnpPFy/ATTIea4fb43e51ed9d586c115896f3bd4f715BB26D6B/no-country-telemed-project
  
- Figma: Link a Figma : https://www.figma.com/design/iFGYfbeGbJKJla3QDIlrsJ/MedConnect?node-id=4%3A195&t=R7qpduWNsAYM1l9c-1

¡Gracias por tu interés y colaboración en este emocionante proyecto! 🚀🩺
