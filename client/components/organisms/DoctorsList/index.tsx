import { useContext } from "react";
import { useLocalSearchParams } from "expo-router";

import { Doctor } from "@/types/doctor";
import { MedConnectContext } from "@/context";
import { useFetch } from "@/hooks/useFetch";
import { ThemedText } from "@/components/atoms/ThemedText";
import { DoctorItemRow } from "../DoctorItemRow";
import { DoctorItemRowSkeleton } from "../DoctorItemRow/skeleton";
import { ListContainer, ItemContainer } from "./styles";

export const DoctorsList = () => {
  const { id } = useLocalSearchParams();
  const { user } = useContext(MedConnectContext);
  const {
    data: doctors,
    isLoading,
    errorMessage,
  } = useFetch<Doctor[]>({
    serviceMethod: "getDoctorsByIdSpecialty",
    param: id,
    initialData: [],
  });

  return (
    <>
      <ThemedText type="header-subtitle" style={{ marginBottom: 17 }}>
        Selecciona un especialista en {user?.doctor.specialty}
      </ThemedText>
      {isLoading && (
        <ListContainer>
          {[...Array(9)].map((_, index) => (
            <ItemContainer key={index}>
              <DoctorItemRowSkeleton key={index} />
            </ItemContainer>
          ))}
        </ListContainer>
      )}
      {doctors?.length > 0 && (
        <ListContainer>
          {doctors?.map((doctor: Doctor, index: number) => (
            <ItemContainer key={index}>
              <DoctorItemRow
                name={doctor.user.name}
                image_url={{ uri: doctor.user.profile_pic }}
                specialty={doctor.specialty.name}
                id={doctor._id}
              />
            </ItemContainer>
          ))}
        </ListContainer>
      )}
      {doctors?.length === 0 && !isLoading && (
        <ThemedText>Aún no hay información</ThemedText>
      )}
      {errorMessage && <ThemedText>{errorMessage}</ThemedText>}
    </>
  );
};
