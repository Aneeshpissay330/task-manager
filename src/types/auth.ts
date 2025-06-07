interface RegisterUser {
    fullName: string;
    email: string;
    password: string;
    phone: string;
}

interface LoginUser {
    email: string;
    password: string;
}

interface VerifyUser {
    email: string;
    otp: string;
}

interface ForgotPassword {
    email: string;
}

interface ResetPassword {
    newPassword: string;
    token: string;
}

export type {
    RegisterUser,
    LoginUser,
    VerifyUser,
    ForgotPassword,
    ResetPassword
};