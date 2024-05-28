
import { Specialty } from "@/types/specialty";
import { SpecialtyBox } from "@/components/atoms/SpecialtyBox";
import { SpecialtyBoxSkeleton } from "@/components/atoms/SpecialtyBox/loading";
import { ThemedText } from "@/components/atoms/ThemedText";
import { useFetch } from "@/hooks/useFetch";
import { ListContainer, StyledView } from "./styles";

export const SpecialtiesList = () => {
    const { data: specialties, isLoading, errorMessage } = useFetch({ serviceMethod: 'getSpecialties', initialData: [] });

    return (
        <StyledView>
            <ThemedText>Lista de Especialidades:</ThemedText>
            {
                isLoading &&
                <ListContainer>
                    {[...Array(9)].map((_, index) =>
                        (<SpecialtyBoxSkeleton key={index} />))}
                </ListContainer>
            }
            {
                specialties?.length > 0 &&
                <ListContainer>
                    {specialties?.map((specialty: Specialty) => (
                        <SpecialtyBox key={specialty.name} name={specialty.name} image_url={specialty.image_url} />
                    ))}
                </ListContainer>
            }
            {(specialties?.length === 0 && !isLoading) && <ThemedText>Aún no hay información</ThemedText>}
            {errorMessage && <ThemedText>{errorMessage}</ThemedText>}
        </StyledView >
    )
}