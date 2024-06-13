import { FC } from "react";

import { useFetch } from "@/hooks/useFetch";
import { Specialty } from "@/types/specialty";
import { ThemedText } from "@/components/atoms/ThemedText";
import { SpecialtyBox } from "@/components/atoms/SpecialtyBox";
import { SpecialtyBoxSkeleton } from "@/components/atoms/SpecialtyBox/loading";
import { ListContainer, StyledView } from "./styles";
import { GENERIC_MESSAGE_ERROR } from "@/constants";

interface SpecialtiesListProps {
  maxItemsToRender?: number;
}

export const SpecialtiesList: FC<SpecialtiesListProps> = ({
  maxItemsToRender,
}) => {
  const {
    data: specialties,
    isLoading,
    errorMessage,
  } = useFetch<Specialty[]>({
    serviceMethod: "getSpecialties",
    initialData: undefined,
  });

  return (
    <StyledView>
      {isLoading && (
        <ListContainer>
          {[...Array(maxItemsToRender ?? 9)].map((_, index) => (
            <SpecialtyBoxSkeleton key={index} />
          ))}
        </ListContainer>
      )}
      {specialties?.length > 0 && (
        <ListContainer>
          {specialties
            ?.slice(0, maxItemsToRender ?? specialties?.length)
            .map((specialty: Specialty) => (
              <SpecialtyBox
                key={specialty.name}
                id={specialty._id}
                name={specialty.name}
                image_url={specialty.image_url}
              />
            ))}
        </ListContainer>
      )}
      {specialties?.length === 0 && !errorMessage && (
        <ThemedText>Aún no hay información</ThemedText>
      )}
      {errorMessage && <ThemedText>{GENERIC_MESSAGE_ERROR}</ThemedText>}
    </StyledView>
  );
};
