export type SignupStep = "signup" | "birthday";

export interface SignUpData {
    email: string;
    name: string;
    password: string;
    username: string;
    birthday: Birthday;
}

interface Birthday {
    year: number;
    month: number;
    day: number;
}

const currentDate = new Date();

export const initialData: SignUpData = {
    email: "",
    name: "",
    username: "",
    password: "",
    birthday: {
        year: currentDate.getFullYear() - 1,
        month: currentDate.getMonth() + 1,
        day: currentDate.getDate(),
    }
};

export interface SignUpFormData {
    email: string,
    name: string;
    username: string,
    password: string,
}

export interface BirthdayFormData {
    year: number;
    month: number;
    day: number;
}

export type onNextArgument = Omit<SignUpFormData, "repeated_password">

// ---------------------
