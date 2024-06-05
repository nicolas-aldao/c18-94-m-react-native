import { Specialty } from "@/types/specialty";
import { Doctor } from "@/types/doctor";
import { AvailableAppointments } from "@/types/available-appointment";
import { ScheduledAppointmentsByIdPatient } from "@/types/scheduled-appointment";

export abstract class MedConnectProvider {
    abstract getSpecialties(): Promise<Specialty[] | undefined>;
    abstract getDoctorsByIdSpecialty(id: string): Promise<Doctor[] | undefined>;
    abstract getAvailableAppointmentsByIdDoctor(id: string): Promise<AvailableAppointments[] | undefined>;

    // turnos por id paciente
    abstract getUpcomingAppointmentsByIdPatient(id: string): Promise<ScheduledAppointmentsByIdPatient[] | undefined>;
    abstract getCompletedAppointmentsByIdPatient(id: string): Promise<ScheduledAppointmentsByIdPatient[] | undefined>;
    // abstract getCanceledAppointmentsByIdPatient(id: string): Promise<ScheduledAppointmentsByIdPatient[] | undefined>;
    abstract postAppointment(body: any): Promise<any[] | undefined>;
}