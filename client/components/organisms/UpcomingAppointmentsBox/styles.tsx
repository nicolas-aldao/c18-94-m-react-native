import styled from "styled-components"
import { ThemedView } from "@/components/containers/ThemedView"
import { ThemedText } from "@/components/atoms/ThemedText"
import { Styles } from "@/constants/Styles"

export const SectionContainer = styled(ThemedView)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10px 0;
	width: 100%;
`
export const SectionTitle = styled(ThemedText)`
	padding: 10px 0;
`

export const AppointmentsWrapper = styled(ThemedView)`
	padding-right: 6px;
	padding: 10px;
	height: 200px;
	width: 100%;
	border: 1px solid black;
	border-radius: ${Styles.borderRadius.lg};
`
export const TitleSection = styled(ThemedView)`
	display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
