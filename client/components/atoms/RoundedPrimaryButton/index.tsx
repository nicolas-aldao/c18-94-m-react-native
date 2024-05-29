
import React, { FC } from "react";
import { useRouter } from "expo-router";
import { ThemedText } from "../ThemedText";
import { StyledButton } from "./styles";

interface RoundedPrimaryButtonProps {
    text: string;
    route: string;
}

export const RoundedPrimaryButton: FC<RoundedPrimaryButtonProps> = ({ text, route }) => {
    const router = useRouter();

    return (
        <StyledButton activeOpacity={0.8} onPress={() => router.push(route)}>
            <ThemedText type="little-button">{text}</ThemedText>
        </StyledButton>
    )
}