import { useContext } from "react";
import { StyleSheet } from "react-native";
import { MedConnectContext } from "@/context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TopBar } from "@/components/molecules/TopBar";

export default function HomeScreen() {
    const { user } = useContext(MedConnectContext);

    return (
        <>
            <TopBar title="Mi Perfil" backArrow />
            <ThemedView style={styles.container}>
                <ThemedText type="title">{user.name} Profile Screen</ThemedText>
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