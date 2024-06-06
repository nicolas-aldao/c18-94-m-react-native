
import { StyledTouchableOpacity } from "./styles";
import { ThemedText } from "../ThemedText";
import { FC } from "react";
import { BigButton } from "../BigButton";
import { Colors } from "@/constants/Styles";

type BigPrimaryButtonProps = {
    text: string;
    onPress: () => void;
    disabled?: boolean;
}

export const BigPrimaryButton: FC<BigPrimaryButtonProps> = ({ text, onPress, disabled }) => {
    return (
        <BigButton text={text} onPress={onPress} color={Colors.light.primary}
            borderStyle="none" typeText="main-button-bold" disabled={disabled} />
    )
}