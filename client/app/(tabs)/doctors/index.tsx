import { ThemedText } from "@/components/atoms/ThemedText";
import { CenteredView } from "@/components/containers/CenteredView";
import { TopBar } from "@/components/molecules/TopBar";
import { Link } from "expo-router";

export default function DoctorScreen() {
    return (
        <>
            <TopBar title="Agendá un turno" backArrow />
            <CenteredView>
                <Link href="/">
                    <ThemedText type="link">(Selecciona un médico)</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}