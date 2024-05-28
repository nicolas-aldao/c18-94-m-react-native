
import { DoctorItemRow } from "../DoctorItemRow";
import { ListContainer, StyledView, ItemContainer } from "./styles";

export const DoctorsList = () => {
    // const { data: specialties, isLoading, errorMessage } = useFetch({ serviceMethod: 'getSpecialties', initialData: [] });

    return (
        <StyledView>
            {/* {
                isLoading &&
                    <ListContainer>
                        {[...Array(9)].map((_, index) =>
                            (<SpecialtyBoxSkeleton key={index} />))}
                    </ListContainer>
            } */}
            <ListContainer>
                {[...Array(9)].map((_, index) =>
                (
                    <ItemContainer key={index}>
                        <DoctorItemRow name="John Doe" image_url={{ uri: "https://randomuser.me/api/portraits/men/30.jpg" }} />
                    </ItemContainer>
                ))}
            </ListContainer>
            {/* {(specialties?.length === 0 && !isLoading) && <ThemedText>Aún no hay información</ThemedText>}
            {errorMessage && <ThemedText>{errorMessage}</ThemedText>} */}
        </StyledView >
    )
}