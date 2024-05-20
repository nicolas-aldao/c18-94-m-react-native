import { Specialty } from "@/types/specialty";
import { Doctor } from "@/types/doctor";

export abstract class MedConnectProvider {
    abstract getSpecialties(): Promise<Specialty[] | undefined>;
    abstract getDoctorsByIdSpecialty(ids: string): Promise<Doctor[] | undefined>;
}