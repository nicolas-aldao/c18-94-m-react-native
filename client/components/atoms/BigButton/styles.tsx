import { Colors } from "@/constants/Styles";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const StyledTouchableOpacity = styled(TouchableOpacity)`
    background-color: ${(props) => props.color ?? Colors.light.white};
    width: 191px;
    height: 45px;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: ${(props) => props.borderStyle ?? "1px solid #253332"};
`;