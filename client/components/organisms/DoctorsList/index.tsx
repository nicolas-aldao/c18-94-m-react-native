
import { useFetch } from "@/hooks/useFetch";
import { DoctorItemRow } from "../DoctorItemRow";
import { ListContainer, StyledView, ItemContainer } from "./styles";
import { DoctorItemRowSkeleton } from "../DoctorItemRow/loading";
import { ThemedText } from "@/components/atoms/ThemedText";
import { Doctor } from "@/types/doctor";

export const DoctorsList = () => {
    const { data: doctors, isLoading, errorMessage } = useFetch({ serviceMethod: 'getDoctorsByIdSpecialty', initialData: [] });

    return (
        <StyledView>
            <ThemedText type="header-subtitle" style={{ marginBottom: 17 }}>Selecciona un especialista en ESPECIALIDAD</ThemedText>
            {
                isLoading &&
                <ListContainer>
                    {[...Array(9)].map((_, index) =>
                    (
                        <ItemContainer key={index}>
                            <DoctorItemRowSkeleton key={index} />
                        </ItemContainer>
                    ))}
                </ListContainer>
            }
            {doctors?.length > 0 &&
                <ListContainer>
                    {doctors?.map((doctor: Doctor, index: number) =>
                    (
                        <ItemContainer key={index}>
                            <DoctorItemRow name={doctor.user.name}
                                image_url={{ uri: doctor.user.profile_pic }}
                                specialty={doctor.specialty.name} />
                        </ItemContainer>
                    ))}
                </ListContainer>
            }
            {(doctors?.length === 0 && !isLoading) && <ThemedText>Aún no hay información</ThemedText>}
            {errorMessage && <ThemedText>{errorMessage}</ThemedText>}
        </StyledView >
    )
}