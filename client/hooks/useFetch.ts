import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { medConnectService } from '@/services/main';

interface ApiResponse<T> {
    data: T;
    isLoading: boolean;
    errorMessage?: string;
}

type useFetchOptions = {
    serviceMethod: keyof typeof medConnectService;
    initialData?: any;
    param?: any;
    body?: any;
};

export const useFetch = <T>({ serviceMethod, param, body, initialData = [] }: useFetchOptions): ApiResponse<T> => {
    const [data, setData] = useState<any | undefined>(initialData);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined
    );

    const fetchData = async () => {
        try {
            const response = await medConnectService[serviceMethod](param);
            setData(response);
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                setErrorMessage(`Error ${axiosError.response.status}: ${axiosError.response.data}`);
            } else if (axiosError.request) {
                setErrorMessage('No se pudo realizar la solicitud');
            } else {
                setErrorMessage('Error de configuración');
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [
        serviceMethod,
        body]);

    return { data: data!, isLoading, errorMessage };
}
