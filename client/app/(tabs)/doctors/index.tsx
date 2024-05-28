import { ThemedText } from "@/components/atoms/ThemedText";
import { CenteredView } from "@/components/containers/CenteredView";
import { TopBar } from "@/components/molecules/TopBar";
import { DoctorItemRow } from "@/components/organisms/DoctorItemRow";
import { Link } from "expo-router";

export default function DoctorScreen() {
    return (
        <>
            <TopBar title="Agendá un turno" backArrow />
            <CenteredView>
                <DoctorItemRow name="John Doe" image_url={{ uri: "https://randomuser.me/api/portraits/men/30.jpg" }} />
                <Link href="/">
                    <ThemedText type="link">(Selecciona un médico)</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}