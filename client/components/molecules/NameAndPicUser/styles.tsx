import styled from "styled-components";
import { ThemedView } from "@/components/containers/ThemedView";
import { ThemedText } from "@/components/atoms/ThemedText";

export const NameAndPicContainer = styled(ThemedView)`
    flex-direction: row;
    align-items: center;
    background-color: transparent;
`;
export const Name = styled(ThemedText)`
    padding-right: 6px;
`;