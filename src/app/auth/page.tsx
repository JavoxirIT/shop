'use client';

import React, { useEffect, useRef } from 'react';
import style from '@/style/auth.module.css';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import encrypt from 'config/crypto';

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(8, 'Too Long!')
        .required('Pssword is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email address is required!'),
});

const SALE_COUNT = 50;

export default function Page() {
    const secret = encrypt('salon', 'qalay');

 
    console.log(secret);
    const animationRefs = useRef<(number | null)[]>(
        new Array(SALE_COUNT).fill(null)
    );
    useEffect(() => {
        const wrapper = document.querySelector(
            `.${style.auth_wrapper}`
        ) as HTMLElement | null;
        if (!wrapper) return;

        const saleElements = document.querySelectorAll(
            `.${style.floating_text}`
        );
        if (!saleElements.length) return;

        const wrapperWidth = wrapper.clientWidth;
        const wrapperHeight = wrapper.clientHeight;

        saleElements.forEach((textElement, index) => {
            if (!(textElement instanceof HTMLElement)) return;

            let x = Math.random() * (wrapperWidth - textElement.clientWidth);
            let y = Math.random() * (wrapperHeight - textElement.clientHeight);
            let dx = (Math.random() * 1 + 1) * (Math.random() > 0.5 ? 1 : -1);
            let dy = (Math.random() * 1 + 1) * (Math.random() > 0.5 ? 1 : -1);

            const animate = () => {
                x += dx;
                y += dy;

                if (x <= 0 || x + textElement.clientWidth >= wrapperWidth) {
                    dx = -dx;
                }

                if (y <= 0 || y + textElement.clientHeight >= wrapperHeight) {
                    dy = -dy;
                }

                textElement.style.transform = `translate(${x}px, ${y}px) rotate(0deg)`;

                animationRefs.current[index] = requestAnimationFrame(animate);
            };

            animationRefs.current[index] = requestAnimationFrame(animate);
        });

        return () => {
            animationRefs.current.forEach(ref => {
                if (ref) cancelAnimationFrame(ref);
            });
        };
    }, []);

    return (
        <div className={style.auth_wrapper}>
            {[...Array(SALE_COUNT)].map((_, i) => (
                <div key={i} className={style.floating_text}>
                    SALE
                </div>
            ))}
            <header className={style.auth_header}>
                <div className={style.auth_container}>
                    <h1>SALE</h1>
                </div>
            </header>
            <div className={style.auth_form_wrapper}>
                <div className={style.auth_container}>
                    <div className={style.auth_form_container}>
                        <h1 className={style.auth_title}>AUTH</h1>
                        <Formik
                            initialValues={{
                                password: '',
                                email: '',
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                // same shape as initial values
                                console.log(values);
                            }}>
                            {({ errors, touched }) => (
                                <Form className={style.auth_form}>
                                    <div>
                                        <label htmlFor='auth_email'>
                                            EMAIL
                                        </label>
                                        <Field
                                            id='auth_email'
                                            name='email'
                                            type='email'
                                            className={
                                                errors.email && touched.email
                                                    ? `${style.auth_email} ${style.error}`
                                                    : style.auth_email
                                            }
                                        />
                                        {errors.email && touched.email ? (
                                            <div
                                                className={
                                                    style.auth_error_message
                                                }>
                                                {errors.email}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <label htmlFor='auth_password'>
                                            PASSWORD
                                        </label>
                                        <Field
                                            id='auth_password'
                                            name='password'
                                            type='password'
                                            className={
                                                errors.password &&
                                                touched.password
                                                    ? `${style.auth_password} ${style.error}`
                                                    : style.auth_password
                                            }
                                        />
                                        {errors.password && touched.password ? (
                                            <div
                                                className={
                                                    style.auth_error_message
                                                }>
                                                {errors.password}
                                            </div>
                                        ) : null}
                                    </div>
                                    <button type='submit'>Submit</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}
