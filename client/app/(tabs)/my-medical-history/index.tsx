import { Fragment } from "react";

import { useFetch } from "@/hooks/useFetch";
import { CenteredView } from "@/components/containers/CenteredView";
import { Spacer } from "@/components/atoms/Spacer";
import { TopBar } from "@/components/molecules/TopBar";
import { HeaderText, SectionText, StyledText, StyledView } from "./styles";

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

  const MedicalHistoryItem = ({ history }) => {
    return (
      <StyledView>
        <HeaderText>{history.date}</HeaderText>
        {/* <ThemedText>{history.doctor.user.name}</ThemedText> */}
        <StyledText>{history.specialty.name}</StyledText>
        <SectionText>Comentarios:</SectionText>
        <StyledText type="long-paragraph">{history.control}</StyledText>
        <SectionText>Tratamiento:</SectionText>
        <StyledText type="long-paragraph">{history.treatment}</StyledText>
      </StyledView>
    );
  };

  return (
    <>
      <TopBar title="Mi Historial Médico" backArrow />
      <CenteredView>
        {medicalHistory?.length > 0 &&
          medicalHistory?.map((history: any, index: number) => (
            <Fragment key={history._id}>
              <MedicalHistoryItem history={history} />
              <Spacer height={16} />
            </Fragment>
          ))}
      </CenteredView>
    </>
  );
}
