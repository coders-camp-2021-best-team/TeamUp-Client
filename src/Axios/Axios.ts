import axios, { AxiosResponse } from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    }
});

const response = <T>(response: AxiosResponse<T>) => response;

export const request = {
    get: <T>(url: string) => instance.get<T>(url).then(response),
    post: <T>(url: string, body: Record<string, unknown>) =>
        instance.post<T>(url, body).then(response),
    put: <T>(url: string, body: Record<string, unknown>) =>
        instance.put<T>(url, body).then(response),
    delete: <T>(url: string) => instance.delete<T>(url).then(response)
};

export const agent = {
    MainPage
};
