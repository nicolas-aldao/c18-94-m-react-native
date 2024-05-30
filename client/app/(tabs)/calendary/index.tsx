import { Link } from "expo-router";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";

export default function CalendaryScreen() {
    return (
        <>
            <TopBar title="Agendá tu turno" backArrow />
            <CenteredView>
                <ThemedText>Acá elegimos un dia y hora del turno, se ve un calendario y dropdown de horas</ThemedText>
                <Link href="/motive">
                    <ThemedText>Ir a pantalla motivo consulta</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}