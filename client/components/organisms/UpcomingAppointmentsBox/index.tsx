import React, { Fragment, useContext } from "react";
import { router } from "expo-router";

import { MedConnectContext } from "@/context";
import { Hours } from "@/constants";
import { Colors } from "@/constants/Styles";
import { useFetch } from "@/hooks/useFetch";
import { RoundedLittlePrimaryButton } from "@/components/atoms/RoundedLittlePrimaryButton";
import { UpcomingAppointment } from "../../molecules/UpcomingAppointment";
import { ScheduledAppointmentsByIdPatient } from "@/types/scheduled-appointment";
import { Spacer } from "@/components/atoms/Spacer";
import { UpcomingAppointmentSkeleton } from "@/components/molecules/UpcomingAppointment/skeleton";
import {
  SectionContainer,
  AppointmentsWrapper,
  ButtonSection,
  EmptyStateText,
} from "./styles";

export const UpcomingAppointmentsBox = () => {
  const { user } = useContext(MedConnectContext);
  const {
    data: appointments,
    isLoading,
    errorMessage,
  } = useFetch<any[]>({
    serviceMethod: "getUpcomingAppointmentsByIdPatient",
    param: user.id,
    initialData: [],
  });

  return (
    <SectionContainer>
      <AppointmentsWrapper>
        {appointments?.length > 0 &&
          !isLoading &&
          appointments
            ?.slice(0, 2)
            .map((appoint: ScheduledAppointmentsByIdPatient, index: number) => (
              <Fragment key={appoint._id}>
                <UpcomingAppointment
                  key={appoint._id}
                  date={appoint.date}
                  time={Hours[appoint.timeId]}
                  doctorName={appoint.doctorName}
                  specialtyName={appoint.specialtyName}
                />
                <Spacer height={15} />
              </Fragment>
            ))}
        {isLoading &&
          [...Array(2)].map((_, index) => (
            <Fragment key={index}>
              <UpcomingAppointmentSkeleton key={index} />
              <Spacer height={15} />
            </Fragment>
          ))}
        {appointments?.length === 0 && !isLoading && (
          <EmptyStateText>No tienes turnos próximos agendados</EmptyStateText>
        )}
        {errorMessage && (
          <EmptyStateText>
            En este momento no podemos mostrarte tus turnos, intenta más tarde
          </EmptyStateText>
        )}
        <ButtonSection>
          <RoundedLittlePrimaryButton
            color={Colors.light.primary}
            text="Agendar turno"
            onPress={() => {
              router.push("/specialties");
            }}
            borderStyle="none"
          />
        </ButtonSection>
      </AppointmentsWrapper>
    </SectionContainer>
  );
};
