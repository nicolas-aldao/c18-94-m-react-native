
import { StyledTextInput } from "./styles";
import { FC } from "react";

type TextAreaProps = {
    placeholder: string;
    text: string;
    onChangeText: (text: string) => void;
}

export const TextArea: FC<TextAreaProps> = ({ text, onChangeText, placeholder }) => {
    return (
        <StyledTextInput
            multiline
            numberOfLines={10}
            onChangeText={onChangeText}
            value={text}
            maxLength={70}
            placeholder={placeholder}
        />
    )
}