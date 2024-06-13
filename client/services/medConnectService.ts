import { Doctor } from "@/types/doctor";
import { Specialty } from "@/types/specialty";
import { MedConnectProvider } from "./provider";
import { AvailableAppointments } from "@/types/available-appointment";
import { ScheduledAppointmentsByIdPatient } from "@/types/scheduled-appointment";
import { MedicalHistory } from "@/types/medical-history";

export class MedConnectService {
  private doctors: Doctor[] = [];
  private specialties: Specialty[] = [];
  private videoCredentials: any;
  private availableAppointments: AvailableAppointments[] = [];
  private upcomingAppointmentsByIdPatient: ScheduledAppointmentsByIdPatient[] =
    [];
  private completedAppointmentsByIdPatient: ScheduledAppointmentsByIdPatient[] =
    [];
  private medicalHistories: MedicalHistory[] = [];

  private createdAppointment: ScheduledAppointmentsByIdPatient[] = [];

  constructor(private medConnectProvider: MedConnectProvider) {}

  async getSpecialties() {
    this.specialties = (await this.medConnectProvider.getSpecialties()) ?? [];

    return this.specialties;
  }

  async getDoctorsByIdSpecialty(id: string) {
    this.doctors =
      (await this.medConnectProvider.getDoctorsByIdSpecialty(id)) ?? [];

    return this.doctors;
  }

  async getAvailableAppointmentsByIdDoctor(id: string) {
    this.availableAppointments =
      (await this.medConnectProvider.getAvailableAppointmentsByIdDoctor(id)) ??
      [];

    return this.availableAppointments;
  }

  async getUpcomingAppointmentsByIdPatient(id: string) {
    this.upcomingAppointmentsByIdPatient =
      (await this.medConnectProvider.getUpcomingAppointmentsByIdPatient(id)) ??
      [];

    return this.upcomingAppointmentsByIdPatient;
  }

  async getCompletedAppointmentsByIdPatient(id: string) {
    this.completedAppointmentsByIdPatient =
      (await this.medConnectProvider.getCompletedAppointmentsByIdPatient(id)) ??
      [];

    return this.completedAppointmentsByIdPatient;
  }

  async postAppointment(body: any) {
    this.createdAppointment =
      (await this.medConnectProvider.postAppointment(body)) ?? [];

    return this.createdAppointment;
  }

  async getMedicalHistoryByIdPatient(id: string) {
    this.medicalHistories =
      (await this.medConnectProvider.getMedicalHistoryByIdPatient(id)) ?? [];

    return this.medicalHistories;
  }

  async getVideocallCredentials() {
    this.videoCredentials =
      (await this.medConnectProvider.getVideocallCredentials()) ?? [];

    return this.videoCredentials;
  }
}
