import { View, Text } from 'react-native'
import React from 'react'
import { AppointmentContainer } from './styles'

// Define la interfaz para las props
interface UpcomingAppointmentProps {
	title: string;
}

// Usa la interfaz para tipar las props del componente
export const UpcomingAppointment: React.FC<UpcomingAppointmentProps> = ({ title }) => {
	return (
			<AppointmentContainer>
					<Text>{title}</Text>
			</AppointmentContainer>
	);
};