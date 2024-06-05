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
    method?: string;
    initialData?: any;
    param?: any;
    body?: any;
    refresh?: boolean;
};

export const useFetch = <T>({ serviceMethod, method = 'GET', param, body, initialData = [], refresh = false }: useFetchOptions): ApiResponse<T> => {
    const [data, setData] = useState<any | undefined>(initialData);
    const [isLoading, setIsLoading] = useState(method === 'GET');
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined
    );

    const fetchData = async () => {
        try {
            let response;
            if (method === 'POST') {
                if (body) {
                    setIsLoading(true)
                    response = await medConnectService[serviceMethod](body);
                }
            } else {
                response = await medConnectService[serviceMethod](param);
            }
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
    }, [serviceMethod, body]);

    useEffect(() => {
        if (refresh) {
            setIsLoading(true);
            fetchData();
        }
    }, [refresh]);

    return { data: data!, isLoading, errorMessage };
}
