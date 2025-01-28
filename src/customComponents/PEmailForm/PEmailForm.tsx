"use client";

import React, { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { FormProps, FormType } from './types';
import PButton from '../PButton';
import PInput from '../PInput';
import PTextArea from '../PTextArea';
import PToast from '../PToast';
import AOS from "aos";
import 'aos/dist/aos.css';

const PEmailForm = (props: FormProps): React.JSX.Element => {
    const { form, sendEmail, showToast, responseData, } = props;

          useEffect(() => {
            AOS.init({
              duration: 800,
              once: true,
              offset: 120,
              easing: 'ease-in-out',
            })
          }, []);

    const onSubmit = (data: FormType) => {
        sendEmail(data);
    };

    return (
        <>
            <PToast response={responseData} trigger={showToast} />
            <FormProvider {...form}>
                <form
                    data-aos="fade-right"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="
                        space-y-8 flex-1
                        max-w-[410px] min-w-[285] p-3 border 
                        border-pinkShade 
                        bg-pinkShade bg-opacity-5"
                >
                    <PInput
                        {...form.register("email", {
                            required: "Email is Required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email"
                            }
                        })}
                        name="email" 
                        type="email"  
                        label={"Email"} 
                        placeholder="some@gmail.com*"
                    />
                    <PInput 
                        {...form.register("fullName", {
                            required: "Name is required",
                            maxLength: {
                                value: 20,
                                message: "Name characters max - 20"
                            }
                        })} 
                        name="fullName" 
                        type="text" 
                        label={"Name"}
                        placeholder="Add your name*"
                    />
                    <PTextArea
                        {...form.register("description", {
                            required: "Description is required",
                        })}
                        name="description"
                        label={"Description"}
                        placeholder={" Add description*"}
                    />
                    <PButton className="dark:shadow-lg dark:shadow-gray" type="submit" label="Send" />
                </form>
            </FormProvider>
        </>
    )
}

export default PEmailForm;