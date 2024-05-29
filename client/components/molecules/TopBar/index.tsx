import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from "@/components/containers/ThemedView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { NameAndPicUser } from "../NameAndPicUser";
import { FirstRow, Logo, SecondRow, TopBarContainer } from "./styles";

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
                    <Logo
                        source={require('../../../assets/images/logo.png')}
                    />
                    {title !== "Mi Perfil" &&
                        <NameAndPicUser name={"John Doe"} profile_pic={'https://randomuser.me/api/portraits/men/44.jpg'} />
                    }
                </FirstRow>
                <SecondRow>
                    {backArrow && <TouchableOpacity onPress={handleBackPress}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>}
                    {title && <ThemedText type="headboard" style={backArrow && { marginLeft: -20 }}>
                        {title}
                    </ThemedText>}
                    <ThemedView>
                    </ThemedView>
                </SecondRow>
            </TopBarContainer>
        </SafeAreaView >);
};