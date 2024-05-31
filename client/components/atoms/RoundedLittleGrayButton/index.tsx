
import React, { FC } from "react";
import { ThemedText } from "../ThemedText";
import { useRouter } from "expo-router";
import { StyledButton } from "./styles";

interface RoundedLittleGrayButtonProps {
    text: string;
    route: string;
}

export const RoundedLittleGrayButton: FC<RoundedLittleGrayButtonProps> = ({ text, route }) => {
    const router = useRouter();

    return (
        <StyledButton activeOpacity={0.8} onPress={() => router.push(route)}>
            <ThemedText type="little-button">{text}</ThemedText>
        </StyledButton>
    )
}