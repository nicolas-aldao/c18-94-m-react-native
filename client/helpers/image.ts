import general_medicine from "../assets/images/specialties/general_medicine.png";
import cardiology from "../assets/images/specialties/cardiology.png";
import dermatology from "../assets/images/specialties/dermatology.png";
import gynecology from "../assets/images/specialties/gynecology.png";
import odontology from "../assets/images/specialties/odontology.png";
import oncology from "../assets/images/specialties/oncology.png";
import ophtamology from "../assets/images/specialties/ophtamology.png";
import orthopedics from "../assets/images/specialties/orthopedics.png";
import otolaryngology from "../assets/images/specialties/otolaryngology.png";

export const getSpecialtyImage = (specialty: string) => {
    switch (specialty.toLowerCase()) {
        case 'general_medicine':
            return general_medicine;
        case 'cardiology':
            return cardiology;
        case 'dermatology':
            return dermatology;
        case 'gynecology':
            return gynecology;
        case 'odontology':
            return odontology;
        case 'oncology':
            return oncology;
        case 'ophtamology':
            return ophtamology;
        case 'orthopedics':
            return orthopedics;
        case 'otolaryngology':
            return otolaryngology;
        default:
            return general_medicine;
    }
};