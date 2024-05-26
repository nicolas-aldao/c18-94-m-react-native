import { useContext } from "react";
import { Button } from "react-native";
import { Link } from "expo-router";
import { MedConnectContext } from "@/context";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";

export default function HomeScreen() {
    const { user, setUser } = useContext(MedConnectContext);

    return (
        <>
            <TopBar title={`Hola, ${user.name}!`} />
            <CenteredView>
                <Button title="Cambiar estado context" onPress={() => setUser({ name: "Jenny Doe" })} />
                <Link href="/specialties">
                    <ThemedText type="link">Agendar turno</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}