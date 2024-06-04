import { useContext } from "react";
import { MedConnectContext } from "@/context";
import { CenteredView } from "@/components/containers/CenteredView";
import { TopBar } from "@/components/molecules/TopBar";
import { UpcomingAppointmentsBox } from "@/components/organisms/UpcomingAppointmentsBox"

export default function HomeScreen() {
    const { user } = useContext(MedConnectContext);

    return (
        <>
            <TopBar title={`Hola, ${user.name}!`} />
            <CenteredView>
                <UpcomingAppointmentsBox />
            </CenteredView>
        </>
    )
}

