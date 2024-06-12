import React from "react";
import {
  AppointmentContainer,
  DateTimeText,
  DoctorText,
  SpecialtyText,
} from "./styles";
import { Link } from "expo-router";

// Define la interfaz para las props
interface UpcomingAppointmentProps {
  date: string;
  time: string;
  doctorName: string;
  specialtyName: string;
}

// Usa la interfaz para tipar las props del componente
export const UpcomingAppointment: React.FC<UpcomingAppointmentProps> = ({
  date,
  time,
  doctorName,
  specialtyName,
}) => {
  return (
    <Link href="/appointment-detail">
      <AppointmentContainer>
        <DateTimeText>
          {date}, {time}
        </DateTimeText>
        <DoctorText>{doctorName}</DoctorText>
        <SpecialtyText>{specialtyName}</SpecialtyText>
      </AppointmentContainer>
    </Link>
  );
};
