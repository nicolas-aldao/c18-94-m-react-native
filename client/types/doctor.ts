import { User } from "./user";
import { Specialty } from "./specialty";

export interface Doctor {
    _id: string;
    user: User,
    specialty: Specialty,
    __v: number
}