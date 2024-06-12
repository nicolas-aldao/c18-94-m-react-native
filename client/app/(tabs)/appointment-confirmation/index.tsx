import { useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { AnimatePresence } from "moti";
import { router } from "expo-router";

import { MedConnectContext } from "@/context";
import { useFetch } from "@/hooks/useFetch";
import { CenteredView } from "@/components/containers/CenteredView";
import { Info } from "@/components/containers/Info";
import { BottomButton } from "@/components/containers/BottomButton";
import { ThemedText } from "@/components/atoms/ThemedText";
import { Spacer } from "@/components/atoms/Spacer";
import { TopBar } from "@/components/molecules/TopBar";
import { AppointmentConfirmationModal } from "@/components/organisms/AppointmentConfirmationModal";
import { BigPrimaryButton } from "@/components/atoms/BigPrimaryButton";
import { AppointmentInfo } from "@/components/organisms/AppointmentInfo";
import { OrangeInfo } from "@/components/molecules/OrangeInfo";

export default function AppointmentConfirmationScreen() {
  const { user } = useContext(MedConnectContext);
  const [openModal, setOpenModal] = useState(false);
  const [body, setBody] = useState(undefined);
  const {
    data: appointment,
    isLoading,
    errorMessage,
  } = useFetch({
    serviceMethod: "postAppointment",
    method: "POST",
    body: body,
    initialData: null,
  });

  useEffect(() => {
    appointment && setOpenModal(true);
  }, [appointment]);

  const bookAppointment = () => {
    setBody({
      patientId: user?.id,
      doctorId: user?.doctor?.id,
      date: user?.appointment?.date,
      timeId: user?.appointment?.time,
      motive: user?.appointment?.motive,
    });
    setOpenModal(true);
  };

  return (
    <>
      <TopBar title="Confirmá tu turno" backArrow />
      <CenteredView>
        {isLoading && <ActivityIndicator />}
        <AppointmentInfo
          patientName={user?.name}
          dni={user?.dni}
          doctorName={user?.doctor?.name}
          date={user?.appointment?.date}
          time={user?.appointment?.time}
          motive={user?.appointment?.motive}
        />
        <Spacer height={50} />
        <OrangeInfo
          text=" *Asegurese de contar con la presencia de cámara y micrófono a la
            hora de la cita médica. El medico se pondrá en contacto con usted."
        />
      </CenteredView>
      <BottomButton>
        <BigPrimaryButton text="Confirmar" onPress={bookAppointment} />
        <Spacer height={30} />
      </BottomButton>
      <AnimatePresence>
        <AppointmentConfirmationModal
          isVisible={openModal}
          onClose={() => {
            setOpenModal(false);
            router.push("/");
          }}
        />
      </AnimatePresence>
    </>
  );
}
