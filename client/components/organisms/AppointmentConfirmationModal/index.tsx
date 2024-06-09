import { FC, useContext } from "react";
import { Image } from "react-native";

import { MedConnectContext } from "@/context";
import { ThemedText } from "@/components/atoms/ThemedText";
import { BottomButton } from "@/components/containers/BottomButton";
import { BigPrimaryButton } from "@/components/atoms/BigPrimaryButton";
import { StyledView } from "./styles";
import { Hours } from "@/constants";

interface AppointmentConfirmationModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const AppointmentConfirmationModal: FC<
  AppointmentConfirmationModalProps
> = ({ isVisible, onClose }) => {
  const { user } = useContext(MedConnectContext);

  return isVisible ? (
    <StyledView
      from={{
        translateY: 300,
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        translateY: 0,
        opacity: 1,
        scale: 1,
      }}
      exit={{
        translateY: 300,
        opacity: 0,
        scale: 0.9,
      }}
      exitTransition={{
        type: "timing",
        duration: 400,
      }}
    >
      <ThemedText type="headboard">Turno confirmado</ThemedText>
      <Image
        source={require("../../../assets/images/check.png")}
        style={{ width: 80, height: 80 }}
      />
      <ThemedText type="header-subtitle">Paciente: {user?.name}</ThemedText>
      <ThemedText type="header-subtitle">DNI: {user?.dni}</ThemedText>
      <ThemedText type="header-subtitle">
        Especialista: Dr. {user?.doctor?.name}
      </ThemedText>
      <ThemedText type="header-subtitle">
        Fecha: {user?.appointment?.date}
      </ThemedText>
      <ThemedText type="header-subtitle">
        Hora: {Hours[user?.appointment?.time]}
      </ThemedText>
      <BottomButton>
        <BigPrimaryButton text="Volver al Inicio" onPress={onClose} />
      </BottomButton>
    </StyledView>
  ) : null;
};
