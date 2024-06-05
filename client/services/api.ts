import axios from "axios";
import { MedConnectProvider } from "./provider";
import { responseMiddleware } from "@/middlewares/response";
import { API_URL } from "@/constants";
import { Specialty } from "@/types/specialty";
import { Doctor } from "@/types/doctor";
import { AvailableAppointments } from "@/types/available-appointment";
import { ScheduledAppointmentsByIdPatient } from "@/types/scheduled-appointment";

export class WebApiService implements MedConnectProvider {
    getSpecialties = async (): Promise<Specialty[] | undefined> => {
        try {
            const res = await axios.get(`${API_URL}/api/specialty`);
            if (res) {
                return responseMiddleware(res?.data);
            } else {
                throw new Error("error!");
            }
        } catch (err: any) {
            if (err.message === "Network Error") {
                throw new Error("Error de configuración de Axios, revisar ip o archivo constants");
            } else {
                throw new Error("Error!");
            }
        }
    };

    getDoctorsByIdSpecialty = async (id: string): Promise<Doctor[] | undefined> => {
        try {
            const res = await axios.get(`${API_URL}/api/doctor?specialtyId=${id}`);
            if (res) {
                return responseMiddleware(res?.data);
            } else {
                throw new Error("error!");
            }
        } catch (err: any) {
            if (err.message === "Network Error") {
                throw new Error("Error de configuración de Axios, revisar ip o archivo constants");
            } else {
                throw new Error("Error!");
            }
        }
    };

    getAvailableAppointmentsByIdDoctor = async (id: string): Promise<AvailableAppointments[] | undefined> => {
        try {
            const res = await axios.get(`${API_URL}/api/available-appointment?doctorId=${id}&taken=false`);
            if (res) {
                return responseMiddleware(res?.data);
            } else {
                throw new Error("error!");
            }
        } catch (err: any) {
            if (err.message === "Network Error") {
                throw new Error("Error de configuración de Axios, revisar ip o archivo constants");
            } else {
                throw new Error("Error!");
            }
        }
    };

    getUpcomingAppointmentsByIdPatient = async (id: string): Promise<ScheduledAppointmentsByIdPatient[] | undefined> => {
        return;
    };

    getCompletedAppointmentsByIdPatient = async (id: string): Promise<ScheduledAppointmentsByIdPatient[] | undefined> => {
        return;
    };

}
