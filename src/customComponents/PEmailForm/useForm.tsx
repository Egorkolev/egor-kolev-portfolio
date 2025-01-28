"use client";

import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { FormProps, FormType } from './types';
import PEmailForm from './PEmailForm';

export default function UseJsForm() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [responseData, setResponseData] = useState<any>()
    const [showToast, setShowToast] = useState<boolean>(false);
    
    const form = useForm<FormType>({
        defaultValues: {
            email: "",
            fullName: "",
            description: "",
        }
    });

    useEffect(() => {
        emailjs.init(process.env.PUBLIC_KEY as string);
    }, []);

    const sendEmail = async (data: FormType) => {
        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                {
                    from_name: `${data.fullName} => ${data.email}`,
                    to_name: 'Egor',
                    message: data.description,
                },
                process.env.NEXT_PUBLIC_EMAIL_JS_KEY!
            );
            setShowToast(true);
            setResponseData({message: 'Email sent. I`ll get back to you shortly.'});
            console.log('Email sent:', result.text);
            form.reset();
        } catch (error) {
            setShowToast(true);
            setResponseData({error: 'Oops! Something went wrong. Please try sending your email again.'});
            console.error('Error:', error);
        }
    };

    const props: FormProps = {
        form,
        sendEmail,
        responseData,
        showToast
    };

    return (
        <>
            <PEmailForm {...props} />
        </>
    )
}
