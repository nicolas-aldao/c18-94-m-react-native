import { FC } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Specialty } from "@/types/specialty";
import { ThemedText } from "@/components/atoms/ThemedText";
import { SpecialtyBox } from "@/components/atoms/SpecialtyBox";
import { SpecialtyBoxSkeleton } from "@/components/atoms/SpecialtyBox/loading";
import { ListContainer, StyledView } from "./styles";

interface SpecialtiesListProps {
    maxItemsToRender?: number;
}

export const SpecialtiesList: FC<SpecialtiesListProps> = ({ maxItemsToRender }) => {
    const { data: specialties, isLoading, errorMessage } = useFetch({ serviceMethod: 'getSpecialties', initialData: [] });

    return (
        <StyledView>
            {
                isLoading &&
                <ListContainer>
                    {[...Array(maxItemsToRender ?? 9)].map((_, index) =>
                        (<SpecialtyBoxSkeleton key={index} />))}
                </ListContainer>
            }
            {
                specialties?.length > 0 &&
                <ListContainer>
                    {specialties?.slice(0, (maxItemsToRender ?? specialties?.lenght)).map((specialty: Specialty) => (
                        <SpecialtyBox key={specialty.name} name={specialty.name} image_url={specialty.image_url} />
                    ))}
                </ListContainer>
            }
            {(specialties?.length === 0 && !isLoading) && <ThemedText>Aún no hay información</ThemedText>}
            {errorMessage && <ThemedText>{errorMessage}</ThemedText>}
        </StyledView >
    )
}