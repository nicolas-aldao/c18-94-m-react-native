import { Colors, Styles } from "@/constants/Styles";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export const StyledButton = styled(TouchableOpacity)`
  border-radius: ${Styles.borderRadius.lg};
  background-color: ${(props) => props.color ?? Colors.light.gray};
  border: ${(props) => props.borderStyle ?? `solid ${Colors.light.black} 1px`};
  min-width: 60px;
  height: 28px;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
`;
