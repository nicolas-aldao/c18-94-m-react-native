
import { FC } from "react";
import { LocaleConfig, Calendar as Calendary } from 'react-native-calendars';
import { StyledCalendar } from "./styles";
import { Colors } from "@/constants/Styles";


interface CalendarProps {
    onDayPress: (day: any) => void;
    markedDates: unknown;
    selectedDate: string
}

export const Calendar: FC<CalendarProps> = ({ onDayPress, markedDates, selectedDate }) => {
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
    const today = new Date().toISOString().split('T')[0];

    return (
        <StyledCalendar
            onDayPress={onDayPress}
            markedDates={{
                ...markedDates, [today]: {
                    selected: true,
                    marked: true,
                    selectedColor: '#00adf5',
                    dotColor: '#00adf5'
                },
                [selectedDate]: {
                    selected: true,
                    marked: true,
                    selectedColor: Colors.light.black,
                    selectedTextColor: Colors.light.white,
                    dotColor: Colors.light.black,
                }
            }}
            theme={{
                backgroundColor: Colors.light.gray,
                calendarBackground: Colors.light.gray,
                textSectionTitleColor: Colors.light.lightestGray,
                selectedDayBackgroundColor: Colors.light.black,
                selectedDayTextColor: Colors.light.white,
                todayTextColor: '#000000',
                dayTextColor: Colors.light.darkGrayText,
                textDisabledColor: Colors.light.lightestGray,
                arrowColor: Colors.light.primary
            }}
        />
    )
}