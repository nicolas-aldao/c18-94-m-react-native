import { Colors } from '@/constants/Styles';
import { Calendar } from 'react-native-calendars';
import styled from "styled-components";

export const StyledCalendar = styled(Calendar)`
    border-radius: 12px;
    border: solid ${Colors.light.darkGray} 2px;
    padding: 10px;
    margin: 6px;
`;

