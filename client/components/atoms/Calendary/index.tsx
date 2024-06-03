
import { FC } from "react";
import { LocaleConfig } from 'react-native-calendars';
import { StyledCalendar } from "./styles";


interface CalendarProps {
    onDayPress: (day: any) => void;
    markedDates: any;
}

export const Calendar: FC<CalendarProps> = ({ onDayPress, markedDates }) => {
    LocaleConfig.locales['es'] = {
        monthNames: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
        ],
        monthNamesShort: [
            'Ene',
            'Feb',
            'Mar',
            'Abr',
            'May',
            'Jun',
            'Jul',
            'Ago',
            'Sep',
            'Oct',
            'Nov',
            'Dic'
        ],
        dayNames: [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado'
        ],
        dayNamesShort: [
            'Dom',
            'Lun',
            'Mar',
            'Mié',
            'Jue',
            'Vie',
            'Sáb'
        ],
        today: 'Hoy'
    };

    LocaleConfig.defaultLocale = 'es';

    return (
        <StyledCalendar
            onDayPress={onDayPress}
            markedDates={markedDates}
        />
    )
}