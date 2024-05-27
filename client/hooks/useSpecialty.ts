// ejemplo de fetch para especialidades
import { useEffect, useState } from "react";
import { medConnectService } from "@/services/main";
import { Specialty } from "@/types/specialty";

export const useFetch = () => {
    const [specialties, setSpecialties] = useState<Specialty[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined
    );

    const fetchData = async () => {
        try {
            await medConnectService.getSpecialties()
                .then(items => setSpecialties(items));
            return;
        } catch (err: any) {
            setErrorMessage(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { specialties, isLoading, errorMessage };
};