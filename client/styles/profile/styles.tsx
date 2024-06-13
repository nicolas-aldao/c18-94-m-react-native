import styled from "styled-components";

import { Colors, Styles } from "@/constants/Styles";
import { ThemedView } from "@/components/containers/ThemedView";
import { ThemedText } from "@/components/atoms/ThemedText";

export const StyledView = styled(ThemedView)`
  width: 100%;
  margin: 0;
  height: 170px;
  background-color: ${Colors.light.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const FirstColumn = styled(ThemedView)`
  border-radius: 100px;
  height: 110px;
  width: 110px;
`;

export const SecondColumn = styled(ThemedView)`
  /* height: 50px; */
  width: 200px;
  background-color: transparent;
`;

export const NameText = styled(ThemedText)`
  color: ${Colors.light.darkGrayText};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

export const SecondaryText = styled(ThemedText)`
  color: ${Colors.light.darkGrayText};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const StyledContainer = styled(ThemedView)`
  align-items: center;
`;

export const OptionView = styled(ThemedView)`
  height: 60px;
  width: 340px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.light.gray};
  border-radius: ${Styles.borderRadius.lg};
  padding: 6px;
`;

export const FirstOptionColumn = styled(ThemedView)`
  height: 50px;
  width: 220px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
`;

export const SecondOptionColumn = styled(ThemedView)`
  height: 50px;
  width: 30px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const CircleOption = styled(ThemedView)`
  height: 45px;
  width: 45px;
  background-color: ${Colors.light.primary};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const OtherOptionsContainer = styled(ThemedView)`
  margin-left: 6px;
  width: 340px;
`;

export const OtherOptionText = styled(ThemedText)`
  color: ${Colors.light.darkGrayText};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
