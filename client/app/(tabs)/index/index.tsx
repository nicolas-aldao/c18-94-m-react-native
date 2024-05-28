import { useContext, useState } from "react"
import { Button } from "react-native"
import { Link } from "expo-router"
import { MedConnectContext } from "@/context"
import { CenteredView } from "@/components/containers/CenteredView"
import { ThemedText } from "@/components/atoms/ThemedText"
import { TopBar } from "@/components/molecules/TopBar"
import { AnimatedView } from "@/animations/PopFadeView"
import { Skeleton } from "moti/skeleton"
import { UpcomingAppointmentsBox } from "@/components/organisms/UpcomingAppointmentsBox"

export default function HomeScreen() {
	const { user, setUser } = useContext(MedConnectContext)
	const [mostrarTexto, setMostrarTexto] = useState(false)

	return (
		<>
			<TopBar title={`Hola, ${user.name}!`} />
			<CenteredView>
				<UpcomingAppointmentsBox />
				<Button title='Mostrar texto animado' onPress={() => setMostrarTexto(!mostrarTexto)} />
				{mostrarTexto && (
					<AnimatedView>
						<ThemedText>Texto animado!</ThemedText>
					</AnimatedView>
				)}
				<Skeleton height={48} width={48} radius='round' colorMode='light'>
					{/* {!!data ? <Data /> : null} */}
				</Skeleton>
				<Button title='Cambiar estado context' onPress={() => setUser({ name: "Jenny Doe" })} />
				<Link href='/specialties'>
					<ThemedText type='link'>Agendar turno</ThemedText>
				</Link>
			</CenteredView>
		</>
	)
}
