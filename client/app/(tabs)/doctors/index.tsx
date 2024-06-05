import { ScrollView } from "react-native";
import { Link } from "expo-router";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";
import { DoctorsList } from "@/components/organisms/DoctorsList";

export default function DoctorScreen() {
    return (
        <>
            <TopBar title="Agendá un turno" backArrow />
            <ScrollView>
                <CenteredView>
                    <DoctorsList />
                </CenteredView >
            </ScrollView>
        </>
    )
}