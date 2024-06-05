import { Styles } from '@/constants/Styles';
import { Calendar } from 'react-native-calendars';
import styled from "styled-components";

export const StyledCalendar = styled(Calendar)`
    border-radius: ${Styles.borderRadius.lg};
    padding: 10px 30px;
    margin-top: 20px;
`;

