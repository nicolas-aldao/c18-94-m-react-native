import { useContext } from "react";
import { Button, StyleSheet } from "react-native";
import { MedConnectContext } from "@/context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { TopBar } from "@/components/molecules/TopBar";

export default function HomeScreen() {
    const { user, setUser } = useContext(MedConnectContext);

    return (
        <>
            <TopBar title={`Hola, ${user.name}!`} />
            <ThemedView style={styles.container}>
                <Button title="Cambiar estado context" onPress={() => setUser({ name: "Jenny Doe" })} />
                <Link href="/specialties" style={styles.link}>
                    <ThemedText type="link">Agendar turno</ThemedText>
                </Link>
            </ThemedView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    logo: {
        paddingVertical: 3,
    },
    profileButton: {
        padding: 0,
    }
});