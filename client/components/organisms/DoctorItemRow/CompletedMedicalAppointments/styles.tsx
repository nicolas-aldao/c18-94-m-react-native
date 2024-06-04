import { View } from "react-native";
import styled from "styled-components";
import { Colors, Styles } from "@/constants/Styles";

export const Container = styled(View)`
    border-radius: ${Styles.borderRadius.lg};
    background-color: ${Colors.light.gray};
    width: 298px;
    height: 152px;
    flex-direction: column;
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

export const FirstRow = styled(View)`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 6px;
`;

export const SecondRow = styled(View)`
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 6px;
`;

export const ThirdRow = styled(View)`
    flex-direction: row;
    justify-content: space-evenly;
`;