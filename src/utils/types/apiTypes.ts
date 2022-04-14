export type Login = {
    username: string;
    password: string;
};

export type MappedResponse<T> = {
    data?: boolean | T;
    isLoading: boolean;
    isError: boolean;
};

export type User = {
    id: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    birthdate: Date;
    biogram: string;
    role: UserAccountRole;
    account_status: UserAccountStatus;
    activity_status: UserActivityStatus;
    avatar?: string;

    skills: UserSkill[];
};

export type UserSkill = {
    id: string;
    level: ExperienceLevel;
};

export type ExperienceLevel = {
    id: string;
    name: string;
    game: Game;
};

export type Game = {
    id: string;
    name: string;
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
