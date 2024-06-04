
import React, { FC } from "react";
import { ThemedText } from "../ThemedText";
import { StyledButton } from "./styles";

interface RoundedLittleButtonProps {
    text: string;
    onPress: () => void;
    color?: string;
    borderStyle?: string;
    typeText?: string;
}

export const RoundedLittleButton: FC<RoundedLittleButtonProps> = ({ text, onPress, color, borderStyle, typeText }) => {

    return (
        <StyledButton color={color} borderStyle={borderStyle} activeOpacity={0.8} onPress={onPress}>
            <ThemedText type={typeText ?? "little-button"}>{text}</ThemedText>
        </StyledButton>
    )
}