import { TopBar } from "@/components/molecules/TopBar";
import { CenteredView } from "@/components/containers/CenteredView";
import { SpecialtiesList } from "@/components/organisms/SpecialtiesList";
import { ThemedText } from "@/components/atoms/ThemedText";
import { Spacer } from "@/components/atoms/Spacer";

export default function SpecialtyScreen() {

    return (
        <>
            <TopBar title="Especialidades" backArrow />
            <CenteredView>
                <ThemedText type="header-subtitle">Elegí una especialidad y conocé a nuestros especialistas</ThemedText>
                <Spacer />
                <SpecialtiesList />
            </CenteredView>
        </>
    )
}