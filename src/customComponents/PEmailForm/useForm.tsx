"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

// Form validation schema
const contactFormSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ANIMATION_VARIANTS = {
    container: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    },
    field: {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    }
};

export default function UseJsForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            fullName: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            // TODO: Implement email sending logic with EmailJS
            console.log('Form submitted:', data);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            toast.success('Message sent successfully! I\'ll get back to you soon.');
            reset();
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Failed to send message. Please try again.');
        }
    };

    return (
        <motion.div
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="card"
        >
            <div className="card-header">
                <h3 className="text-heading-lg">Send me a message</h3>
                <p className="text-muted-foreground text-sm">
                    I&apos;ll get back to you as soon as possible
                </p>
            </div>

            <div className="card-content">
                <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                    <div className="form-field">
                        <label htmlFor="fullName" className="form-label">
                            Full Name
                        </label>
                        <input
                            {...register('fullName')}
                            type="text"
                            id="fullName"
                            className="form-input w-full border-[#9561ff]/40"
                            placeholder="Enter your name"
                        />
                        {errors.fullName && (
                            <p className="form-error">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            {...register('email')}
                            type="email"
                            id="email"
                            className="form-input w-full border-[#9561ff]/40"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="form-error">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="message" className="form-label">
                            Message
                        </label>
                        <textarea
                            {...register('message')}
                            id="message"
                            className="form-textarea w-full border-[#9561ff]/40"
                            placeholder="Write your message here..."
                            rows={5}
                        />
                        {errors.message && (
                            <p className="form-error">{errors.message.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="form-button w-full"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </motion.div>
    );
}
