import { Link } from "expo-router";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";

export default function MotiveScreen() {
    return (
        <>
            <TopBar title="Agendá tu turno" backArrow />
            <CenteredView>
                <ThemedText>Acá ingresamos el motivo de nuestra consulta, se ve un input text</ThemedText>
                <Link href="/appointment-confirmation">
                    <ThemedText>Ir a pantalla de confirmación del turno</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}