import { ScrollView } from "react-native";
import { TopBar } from "@/components/molecules/TopBar";
import { CenteredView } from "@/components/containers/CenteredView";
import { SpecialtiesList } from "@/components/organisms/SpecialtiesList";

export default function SpecialtyScreen() {

    return (
        <>
            <TopBar title="Especialidades" backArrow />
            <ScrollView>
                <CenteredView>
                    <SpecialtiesList />
                </CenteredView>
            </ScrollView>
        </>
    )
}