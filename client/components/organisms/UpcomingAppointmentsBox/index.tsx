import React, { useContext, useEffect, useState } from "react"
import { Link, router, useLocalSearchParams } from "expo-router"
import { Colors } from "@/constants/Styles"
import { RoundedLittlePrimaryButton } from "@/components/atoms/RoundedLittlePrimaryButton"
import { UpcomingAppointment } from "../../molecules/UpcomingAppointment"
import { SectionContainer, AppointmentsWrapper, ButtonSection } from "./styles"
import { useFetch } from "@/hooks/useFetch"
import { ScheduledAppointmentsByIdPatient } from "@/types/scheduled-appointment"
import { Hours } from "@/constants"
import { Spacer } from "@/components/atoms/Spacer"
import { UpcomingAppointmentSkeleton } from "@/components/molecules/UpcomingAppointment/skeleton"
import { MedConnectContext } from "@/context"
import { ThemedText } from "@/components/atoms/ThemedText"
import { CenteredView } from "@/components/containers/CenteredView"

export const UpcomingAppointmentsBox = () => {
	const { user } = useContext(MedConnectContext);
	const { refresh } = useLocalSearchParams();
	console.log("🚀 ~ UpcomingAppointmentsBox ~ refresh:", refresh)
	const [refreschState, setRefreshState] = useState(refresh === 'true')
	const { data: appointments, isLoading, errorMessage } = useFetch({ serviceMethod: "getUpcomingAppointmentsByIdPatient", param: user.id, initialData: [], refresh: refreschState })

	useEffect(() => {
		console.log("🚀 ~ UpcomingAppointmentsBox ~ appointments:", appointments)
	}, [appointments])

	return (
		<SectionContainer>
			<Link href="/"><ThemedText>ir home</ThemedText></Link>
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
				{appointments?.length === 0 && <ThemedText>Aún no tienes turnos agendados</ThemedText>}
				{errorMessage && <ThemedText>En este momento no podemos mostrarte tus turnos, intenta más tarde</ThemedText>}
				<ButtonSection>
					<RoundedLittlePrimaryButton color={Colors.light.primary} text="Agendar turno"
						onPress={() => { router.push("/specialties") }} borderStyle="none" />
				</ButtonSection>
			</AppointmentsWrapper>
		</SectionContainer>
	)
}
