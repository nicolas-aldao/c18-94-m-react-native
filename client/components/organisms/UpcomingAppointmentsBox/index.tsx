import React from "react"
import { Link, router } from "expo-router"
import { Colors } from "@/constants/Styles"
import { ThemedText } from "@/components/atoms/ThemedText"
import { RoundedLittlePrimaryButton } from "@/components/atoms/RoundedLittlePrimaryButton"
import { UpcomingAppointment } from "../../molecules/UpcomingAppointment"
import { SectionContainer, AppointmentsWrapper, TitleSection, ButtonSection } from "./styles"
import { useFetch } from "@/hooks/useFetch"
import { ScheduledAppointmentsByIdPatient } from "@/types/scheduled-appointment"
import { Hours } from "@/constants"
import { Spacer } from "@/components/atoms/Spacer"
import { UpcomingAppointmentSkeleton } from "@/components/molecules/UpcomingAppointment/skeleton"

export const UpcomingAppointmentsBox = () => {
	const { data: appointments, isLoading, errorMessage } = useFetch({ serviceMethod: "getUpcomingAppointmentsByIdPatient", initialData: [] })

	return (
		<SectionContainer>
			<TitleSection>
				<ThemedText type="section">Mis turnos</ThemedText>
				<Link href='/my-appointments'>
					<ThemedText type="show-all">Ver todos</ThemedText>
				</Link>
			</TitleSection>
			<AppointmentsWrapper>
				{(appointments?.length > 0) && (
					!isLoading && appointments?.map((appoint: ScheduledAppointmentsByIdPatient, index: number) =>
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
				<ButtonSection>
					<RoundedLittlePrimaryButton color={Colors.light.primary} text="Agendar turno"
						onPress={() => { router.push("/specialties") }} />
				</ButtonSection>
			</AppointmentsWrapper>
		</SectionContainer>
	)
}
