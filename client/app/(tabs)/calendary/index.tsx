import { useContext, useEffect, useState } from "react";
import { Link } from "expo-router";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from "@/constants/Styles";
import { CenteredView } from "@/components/containers/CenteredView";
import { ThemedText } from "@/components/atoms/ThemedText";
import { TopBar } from "@/components/molecules/TopBar";
import { StyledView } from "./styles";
import { useFetch } from "@/hooks/useFetch";
import { MedConnectContext } from "@/context";

export default function CalendaryScreen() {
    const { user, setUser } = useContext(MedConnectContext);

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

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: '10:00 a 10:30hs', value: 1 },
        { label: '10:30 a 11:00hs', value: 2 },
        { label: '11:00 a 11:30hs', value: 3 },
        { label: '11:30 a 12:00hs', value: 4 }
    ]);
    const [selectedDates, setSelectedDates] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const { data: appointments, isLoading, errorMessage } = useFetch({ serviceMethod: 'getAvailableAppointmentsByIdDoctor', initialData: [] })
    let uniqueDates = [];

    const Hours = {
        1: '10:00 a 10:30hs',
        2: '10:30 a 11:00hs',
        3: '11:00 a 11:30hs',
    };

    useEffect(() => {
        if (appointments) {
            uniqueDates = appointments?.map(appointment => appointment.date)
                .filter((date, index, self) => self.indexOf(date) === index);

            const markedDates = uniqueDates.reduce((acc, date) => {
                acc[date] = { selected: true, marked: true, selectedColor: date === selectedDate ? 'orange' : 'green' };
                return acc;
            }, {});
            setSelectedDates(markedDates)
        }
    }, [appointments, selectedDate])

    useEffect(() => {
        const timeDropdown = appointments
            .filter(item => item.date === selectedDate)
            .map(select => {
                const timeId: number = select.timeId;
                const fruit = Hours[timeId] || 'Unknown';
                return { label: fruit, value: timeId };
            });
        setItems(timeDropdown)
    }, [selectedDate])

    return (
        <>
            <TopBar title="Agendá tu turno" backArrow />
            <CenteredView>
                <ThemedText>Elija dia y hora del turno</ThemedText>
                <Calendar
                    style={{
                        borderWidth: 2,
                        borderRadius: 18,
                        borderColor: 'gray',
                        padding: 10,
                        margin: 6,
                    }}
                    // current={'2024-06-06'}
                    onDayPress={day => {
                        setSelectedDate(day.dateString);
                    }}
                    markedDates={selectedDates}
                />
                <StyledView>
                    <DropDownPicker
                        style={{ borderWidth: 3, borderColor: Colors.light.primary }}
                        placeholder="Seleccione horario"
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </StyledView>
                <Link href="/motive" onPress={() => {
                    setUser({
                        ...user,
                        appointment: {
                            ...user.appointment,
                            date: selectedDate,
                            time: Hours[value]
                        }
                    })
                }}>
                    <ThemedText>Confimar</ThemedText>
                </Link>
            </CenteredView>
        </>
    )
}