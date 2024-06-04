import { useContext } from "react";
import { Link } from "expo-router";
import { MedConnectContext } from "@/context";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";
import { UpcomingAppointmentsBox } from "@/components/organisms/UpcomingAppointmentsBox"
import { BigButton } from "@/components/atoms/BigButton";
import { Colors } from "@/constants/Styles";
import { BigPrimaryButton } from "@/components/atoms/BigPrimaryButton";

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
                <BigPrimaryButton text="Press me"
                    onPress={() => console.log('')} />
            </CenteredView>
        </>
    )
}

