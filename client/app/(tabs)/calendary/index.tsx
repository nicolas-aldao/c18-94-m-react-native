import { useContext, useEffect, useMemo, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";

import { Hours } from "@/constants";
import { MedConnectContext } from "@/context";
import { useFetch } from "@/hooks/useFetch";
import { AvailableAppointments } from "@/types/available-appointment";
import { CenteredView } from "@/components/containers/CenteredView";
import { Calendar } from "@/components/atoms/Calendary";
import { ThemedText } from "@/components/atoms/ThemedText";
import { Dropdown } from "@/components/atoms/Dropdown";
import { TopBar } from "@/components/molecules/TopBar";
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner";
import { BigButton } from "@/components/atoms/BigButton";
import { Colors } from "@/constants/Styles";

export default function CalendaryScreen() {
  const { user, setUser } = useContext(MedConnectContext);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedDates, setSelectedDates] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isLoadingInternal, setIsLoadingInternal] = useState(false);

  const { doctorId } = useLocalSearchParams();
  const {
    data: appointments,
    isLoading,
    errorMessage,
  } = useFetch<AvailableAppointments[]>({
    serviceMethod: "getAvailableAppointmentsByIdDoctor",
    param: doctorId,
    initialData: [],
  });
  let uniqueDates = [];

  const markedDates = useMemo(() => {
    if (appointments) {
      setIsLoadingInternal(true);
      uniqueDates = appointments
        ?.map((appointment) => appointment.date)
        .filter((date, index, self) => self.indexOf(date) === index);

      const markedDatesResult = uniqueDates.reduce((acc, date) => {
        acc[date] = {
          selected: true,
          marked: false,
          selectedColor: date === selectedDate ? Colors.light.black : "#9EEEB9",
          selectedTextColor: Colors.light.black,
        };
        return acc;
      }, {});
      return markedDatesResult;
    }
  }, [appointments, selectedDate]);

  useEffect(() => {
    setSelectedDates(markedDates);
    setIsLoadingInternal(false);
  }, [markedDates]);

  useEffect(() => {
    const timeDropdown = appointments
      .filter((item) => item.date === selectedDate)
      .map((select) => {
        const timeId: number = select.timeId;
        const timeDescription = Hours[timeId] || "Unknown";
        return { label: timeDescription, value: timeId };
      });
    setItems(timeDropdown);
  }, [selectedDate]);

  return (
    <>
      <TopBar title="Agendá tu turno" backArrow />
      {(isLoading || isLoadingInternal) && <LoadingSpinner />}
      <CenteredView>
        <ThemedText type="header-subtitle">Elegí fecha y hora</ThemedText>
        <Calendar
          selectedDate={selectedDate}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          markedDates={selectedDates}
        />
        <Dropdown
          placeholder="Seleccione horario"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          disabled={selectedDate === ""}
        />
        <BigButton
          text="Confirmar"
          disabled={selectedDate === "" || !value}
          onPress={() => {
            setUser({
              ...user,
              appointment: {
                ...user.appointment,
                date: selectedDate,
                time: value,
              },
            });
            router.push("/motive");
          }}
        />
      </CenteredView>
    </>
  );
}
