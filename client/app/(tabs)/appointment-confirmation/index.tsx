import { Link } from "expo-router";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";

export default function AppointmentConfirmationScreen() {
    return (
        <>
            <TopBar title="Agendá tu turno" backArrow />
            <CenteredView>
                <ThemedText>Acá vemos que todos los datos ingresados estén ok, y le damos a confirmar, se abre un modal</ThemedText>
                <Link href="/">
                    <ThemedText>Ir al home</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}