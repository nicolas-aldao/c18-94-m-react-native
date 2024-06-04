import React from 'react'
import { AppointmentContainer, DateTimeText, DoctorText, SpecialtyText } from './styles'

// Define la interfaz para las props
interface UpcomingAppointmentProps {
	date: string;
	time: string;
	doctorName: string;
	specialtyName: string;
}

// Usa la interfaz para tipar las props del componente
export const UpcomingAppointment: React.FC<UpcomingAppointmentProps> = ({ date, time, doctorName, specialtyName }) => {
	return (
		<AppointmentContainer>
			<DateTimeText>{date}, {time}</DateTimeText>
			<DoctorText>{doctorName}</DoctorText>
			<SpecialtyText>{specialtyName}</SpecialtyText>
		</AppointmentContainer>
	);
};