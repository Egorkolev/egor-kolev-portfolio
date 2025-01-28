import { UseFormReturn } from "react-hook-form";

export interface FormType {
    email: string;
    fullName: string;
    description: string;
    [key: string]: unknown;
}

export interface FormProps {
    form: UseFormReturn<FormType>;
    sendEmail: (data: FormType) => Promise<void>;
    showToast: boolean;
    responseData: unknown;
}