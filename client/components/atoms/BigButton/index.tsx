
import { StyledTouchableOpacity } from "./styles";
import { ThemedText } from "../ThemedText";
import { FC } from "react";

type BigButtonProps = {
    text: string;
    onPress: () => void;
    color?: string;
    borderStyle?: string;
    typeText?: string;
}

export const BigButton: FC<BigButtonProps> = ({ text, onPress, color, borderStyle, typeText }) => {
    return (
        <StyledTouchableOpacity color={color} borderStyle={borderStyle} onPress={onPress}>
            <ThemedText type={typeText ?? "main-button"}>
                {text}
            </ThemedText>
        </StyledTouchableOpacity>
    )
}