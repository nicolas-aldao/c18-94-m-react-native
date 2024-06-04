import { Colors } from "@/constants/Styles";
import { Image, View } from "react-native";
import styled from "styled-components";

export const StyledView = styled(View)`
    flex-direction: row;
    justify-content: space-evenly;
    padding: 25px 25px 0 25px;
    background-color: ${Colors.light.background}
`;