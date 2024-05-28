import { Colors, Styles } from "@/constants/Styles";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export const StyledButton = styled(TouchableOpacity)`
    border-radius: ${Styles.borderRadius.lg};
    background-color: ${Colors.light.primary};
    width: 100.52px;
    height: 25px;
    justify-content: center;
    align-items: center;
`;