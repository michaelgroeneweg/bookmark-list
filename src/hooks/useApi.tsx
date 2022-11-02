import { useState, useEffect } from 'react';
import axios from "axios";

export const useApi = (endpoint: string, access_token: string) => {

    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            'Access-Control-Allow-Origin': '*',
            token: access_token ? `${access_token}` : '',
        },
    })

    const [data, setData] = useState<any>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<[]>([]);

    if(!loading) { return; }

    const get = async (payload: any) => {
        setLoading(true);
        setError(undefined)

        return api
            .get(endpoint, payload)
            .then((res) => {
                setData(res)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => (setLoading(false)))
    }

    const post = async (payload: any) => {
        setLoading(true);
        setError(undefined)

        return api
            .post(endpoint, payload)
            .then((res) => {
                setData(res)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => (setLoading(false)))
    }



    return ({
        data,
        loading,
        error,
        get,
        post
    });
};

export default useApi