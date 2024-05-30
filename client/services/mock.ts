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
                        profile_pic: "https://randomuser.me/api/portraits/men/1.jpg",
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
                        profile_pic: "https://randomuser.me/api/portraits/women/2.jpg",
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
                        profile_pic: "https://randomuser.me/api/portraits/women/3.jpg",
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
                        profile_pic: "https://randomuser.me/api/portraits/men/4.jpg",
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
                        profile_pic: "https://randomuser.me/api/portraits/men/5.jpg",
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
                        profile_pic: "https://randomuser.me/api/portraits/women/6.jpg",
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
                        profile_pic: "https://randomuser.me/api/portraits/women/7.jpg",
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
                        profile_pic: "https://randomuser.me/api/portraits/men/8.jpg",
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
                        profile_pic: "https://randomuser.me/api/portraits/women/9.jpg",
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
}