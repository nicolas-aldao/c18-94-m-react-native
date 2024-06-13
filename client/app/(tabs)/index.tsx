import { useContext, useEffect } from "react";
import { MedConnectContext } from "@/context";
import { CenteredView } from "@/components/containers/CenteredView";
import { TopBar } from "@/components/molecules/TopBar";
import { UpcomingAppointmentsBox } from "@/components/organisms/UpcomingAppointmentsBox";
import { SpecialtiesList } from "@/components/organisms/SpecialtiesList";
import { ThemedText } from "@/components/atoms/ThemedText";
import { Link } from "expo-router";
import { TitleSection } from "../../styles/index/styles";
import { Spacer } from "@/components/atoms/Spacer";

export default function HomeScreen() {
  const { user } = useContext(MedConnectContext);

  return (
    <>
      {/* TODO: NEEDS REFACTOR!! WE NEED FIRST AND LAST NAME IN USER SEPARATED*/}
      <TopBar title={`Hola, John!`} />
      <CenteredView>
        {/* TODO: NEEDS REFACTOR!! */}
        <TitleSection>
          <ThemedText type="section">Mis turnos</ThemedText>
          <Link href="/my-appointments">
            <ThemedText type="show-all">Ver todos</ThemedText>
          </Link>
        </TitleSection>
        <UpcomingAppointmentsBox />
        <Spacer height={15} />
        {/* TODO: NEEDS REFACTOR!! */}
        <TitleSection>
          <ThemedText type="section">Especialidades</ThemedText>
          <Link href="/specialties">
            <ThemedText type="show-all">Ver todas</ThemedText>
          </Link>
        </TitleSection>
        <SpecialtiesList maxItemsToRender={6} />
      </CenteredView>
    </>
  );
}
