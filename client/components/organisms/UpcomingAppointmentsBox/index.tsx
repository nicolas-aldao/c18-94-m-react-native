import React, { useContext } from "react"
import { router } from "expo-router"
import { Colors } from "@/constants/Styles"
import { RoundedLittlePrimaryButton } from "@/components/atoms/RoundedLittlePrimaryButton"
import { UpcomingAppointment } from "../../molecules/UpcomingAppointment"
import { SectionContainer, AppointmentsWrapper, ButtonSection, EmptyStateText } from "./styles"
import { useFetch } from "@/hooks/useFetch"
import { ScheduledAppointmentsByIdPatient } from "@/types/scheduled-appointment"
import { Hours } from "@/constants"
import { Spacer } from "@/components/atoms/Spacer"
import { UpcomingAppointmentSkeleton } from "@/components/molecules/UpcomingAppointment/skeleton"
import { MedConnectContext } from "@/context"
import { ThemedText } from "@/components/atoms/ThemedText"

export const UpcomingAppointmentsBox = () => {
	const { user } = useContext(MedConnectContext);
	const { data: appointments, isLoading, errorMessage } = useFetch({ serviceMethod: "getUpcomingAppointmentsByIdPatient", param: user.id, initialData: [] })

	return (
		<SectionContainer>
			<AppointmentsWrapper>
				{(appointments?.length > 0) && (
					!isLoading && appointments?.slice(0, 2).map((appoint: ScheduledAppointmentsByIdPatient, index: number) =>
						<>
							<UpcomingAppointment key={appoint._id} date={appoint.date} time={Hours[appoint.timeId]}
								doctorName={appoint.doctorName} specialtyName={appoint.specialtyName} />
							<Spacer height={15} />
						</>
					)
				)}
				{isLoading && [...Array(2)].map((_, index) =>
					<>
						<UpcomingAppointmentSkeleton key={index} />
						<Spacer height={15} />
					</>
				)}
				{(appointments?.length === 0 && !isLoading) && <EmptyStateText>No tienes turnos próximos agendados</EmptyStateText>}
				{errorMessage && <EmptyStateText>En este momento no podemos mostrarte tus turnos, intenta más tarde</EmptyStateText>}
				<ButtonSection>
					<RoundedLittlePrimaryButton color={Colors.light.primary} text="Agendar turno"
						onPress={() => { router.push("/specialties") }} borderStyle="none" />
				</ButtonSection>
			</AppointmentsWrapper>
		</SectionContainer>
	)
}
