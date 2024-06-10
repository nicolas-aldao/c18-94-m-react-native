import { Fragment } from "react";

import { useFetch } from "@/hooks/useFetch";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";
import { Spacer } from "@/components/atoms/Spacer";

export default function MyMedicalHistoryScreen() {
  const {
    data: medicalHistory,
    isLoading,
    errorMessage,
  } = useFetch<any[]>({
    serviceMethod: "getMedicalHistoryByIdPatient",
    param: "6666458967d6e7ebe8427ea1",
    initialData: [],
  });

  return (
    <>
      <TopBar title="Mi Historial Médico" backArrow />
      <CenteredView>
        {medicalHistory?.length > 0 &&
          medicalHistory?.map((history: any, index: number) => (
            <Fragment key={history._id}>
              <ThemedText>{history.doctor.user.name}</ThemedText>
              <ThemedText>{history.specialty.name}</ThemedText>
              <ThemedText>{history.date}</ThemedText>
              <ThemedText>{history.control}</ThemedText>
              <ThemedText>{history.treatment}</ThemedText>
              <Spacer />
            </Fragment>
          ))}
      </CenteredView>
    </>
  );
}
