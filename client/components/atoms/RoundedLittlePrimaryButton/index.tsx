
import React, { FC } from "react";
import { RoundedLittleButton } from "../RoundedLittleButton";

interface RoundedLittlePrimaryButtonProps {
    text: string;
    onPress: () => void;
    color?: string;
    borderStyle?: string;
}

export const RoundedLittlePrimaryButton: FC<RoundedLittlePrimaryButtonProps> = ({ text, onPress, color, borderStyle }) => {

    return (
        <RoundedLittleButton text={text} onPress={onPress} typeText="little-button-bold"
            color={color} borderStyle={borderStyle} />
    )
}