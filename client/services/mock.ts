import { MedConnectProvider } from "./provider";
import { responseMiddleware } from "@/middlewares/response";
import { Specialty } from "@/types/specialty";
import { Doctor } from "@/types/doctor";

// Este archivo es un servicio simulado que vamos a usar cuando no podamos usar el backend
// No borrar los comentarios de las distintas respuestas con los distintos código de error
export class MockService implements MedConnectProvider {
    wait = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
    };

    getSpecialties = async (): Promise<Specialty[] | undefined> => {
        await this.wait();
        const res = {
            status: 200,
            data: [
                {
                    _id: "1",
                    name: "Medicina General",
                    image_url: "general_medicine"
                },
                {
                    _id: "2",
                    name: "Oftalmología",
                    image_url: "ophtamology"
                },
                {
                    _id: "3",
                    name: "Dermatología",
                    image_url: "dermatology"
                },
                {
                    _id: "4",
                    name: "Cardiología",
                    image_url: "cardiology"
                },
                {
                    _id: "5",
                    name: "Ginecología",
                    image_url: "gynecology"
                },
                {
                    _id: "6",
                    name: "Oncología",
                    image_url: "oncology"
                },
                {
                    _id: "7",
                    name: "Odontología",
                    image_url: "odontology"
                },
                {
                    _id: "8",
                    name: "Traumatología",
                    image_url: "orthopedics"
                },
                {
                    _id: "9",
                    name: "Otorrinonaringología",
                    image_url: "otolaryngology"
                },
            ],
        };
        // const res = {
        //     status: 500,
        //     data: [],
        // };

        return responseMiddleware(res);
    };

    getDoctorsByIdSpecialty = async (id: string): Promise<Doctor[] | undefined> => {
        await this.wait();
        return [
            {
                _id: "1",
                name: "John Doe",
                specialtyId: "1",
            },
            {
                _id: "2",
                name: "Jenn Doe",
                specialtyId: "1",
            },
        ];
    };
}