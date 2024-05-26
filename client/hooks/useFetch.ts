import { useEffect, useState } from "react";
import { GENERIC_MESSAGE_ERROR } from "@/constants";
import { MedConnectService } from "@/services/medConnectService";
import { provider } from "../services/main";
import { Specialty } from "@/types/specialty";

export const useFetch = () => {
    const medConnectService = new MedConnectService(provider)

    const [specialties, setSpecialties] = useState<Specialty[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined
    );

    const fetchData = async () => {
        try {
            setIsLoading(true);
            await medConnectService.getSpecialties()
                .then(items => setSpecialties(items));
            return;
        } catch (err: any) {
            setErrorMessage(GENERIC_MESSAGE_ERROR);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { specialties, isLoading, errorMessage };
};