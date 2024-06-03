import { View } from "react-native";
import styled from "styled-components";

export const StyledView = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9999;
    transition: opacity 0.5s;
`;