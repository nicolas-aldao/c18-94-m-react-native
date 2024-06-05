// NEEDS REFACTOR!!
import { useContext, useState } from "react";
import { ScheduledAppointmentsByIdPatient } from "@/types/scheduled-appointment";
import { Colors } from "@/constants/Styles";
import { useFetch } from "@/hooks/useFetch";
import { CenteredView } from "@/components/containers/CenteredView";
import { Spacer } from "@/components/atoms/Spacer";
import { RoundedLittleButton } from "@/components/atoms/RoundedLittleButton";
import { TopBar } from "@/components/molecules/TopBar";
import { UpcomingMedicalAppointments } from "@/components/organisms/DoctorItemRow/UpcomingMedicalAppointments";
import { MedicalAppointmentTemplate } from "@/components/organisms/DoctorItemRow/Common/MedicalAppointmentTemplate.tsx";
import { RoundedLittlePrimaryButton } from "@/components/atoms/RoundedLittlePrimaryButton";
import { StyledView } from "./styles";
import { DoctorItemRowSkeleton } from "@/components/organisms/DoctorItemRow/skeleton";
import { MedConnectContext } from "@/context";
import { ScrollView } from "moti";

export default function MyAppointmentsScreen() {
    const { user } = useContext(MedConnectContext);
    const [serviceMethod, setServiceMethod] = useState('getUpcomingAppointmentsByIdPatient')
    const { data: appointments, isLoading, errorMessage } = useFetch({ serviceMethod: serviceMethod, param: user.id, initialData: [] })
    const [isLoadingInternal, setIsLoadingInternal] = useState(false);

    const wait = async () => {
        setIsLoadingInternal(true)
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setIsLoadingInternal(false)
    };

    return (
        <>
            <TopBar title="Mis Turnos" backArrow />
            <StyledView>
                <RoundedLittlePrimaryButton color={serviceMethod === "getCompletedAppointmentsByIdPatient" ? Colors.light.green : undefined} text="Completados" onPress={() => { wait(); setServiceMethod('getCompletedAppointmentsByIdPatient') }} borderStyle={serviceMethod === "getCompletedAppointmentsByIdPatient" ? "none" : undefined} />
                <RoundedLittlePrimaryButton color={serviceMethod === "getUpcomingAppointmentsByIdPatient" ? Colors.light.green : undefined} text="Próximos" onPress={() => { wait(); setServiceMethod('getUpcomingAppointmentsByIdPatient') }} borderStyle={serviceMethod === "getUpcomingAppointmentsByIdPatient" ? "none" : undefined} />
            </StyledView>
            <CenteredView>
                {(isLoading || isLoadingInternal) && [...Array(4)].map((_, index) =>
                (
                    <>
                        <DoctorItemRowSkeleton key={index} />
                        <Spacer height={15} />
                    </>
                ))}
                {(appointments?.length > 0) && (
                    <ScrollView>
                        {!isLoadingInternal && appointments?.map((appoint: ScheduledAppointmentsByIdPatient, index: number) =>
                            <>
                                {serviceMethod === "getUpcomingAppointmentsByIdPatient" ?
                                    <UpcomingMedicalAppointments
                                        key={appoint._id}
                                        image_url={{ uri: appoint.doctorImg }} name={appoint.doctorName}
                                        specialty={appoint.specialtyName} date={appoint.date} time={appoint.timeId} />
                                    : <MedicalAppointmentTemplate key={appoint._id}
                                        image_url={{ uri: appoint.doctorImg }} name={appoint.doctorName} specialty="Cardiology">
                                        <RoundedLittleButton text="Detalles" onPress={() => console.log('pressed')} />
                                    </MedicalAppointmentTemplate>}
                                <Spacer height={15} />
                            </>
                        )}
                    </ScrollView>
                )}
            </CenteredView>
        </>
    )
}