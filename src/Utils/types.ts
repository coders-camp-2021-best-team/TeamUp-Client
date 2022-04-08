export type Login = {
    username: string;
    password: string;
};

export type MappedResponse<T> = {
    data: boolean | T | undefined;
    isLoading: boolean;
    isError: boolean;
};
