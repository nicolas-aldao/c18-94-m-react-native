import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from '@expo/vector-icons';

interface TopBarProps {
    title?: string;
    backArrow?: boolean;
}

export const TopBar: FC<TopBarProps> = ({ title, backArrow }) => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView>
            <ThemedView style={styles.header}>
                <ThemedView style={[styles.row, styles.firstRow]}>
                    <ThemedText style={styles.logo}>Logo
                    </ThemedText>
                    {title !== "Mi Perfil" && <Link href="/profile" style={styles.profileButton}>
                        <ThemedText type="link">Profile</ThemedText>
                    </Link>}
                </ThemedView>
                <ThemedView style={styles.row}>
                    {backArrow && <TouchableOpacity onPress={handleBackPress}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>}
                    {title && <ThemedText style={backArrow && { marginLeft: -20 }}>
                        {title}
                    </ThemedText>}
                    <ThemedView>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </SafeAreaView >);
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        borderColor: 'blue'
    },
    logo: {
        paddingVertical: 3,
    },
    profileButton: {
        padding: 0,
    },
    firstRow: {
        paddingHorizontal: 20,
        backgroundColor: Colors.light.gray
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 12
    }
});