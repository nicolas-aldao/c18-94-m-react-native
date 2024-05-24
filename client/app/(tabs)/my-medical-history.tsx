import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { TopBar } from "@/components/molecules/TopBar";

export default function SpecialtyScreen() {
    return (
        <>
            <TopBar title="Mi Historial Médico" backArrow />
            <ThemedView style={styles.container}>
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
    }
});