import { Image } from "react-native";
import styled from "styled-components";
import { Colors } from "@/constants/Styles";
import { ThemedView } from "@/components/containers/ThemedView";
import { ThemedText } from "@/components/atoms/ThemedText";

export const TopBarContainer = styled(ThemedView)`
    flex-direction: column;
    height: 95px;
`;

export const FirstRow = styled(ThemedView)`
  padding: 0 20px;
  background-color: ${Colors.light.gray};
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
`;

export const SecondRow = styled(ThemedView)`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
`;

export const Logo = styled(Image)`
  padding: 3px 0;
  width: 54px;
  height: 34px;
`;

export const ProfileButton = styled(ThemedText)`
  padding: 0;
`;

