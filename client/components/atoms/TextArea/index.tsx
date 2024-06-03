
import { TextInput } from "react-native";
import { StyledView } from "./styles";
import { FC } from "react";

type TextAreaProps = {
    placeholder: string;
    text: string;
    onChangeText: (text: string) => void;
}

export const TextArea: FC<TextAreaProps> = ({ text, onChangeText, placeholder }) => {
    return (
        <StyledView>
            <TextInput
                multiline
                numberOfLines={10}
                onChangeText={onChangeText}
                value={text}
                placeholder={placeholder}
            />
        </StyledView>
    )
}