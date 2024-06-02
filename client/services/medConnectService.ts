import { Doctor } from "@/types/doctor";
import { Specialty } from "@/types/specialty";
import { MedConnectProvider } from "./provider";
import { AvailableAppointments } from "@/types/available-appointment";

export class MedConnectService {
    private doctors: Doctor[] = [];
    private specialties: Specialty[] = [];
    private availableAppointments: AvailableAppointments[] = [];
    // private res: any;

    constructor(private medConnectProvider: MedConnectProvider) { }

    async getSpecialties() {
        this.specialties = await this.medConnectProvider.getSpecialties() ?? [];

        return this.specialties;
    }

    async getDoctorsByIdSpecialty(id: string) {
        this.doctors = await this.medConnectProvider.getDoctorsByIdSpecialty(id) ?? [];

        return this.doctors;
    }

    async getAvailableAppointmentsByIdDoctor(id: string) {
        this.availableAppointments = await this.medConnectProvider.getAvailableAppointmentsByIdDoctor(id) ?? [];

        return this.availableAppointments;
    }
}

