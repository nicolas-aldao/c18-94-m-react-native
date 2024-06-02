import { MedConnectProvider } from "./provider";
import { responseMiddleware } from "@/middlewares/response";
import { Specialty } from "@/types/specialty";
import { Doctor } from "@/types/doctor";
import { AvailableAppointments } from "@/types/available-appointment";

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
        const res = {
            status: 200,
            data: [
                {
                    _id: "1",
                    user: {
                        _id: "1a",
                        email: "email1@example.com",
                        password: "password",
                        name: "John",
                        address: "123 Main St",
                        birthDate: "1990-01-01",
                        gender: "male",
                        nationality: "American",
                        profile_pic: "https://www.figma.com/component/f60646322e81b0a20c33e12655f56adce131845a/thumbnail?ver=2259%3A571&fuid=1375887789832720451",
                        __v: 0,
                    },
                    specialty: {
                        _id: "s1",
                        name: "Cardiology",
                        __v: 0,
                    },
                    __v: 0,
                },
                {
                    _id: "2",
                    user: {
                        _id: "2a",
                        email: "email2@example.com",
                        password: "password",
                        name: "Jane",
                        address: "456 Oak St",
                        birthDate: "1985-02-02",
                        gender: "female",
                        nationality: "British",
                        profile_pic: "https://www.figma.com/component/f9d9cf5464062cbc00d20745c56d83cab41f779e/thumbnail?ver=2243%3A551&fuid=1375887789832720451",
                        __v: 0,
                    },
                    specialty: {
                        _id: "s2",
                        name: "Dermatology",
                        __v: 0,
                    },
                    __v: 0,
                },
                {
                    _id: "3",
                    user: {
                        _id: "3a",
                        email: "email3@example.com",
                        password: "password",
                        name: "Alice",
                        address: "789 Pine St",
                        birthDate: "1992-03-03",
                        gender: "female",
                        nationality: "Canadian",
                        profile_pic: "https://www.figma.com/component/f167518a41e1f2bf689e78b95aa22ba1036703a4/thumbnail?ver=2243%3A565&fuid=1375887789832720451",
                        __v: 0,
                    },
                    specialty: {
                        _id: "s3",
                        name: "Endocrinology",
                        __v: 0,
                    },
                    __v: 0,
                },
                {
                    _id: "4",
                    user: {
                        _id: "4a",
                        email: "email4@example.com",
                        password: "password",
                        name: "Bob",
                        address: "321 Elm St",
                        birthDate: "1980-04-04",
                        gender: "male",
                        nationality: "Australian",
                        profile_pic: "https://www.figma.com/component/84b4a3264661952ea89fc34693afae90f7ae5067/thumbnail?ver=2259%3A574&fuid=1375887789832720451",
                        __v: 0,
                    },
                    specialty: {
                        _id: "s4",
                        name: "Gastroenterology",
                        __v: 0,
                    },
                    __v: 0,
                },
                {
                    _id: "5",
                    user: {
                        _id: "5a",
                        email: "email5@example.com",
                        password: "password",
                        name: "Charlie",
                        address: "654 Maple St",
                        birthDate: "1995-05-05",
                        gender: "male",
                        nationality: "Irish",
                        profile_pic: "https://www.figma.com/component/c12f5d74260c548aa793491e48148b3eee6993d6/thumbnail?ver=2243%3A536&fuid=1375887789832720451",
                        __v: 0,
                    },
                    specialty: {
                        _id: "s5",
                        name: "Hematology",
                        __v: 0,
                    },
                    __v: 0,
                },
                {
                    _id: "6",
                    user: {
                        _id: "6a",
                        email: "email6@example.com",
                        password: "password",
                        name: "Diana",
                        address: "987 Birch St",
                        birthDate: "1988-06-06",
                        gender: "female",
                        nationality: "Spanish",
                        profile_pic: "https://www.figma.com/component/e95f1ee4e1cd6bade5a2f1192032d06e6dd39eda/thumbnail?ver=2243%3A539&fuid=1375887789832720451",
                        __v: 0,
                    },
                    specialty: {
                        _id: "s6",
                        name: "Neurology",
                        __v: 0,
                    },
                    __v: 0,
                },
                {
                    _id: "7",
                    user: {
                        _id: "7a",
                        email: "email7@example.com",
                        password: "password",
                        name: "Eve",
                        address: "159 Cedar St",
                        birthDate: "1993-07-07",
                        gender: "female",
                        nationality: "German",
                        profile_pic: "https://www.figma.com/component/b5f9408dbf7d39ea3c59e5c575edc4d0687f8ea5/thumbnail?ver=2243%3A542&fuid=1375887789832720451",
                        __v: 0,
                    },
                    specialty: {
                        _id: "s7",
                        name: "Oncology",
                        __v: 0,
                    },
                    __v: 0,
                },
                {
                    _id: "8",
                    user: {
                        _id: "8a",
                        email: "email8@example.com",
                        password: "password",
                        name: "Frank",
                        address: "753 Walnut St",
                        birthDate: "1983-08-08",
                        gender: "male",
                        nationality: "French",
                        profile_pic: "https://www.figma.com/component/0e4e98e55d60f1f0fb22257c7f92fc59420cfea8/thumbnail?ver=2243%3A566&fuid=1375887789832720451",
                        __v: 0,
                    },
                    specialty: {
                        _id: "s8",
                        name: "Pediatrics",
                        __v: 0,
                    },
                    __v: 0,
                },
                {
                    _id: "9",
                    user: {
                        _id: "9a",
                        email: "email9@example.com",
                        password: "password",
                        name: "Grace",
                        address: "852 Chestnut St",
                        birthDate: "1991-09-09",
                        gender: "female",
                        nationality: "Italian",
                        profile_pic: "https://www.figma.com/component/49514abdc2d5f8bb79ac3cefd0ac721887902135/thumbnail?ver=2267%3A619&fuid=1375887789832720451",
                        __v: 0,
                    },
                    specialty: {
                        _id: "s9",
                        name: "Psychiatry",
                        __v: 0,
                    },
                    __v: 0,
                },
            ]
        };
        return responseMiddleware(res);
    };

    getAvailableAppointmentsByIdDoctor = async (id: string): Promise<AvailableAppointments[] | undefined> => {
        await this.wait();
        const res = {
            status: 200,
            data: [
                {
                    _id: "1",
                    doctorId: "1",
                    date: "2024-06-04",
                    timeId: 1,
                },
                {
                    _id: "2",
                    doctorId: "1",
                    date: "2024-06-04",
                    timeId: 2,
                },
                {
                    _id: "3",
                    doctorId: "1",
                    date: "2024-06-04",
                    timeId: 3,
                },
                {
                    _id: "4",
                    doctorId: "1",
                    date: "2024-06-06",
                    timeId: 1,
                },
                {
                    _id: "5",
                    doctorId: "1",
                    date: "2024-06-10",
                    timeId: 1,
                },
                {
                    _id: "6",
                    doctorId: "1",
                    date: "2024-06-10",
                    timeId: 2,
                },
                {
                    _id: "6",
                    doctorId: "1",
                    date: "2024-06-11",
                    timeId: 1,
                },
            ]
        };
        return responseMiddleware(res);
    };
}