export type Login = {
    username: string;
    password: string;
};

export enum UserAccountRole {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export enum UserAccountStatus {
    BANNED = 'BANNED',
    UNVERIFIED = 'UNVERIFIED',
    ACTIVE = 'ACTIVE'
}

export enum UserActivityStatus {
    ONLINE = 'ONLINE',
    IDLE = 'IDLE',
    DO_NOT_DISTURB = 'DO_NOT_DISTURB',
    OFFLINE = 'OFFLINE'
}

export interface User {
    id: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    birthdate: string;
    biogram: string;
    role: UserAccountRole;
    account_status: UserAccountStatus;
    activity_status: UserActivityStatus;
    avatar?: string;
}

export type Register = {
    email: string;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    birthdate: string;
};

export type MappedResponse<T> = {
    data?: boolean | T;
    isLoading: boolean;
    isError: boolean;
};
