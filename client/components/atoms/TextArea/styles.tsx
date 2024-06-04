import { Colors } from "@/constants/Styles";
import { View } from "react-native";
import styled from "styled-components";

export const StyledView = styled(View)`
    width: 298px;
    height: 168px;
    border-radius: 17px;
    background: ${Colors.light.gray};
    padding: 24px;
`;