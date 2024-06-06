import { View } from "react-native";
import styled from "styled-components";
import { Styles } from "@/constants/Styles";

export const StyledContainer = styled(View)`
    border-radius: ${Styles.borderRadius.lg};
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 5px 20px 5px;
`;