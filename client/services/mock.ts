import { MedConnectProvider } from "./provider";
import { Specialty } from "@/types/specialty";
import { Doctor } from "@/types/doctor";

export class MockService implements MedConnectProvider {
    wait = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2500));
    };

    getSpecialties = async (): Promise<Specialty[] | undefined> => {
        await this.wait();
        const res = {
            request: { status: 200 },
            data: [
                {
                    _id: "1",
                    name: "Pediatria",
                },
                {
                    _id: "2",
                    name: "Medico Clínico",
                },
            ],
        };
        return res.data;
        // throw new Error("Error!");
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
        // throw new Error("Error!");
    };
}