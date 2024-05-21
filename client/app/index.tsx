import { useContext } from "react";
import { Button, StyleSheet } from "react-native";
import { MedConnectContext } from "@/context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, Stack } from "expo-router";

export default function HomeScreen() {
    const { user, setUser } = useContext(MedConnectContext);

    return (
        <>
            <Stack.Screen options={{ title: 'Home' }} />
            <ThemedView style={styles.container}>
                <ThemedText type="title">Buen día {user?.name}!</ThemedText>
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
});