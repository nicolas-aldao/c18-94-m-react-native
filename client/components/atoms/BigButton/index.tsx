
import { StyledTouchableOpacity } from "./styles";
import { ThemedText } from "../ThemedText";
import { FC } from "react";

type BigButtonProps = {
    text: string;
    onPress: () => void;
    color?: string;
    borderStyle?: string;
    typeText?: string;
    disabled?: boolean;
}

export const BigButton: FC<BigButtonProps> = ({ text, onPress, color, borderStyle, typeText, disabled }) => {
    return (
        <StyledTouchableOpacity color={color} borderStyle={borderStyle} onPress={onPress}
            disabled={disabled}>
            <ThemedText type={typeText ?? "main-button"}>
                {text}
            </ThemedText>
        </StyledTouchableOpacity>
    )
}