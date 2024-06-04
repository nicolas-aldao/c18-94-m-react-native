export interface ScheduledAppointmentsByIdPatient {
    _id: string;
    finished: boolean;
    patientId: string;
    doctorName: string;
    doctorImg: string;
    specialtyName: string;
    date: string;
    timeId: number;
}