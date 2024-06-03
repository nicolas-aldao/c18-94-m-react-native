
import { ActivityIndicator } from "react-native";
import { Colors } from "@/constants/Styles";
import { StyledView } from "./styles";

export const LoadingSpinner = () => {
    return (
        <StyledView>
            <ActivityIndicator size={56} color={Colors.light.primary} />
        </StyledView>
    )
}