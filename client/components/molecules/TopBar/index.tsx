import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/containers/ThemedView";
import { Ionicons } from '@expo/vector-icons';
import { FirstRow, Logo, ProfileButton, SecondRow, TopBarContainer } from "./styles";

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
            <TopBarContainer>
                <FirstRow>
                    <Logo>Logo</Logo>
                    {title !== "Mi Perfil" && <Link href="/profile">
                        <ProfileButton type="link">Profile</ProfileButton>
                    </Link>}
                </FirstRow>
                <SecondRow>
                    {backArrow && <TouchableOpacity onPress={handleBackPress}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>}
                    {title && <ThemedText style={backArrow && { marginLeft: -20 }}>
                        {title}
                    </ThemedText>}
                    <ThemedView>
                    </ThemedView>
                </SecondRow>
            </TopBarContainer>
        </SafeAreaView >);
};