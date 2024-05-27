import { ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import { useFetch } from "@/hooks/useFetch";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";
import { CenteredView } from "@/components/containers/CenteredView";
import { Specialty } from "@/types/specialty";

export default function SpecialtyScreen() {
    const { data: specialties, isLoading, errorMessage } = useFetch({ serviceMethod: 'getSpecialties', initialData: [] });

    return (
        <>
            <TopBar title="Agendá un turno" backArrow />
            <CenteredView>
                {errorMessage && <ThemedText>{errorMessage}</ThemedText>}
                {isLoading && <ActivityIndicator size="large" color={Colors.light.tint} />}
                {(!isLoading && !errorMessage) && (
                    <>
                        <ThemedText>Lista de Especialidades:</ThemedText>
                        {specialties?.length > 0 && specialties?.map((specialty: Specialty, index: string) => (
                            <ThemedText key={index} >{specialty.name}</ThemedText>
                        ))}
                        {specialties?.length === 0 && <ThemedText>Aún no hay información</ThemedText>}
                    </>
                )}
                <Link href="/doctors">
                    <ThemedText type="link">(Selecciona una especialidad)</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}