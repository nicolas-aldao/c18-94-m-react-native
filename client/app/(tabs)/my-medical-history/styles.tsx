import { View } from "react-native";
import styled, { css } from "styled-components";

import { ThemedText } from "@/components/atoms/ThemedText";
import { Colors, Styles } from "@/constants/Styles";

const sharedStyles = css`
  margin-bottom: 4px;
`;

export const StyledView = styled(View)`
  justify-content: space-evenly;
  padding: 18px 18px 16px 18px;
  width: 301px;
  background-color: ${Colors.light.gray};
  border-radius: ${Styles.borderRadius.lg};
`;

export const StyledText = styled(ThemedText)`
  ${sharedStyles}
`;

export const HeaderText = styled(ThemedText)`
  color: ${Colors.light.lightGrayText};
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  ${sharedStyles}
`;

export const SectionText = styled(ThemedText)`
  color: ${Colors.light.lightGrayText};
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  ${sharedStyles}
`;
