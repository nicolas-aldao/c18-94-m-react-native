import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function DoctorScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Médicos' }} />
            <ThemedView style={styles.container}>
                <ThemedText type="title">Nuestros especialistas</ThemedText>
                <Link href="/" style={styles.link}>
                    <ThemedText type="link">(Selecciona un médico)</ThemedText>
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