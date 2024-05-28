import { ScrollView } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";
import { CenteredView } from "@/components/containers/CenteredView";
import { SpecialtiesList } from "@/components/organisms/SpecialtiesList";

export default function SpecialtyScreen() {

    return (
        <>
            <TopBar title="Agendá un turno" backArrow />
            <ScrollView>
                <CenteredView>
                    <SpecialtiesList />
                    <Link href="/doctors">
                        <ThemedText type="link">(Selecciona una especialidad)</ThemedText>
                    </Link>
                </CenteredView>
            </ScrollView>
        </>
    )
}