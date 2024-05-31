import { FlatList, ScrollView, View } from "react-native"
import React from "react"
import { ThemedText } from "@/components/atoms/ThemedText"
import { SectionContainer, SectionTitle, AppointmentsWrapper, TitleSection } from "./styles"
import { UpcomingAppointment } from "../../molecules/UpcomingAppointment"
import { ExternalLink } from "@/components/atoms/ExternalLink"
import { Link } from "expo-router"

interface Appointment {
	dateAndTime: string
	doctor: {
		id: number
		name: string
	}
}

const appointments = [
	{
		dateAndTime: "2024-06-11T14:35:47.256Z",
		id: "1",
		doctor: {
			id: 123,
			name: "Dr. Garcia",
		},
	},
	{
		dateAndTime: "2024-07-22T19:50:25.765Z",
		id: "2",
		doctor: {
			id: 123,
			name: "Dr. Florentin",
		},
	},
	{
		dateAndTime: "2024-09-05T03:17:30.145Z",
		id: "3",
		doctor: {
			id: 123,
			name: "Dr. Moreno",
		},
	},
	{
		dateAndTime: "2024-10-15T09:45:02.334Z",
		id: "4",
		doctor: {
			id: 123,
			name: "Dr. Zamito",
		},
	},
	{
		dateAndTime: "2024-11-30T12:30:15.789Z",
		id: "5",
		doctor: {
			id: 123,
			name: "Dr. Marchese",
		},
	},
]

export const UpcomingAppointmentsBox = () => {
	return (
		<SectionContainer>
			<TitleSection>
				<SectionTitle type='subtitle'>Próximos turnos</SectionTitle>
				<Link href='/my-appointments'>
					<ThemedText type='link'>Ver todos</ThemedText>
				</Link>
			</TitleSection>
			<AppointmentsWrapper>
				<FlatList
					data={appointments}
					renderItem={({ item }) => <UpcomingAppointment title={item.doctor.name} />}
					keyExtractor={(item) => item.id}
					ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
				/>
			</AppointmentsWrapper>
		</SectionContainer>
	)
}
