export type Login = {
    username: string;
    password: string;
};

export type MappedResponse<T> = {
    data?: boolean | T;
    isLoading: boolean;
    isError: boolean;
};
