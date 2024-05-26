import { MedConnectProvider } from "./provider";
import { responseMiddleware } from "@/middlewares/response";
import { Specialty } from "@/types/specialty";
import { Doctor } from "@/types/doctor";

// Este archivo es un servicio simulado que vamos a usar cuando no podamos usar el backend
// No borrar los comentarios de las distintas respuestas con los distintos código de error
export class MockService implements MedConnectProvider {
    wait = async () => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
    };

    getSpecialties = async (): Promise<Specialty[] | undefined> => {
        await this.wait();
        const res = {
            status: 200,
            data: [
                {
                    _id: "1",
                    name: "Pediatria",
                },
                {
                    _id: "2",
                    name: "Medico Clínico",
                },
                {
                    _id: "3",
                    name: "Odontología",
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