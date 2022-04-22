export type RegisterValues = {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    birthday: string;
    password: string;
    confirmPwd: string;
};
export type LoginValues = {
    username: string;
    password: string;
    rememberMe: boolean;
};
export type ForgotPasswordValues = {
    email: string;
};
export type ResetPasswordValues = {
    password: string;
    confirmPwd: string;
};
