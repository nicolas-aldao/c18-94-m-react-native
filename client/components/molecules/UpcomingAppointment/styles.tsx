import styled from "styled-components"
import { ThemedView } from "@/components/containers/ThemedView"
import { Colors, Styles } from "@/constants/Styles"
import { ThemedText } from "@/components/atoms/ThemedText"

export const AppointmentContainer = styled(ThemedView)`
	width: 261px;
	min-height: 80px;
	padding: 10px 15px;
	background-color: ${Colors.light.darkGray};
	border-radius: ${Styles.borderRadius.lg};
`

export const DateTimeText = styled(ThemedText)`
	font-size: 12px;
	font-weight: 600;
`

export const DoctorText = styled(ThemedText)`
	font-size: 16px;
	font-weight: 600;
`

export const SpecialtyText = styled(ThemedText)`
	font-size: 15px;
	font-weight: 300;
`

