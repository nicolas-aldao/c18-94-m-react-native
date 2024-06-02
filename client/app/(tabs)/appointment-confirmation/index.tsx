import { Link } from "expo-router";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";
import { useContext } from "react";
import { MedConnectContext } from "@/context";

export default function AppointmentConfirmationScreen() {
    const { user } = useContext(MedConnectContext);

    return (
        <>
            <TopBar title="Agendá tu turno" backArrow />
            <CenteredView>
                <ThemedText>Acá vemos que todos los datos ingresados estén ok, y le damos a confirmar, se abre un modal</ThemedText>
                <ThemedText>{user?.name}</ThemedText>
                <ThemedText>{user?.appointment?.date}</ThemedText>
                <ThemedText>{user?.appointment?.time}</ThemedText>
                <Link href="/">
                    <ThemedText>Ir al home</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}