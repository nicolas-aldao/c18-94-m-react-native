import { Colors, Styles } from "@/constants/Styles";
import { TextInput } from "react-native";
import styled from "styled-components";

export const StyledTextInput = styled(TextInput)`
    width: 298px;
    height: 168px;
    background: ${Colors.light.gray};
    text-align-vertical: top;
    padding: 24px;
    border-radius: ${Styles.borderRadius.lg};
`;