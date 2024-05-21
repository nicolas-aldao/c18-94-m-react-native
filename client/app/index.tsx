import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Home' }} />
            <ThemedView style={styles.container}>
                <ThemedText type="title">Buen día User!</ThemedText>
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