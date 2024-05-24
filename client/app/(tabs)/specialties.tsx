import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TopBar } from "@/components/molecules/TopBar";

export default function SpecialtyScreen() {

    return (
        <>
            <TopBar title="Agendá un turno" backArrow />
            <ThemedView style={styles.container}>
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
    }
});