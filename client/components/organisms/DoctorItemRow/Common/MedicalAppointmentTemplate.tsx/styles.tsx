import { View } from "react-native";
import styled from "styled-components";
import { Colors, Styles } from "@/constants/Styles";

export const RowContainer = styled(View)`
    border-radius: ${Styles.borderRadius.lg};
    background-color: ${Colors.light.gray};
    width: 298px;
    height: 133px;
    flex-direction: row;
    justify-content: center
`;

export const FirstColumn = styled(View)`
    justify-content: center;
`;

export const SecondColumn = styled(View)`
    width: 170px;
    justify-content: center;
    margin-left: 20px;
`;

export const ButtonSection = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;