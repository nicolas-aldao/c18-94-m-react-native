import { ScrollView } from "react-native";
import { ThemedText } from "@/components/atoms/ThemedText";
import { CenteredView } from "@/components/containers/CenteredView";
import { TopBar } from "@/components/molecules/TopBar";
import { DoctorItemRow } from "@/components/organisms/DoctorItemRow";
import { DoctorItemRowSkeleton } from "@/components/organisms/DoctorItemRow/loading";
import { DoctorsList } from "@/components/organisms/DoctorsList";
import { Link } from "expo-router";

export default function DoctorScreen() {
    return (
        <>
            <TopBar title="Agendá un turno" backArrow />
            <ScrollView>
                <CenteredView>
                    {/* <DoctorItemRowSkeleton />
                <DoctorItemRow name="John Doe" image_url={{ uri: "https://randomuser.me/api/portraits/men/30.jpg" }} /> */}
                    <DoctorsList />
                    <Link href="/">
                        <ThemedText type="link">(Selecciona un médico)</ThemedText>
                    </Link>
                </CenteredView >
            </ScrollView>
        </>
    )
}