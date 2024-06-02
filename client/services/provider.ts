import { Specialty } from "@/types/specialty";
import { Doctor } from "@/types/doctor";
import { AvailableAppointments } from "@/types/available-appointment";

export abstract class MedConnectProvider {
    abstract getSpecialties(): Promise<Specialty[] | undefined>;
    abstract getDoctorsByIdSpecialty(id: string): Promise<Doctor[] | undefined>;
    abstract getAvailableAppointmentsByIdDoctor(id: string): Promise<AvailableAppointments[] | undefined>;
}