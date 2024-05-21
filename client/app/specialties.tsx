import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function SpecialtyScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Especialidades' }} />
            <ThemedView style={styles.container}>
                <ThemedText type="title">Solicitar Turno</ThemedText>
                <Link href="/doctors" style={styles.link}>
                    <ThemedText type="link">(Selecciona una especialidad)</ThemedText>
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