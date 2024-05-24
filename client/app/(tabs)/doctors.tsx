import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TopBar } from "@/components/molecules/TopBar";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function DoctorScreen() {
    return (
        <>
            <TopBar title="Agendá un turno" backArrow />
            <ThemedView style={styles.container}>
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