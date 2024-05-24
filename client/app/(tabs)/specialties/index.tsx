import { Link } from "expo-router";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";
import { CenteredView } from "@/components/containers/CenteredView";

export default function SpecialtyScreen() {
    return (
        <>
            <TopBar title="Agendá un turno" backArrow />
            <CenteredView>
                <Link href="/doctors">
                    <ThemedText type="link">(Selecciona una especialidad)</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}