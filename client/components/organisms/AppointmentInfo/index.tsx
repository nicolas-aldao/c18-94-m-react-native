import { FC } from "react";
import { Info } from "@/components/containers/Info";
import { Spacer } from "@/components/atoms/Spacer";
import { ThemedText } from "@/components/atoms/ThemedText";
import { Hours } from "@/constants";

type AppointmentInfoProps = {
  patientName: string;
  dni: string;
  doctorName: string;
  date: string;
  time: number;
  motive: string;
};

export const AppointmentInfo: FC<AppointmentInfoProps> = ({
  patientName,
  dni,
  doctorName,
  date,
  time,
  motive,
}) => {
  return (
    <Info widthParam="298px" heightParam="292px" color="#EEF5F9">
      <ThemedText>Paciente: {patientName}</ThemedText>
      <ThemedText>DNI: {dni}</ThemedText>
      <Spacer height={30} />
      <ThemedText>Especialista: Dr. {doctorName}</ThemedText>
      <ThemedText>Fecha: {date}</ThemedText>
      <ThemedText>Hora: {Hours[time]}</ThemedText>
      <ThemedText>Motivo de consulta:</ThemedText>
      <ThemedText type="long-paragraph">{motive}</ThemedText>
    </Info>
  );
};
