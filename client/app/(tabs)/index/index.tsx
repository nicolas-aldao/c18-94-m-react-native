import { useContext } from "react";
import { Link } from "expo-router";
import { MedConnectContext } from "@/context";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";
import { UpcomingAppointmentsBox } from "@/components/organisms/UpcomingAppointmentsBox"

export default function HomeScreen() {
    const { user } = useContext(MedConnectContext);

    return (
        <>
            <TopBar title={`Hola, ${user.name}!`} />
            <CenteredView>
                <UpcomingAppointmentsBox />
                <Link href="/specialties">
                    <ThemedText>Agendar turno</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}

