// import { useContext } from "react";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
// import { MedConnectContext } from "@/context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TopBar } from "@/components/molecules/TopBar";

export default function SpecialtyScreen() {
    // const { user } = useContext(MedConnectContext);

    return (
        <>
            <TopBar title="Mis Turnos" backArrow />
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
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    }
});