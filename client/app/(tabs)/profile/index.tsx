import { useContext } from "react";
import { MedConnectContext } from "@/context";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";
import { CenteredView } from "@/components/containers/CenteredView";

export default function ProfileScreen() {
    const { user } = useContext(MedConnectContext);

    return (
        <>
            <TopBar title="Mi Perfil" backArrow />
            <CenteredView>
                <ThemedText type="title">{user.name} Profile Screen</ThemedText>
            </CenteredView>
        </>
    )
}