import { useLocalSearchParams } from "expo-router";
import { useFetch } from "@/hooks/useFetch";
import { DoctorItemRow } from "../DoctorItemRow";
import { DoctorItemRowSkeleton } from "../DoctorItemRow/skeleton";
import { ThemedText } from "@/components/atoms/ThemedText";
import { Doctor } from "@/types/doctor";
import { ListContainer, StyledView, ItemContainer } from "./styles";

export const DoctorsList = () => {
    const { id } = useLocalSearchParams();
    const { data: doctors, isLoading, errorMessage } = useFetch({ serviceMethod: 'getDoctorsByIdSpecialty', param: id, initialData: [] });

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
                                specialty={doctor.specialty.name} id={doctor._id} />
                        </ItemContainer>
                    ))}
                </ListContainer>
            }
            {(doctors?.length === 0 && !isLoading) && <ThemedText>Aún no hay información</ThemedText>}
            {errorMessage && <ThemedText>{errorMessage}</ThemedText>}
        </StyledView >
    )
}