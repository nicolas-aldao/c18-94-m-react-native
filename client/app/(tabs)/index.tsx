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
import { useFetch } from "@/hooks/useFetch";

export default function HomeScreen() {
  const { user } = useContext(MedConnectContext);
  const {
    data: videocallCredentials,
    isLoading,
    errorMessage,
  } = useFetch<any[]>({
    serviceMethod: "getVideocallCredentials",
  });

  useEffect(() => {
    console.log("videocallCredentials ", videocallCredentials);
  }, [videocallCredentials]);

  return (
    <>
      <TopBar title={`Hola, ${user.name}!`} />
      <CenteredView>
        {/* TODO: NEEDS REFACTOR!! */}
        <Link href="/videocall/main">
          <ThemedText type="section">Press meye</ThemedText>
        </Link>
        <Spacer height={10} />
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
