
import React, { FC } from "react";
import { ThemedText } from "../ThemedText";
import { useRouter } from "expo-router";
import { StyledButton } from "./styles";

interface RoundedPrimaryButtonProps {
    text: string;
    route: string;
}

export const RoundedPrimaryButton: FC<RoundedPrimaryButtonProps> = ({ text, route }) => {
    const router = useRouter();

    return (
        <StyledButton activeOpacity={0.8} onPress={() => router.push(route)}>
            <ThemedText type="font-black-small">{text}</ThemedText>
        </StyledButton>
    )
}