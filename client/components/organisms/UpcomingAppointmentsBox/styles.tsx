import styled from "styled-components"
import { ThemedView } from "@/components/containers/ThemedView"
import { Colors, Styles } from "@/constants/Styles"

export const SectionContainer = styled(ThemedView)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`
export const AppointmentsWrapper = styled(ThemedView)`
	padding-right: 6px;
	padding: 10px;
	min-height: 200px;
	width: 100%;
	justify-content: space-between;
	border-radius: ${Styles.borderRadius.lg};
	background-color: ${Colors.light.gray};
`


export const ButtonSection = styled(ThemedView)`
	align-items: center;
	background-color: ${Colors.light.gray}
`
