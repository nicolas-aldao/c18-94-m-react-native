import axios from "axios";
import { MedConnectProvider } from "./provider";
import { responseMiddleware } from "@/middlewares/response";
import { API_URL } from "@/constants";
import { Specialty } from "@/types/specialty";
import { Doctor } from "@/types/doctor";

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

    getDoctorsByIdSpecialty = async (ids: string): Promise<Doctor[] | undefined> => {
        // const idsQueryString = ids?.join(",");
        // const res = await axios.get(`${API_URL}/doctor/list?specialtiesIds=${idsQueryString}`);
        // if (res?.request?.status === 200) {
        //     return res.data;
        // } else {
        //     throw new Error("error!");
        // }
        return;
    };

}
