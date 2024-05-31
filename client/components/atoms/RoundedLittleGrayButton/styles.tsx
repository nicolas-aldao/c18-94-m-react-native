import { Colors, Styles } from "@/constants/Styles";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export const StyledButton = styled(TouchableOpacity)`
    border-radius: ${Styles.borderRadius.lg};
    background-color: ${Colors.light.gray};
    border: solid ${Colors.light.black} 1px;
    width: 60px;
    height: 25px;
    padding: 0 6px;
    justify-content: center;
    align-items: center;
`;