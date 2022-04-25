export type Login = {
    username: string;
    password: string;
};

export type Feed = {
    recommendedUser: User | null;

    createdOn: string;
};

export type User = {
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
    avatar: string | null;

    skills?: UserSkill[];
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

export class QueryPostDto {
    q?: string;
    take?: number;
    skip?: number;
    sort?: 'ASC' | 'DESC';
}

export type Post = {
    id: string;
    author: User;
    categories: PostCategory[];
    title: string;
    body: string;
    createdOn: string;
    updatedOn: string;
};

export type PostCategory = {
    id: string;
    name: string;
};

export type PostAttachment = {
    key: string;
};

export type PostVotes = {
    upvotes: number;
    downvotes: number;
    me: PostVote | null;
};

export type PostVote = {
    id: string;
    user: User;
    type: PostVoteType;
};

export enum PostVoteType {
    UPVOTE = 'UPVOTE',
    DOWNVOTE = 'DOWNVOTE'
}

export enum UserSwipeType {
    LIKE = 'LIKE',
    DISLIKE = 'DISLIKE'
}

export type UserSwipe = {
    id: string;
    target: User;
    status: UserSwipeType;
    updatedOn: string;
};

export type RequestPasswordReset = {
    email: string;
};

export type ResetPassword = {
    password: string;
    confirm_password: string;
};

export type UpdateUserDto = {
    current_password: string;
    email?: string;
    birthdate?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    biogram?: string;
    new_password?: string;
};

export type CreatePost = {
    title: string;
    body: string;
    categories: string[];
};

export type ChatRoom = {
    id: string;
    recipient1: User;
    recipient2: User;

    messages?: Message[];
};

export type Message = {
    id: string;
    createdOn: string;
    chatroom: ChatRoom;
    author: User;
    content: string;
};
