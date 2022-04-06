import { AxiosResponse } from 'axios';

export type Login = {
    email: string;
    password: string;
};

export type TestType = {
    email: string;
    password: string;
};

export type Method = <T>({ ...arg }: T) => Promise<AxiosResponse<T, any>>;
export type Service = {
    [index: string]: Method;
};
export type Agent = {
    [index: string]: Service;
};
