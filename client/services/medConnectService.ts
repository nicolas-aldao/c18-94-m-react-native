import { Doctor } from "@/types/doctor";
import { Specialty } from "@/types/specialty";
import { MedConnectProvider } from "./provider";

export class MedConnectService {
    private doctors: Doctor[] = [];
    private specialties: Specialty[] = [];
    // private res: any;

    constructor(private medConnectProvider: MedConnectProvider) { }

    async getSpecialties() {
        this.specialties = await this.medConnectProvider.getSpecialties() ?? [];

        return this.specialties;
    }

    async getDoctorsByIdSpecialty(ids: string) {
        this.doctors = await this.medConnectProvider.getDoctorsByIdSpecialty(ids) ?? [];

        return this.doctors;
    }
}

