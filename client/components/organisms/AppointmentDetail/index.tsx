import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { TopBar } from "@/components/molecules/TopBar";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { Spacer } from "@/components/atoms/Spacer";
import { AppointmentInfo } from "@/components/organisms/AppointmentInfo";
import { OrangeInfo } from "@/components/molecules/OrangeInfo";
import { VideocallButton } from "@/components/organisms/VideocallButton";

export const AppointmentDetail = ({
  onJoinChannelPress,
}: {
  onJoinChannelPress: () => void;
}) => {
  const user = {
    name: "Juan Pérez",
    dni: "12345678",
    doctor: {
      name: "Dr. Smith",
    },
    appointment: {
      date: "2024-06-15",
      time: 1,
      motive: "Consulta general",
    },
  };

  return (
    <>
      <TopBar title="Detalle turno" backArrow />
      <CenteredView>
        <ThemedText type="header-subtitle">
          Información sobre tu turno:
        </ThemedText>
        <Spacer />
        <AppointmentInfo
          patientName={user.name}
          dni={user.dni}
          doctorName={user.doctor.name}
          date={user.appointment.date}
          time={user.appointment.time}
          motive={user.appointment.motive}
        />
        <Spacer height={25} />
        <OrangeInfo text="El botón para iniciar la videollamada se activará cuando sea la hora del turno" />
        <Spacer height={25} />
        <View style={styles.actionContainer}>
          <ThemedText>Iniciar videollamada</ThemedText>
          <VideocallButton onJoinChannelPress={onJoinChannelPress} />
        </View>
      </CenteredView>
    </>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
});
