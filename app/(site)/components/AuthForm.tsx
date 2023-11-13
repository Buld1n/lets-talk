'use client';

import React, { useCallback, useState } from 'react';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Input from "../../components/inputs/input";
import Button from "../../components/Button";
import AuthSocialButton from "./AuthSocialButton";
import {BsGithub, BsGoogle} from "react-icons/bs";

type Variant = 'login' | 'register';


const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('login');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'login') {
            setVariant('register');
        } else {
            setVariant('login');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'register') {
            // register user
        }

        if (variant === 'login') {
            // login user
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);
        // social login
    }

    return (
        <div
            className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md
            "
        >
            <div
                className="
                bg-white
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
                "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'register' && (
                    <Input
                        id="name"
                        label="Name"
                        register={register}
                        errors={errors}
                    />)}
                    <Input
                        id="email"
                        label="Email address"
                        type="email"
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        register={register}
                        errors={errors}
                    />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                            >
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="
                            absolute
                            inset-0
                            flex
                            items-center"
                        >
                            <div
                                className="
                                w-full
                                border-t
                                border-gray-300"
                            />
                        </div>
                        <div
                            className="
                            relative
                            flex
                            justify-center
                            text-sm
                            "
                        >
                            <span
                                className="
                                px-2
                                bg-white
                                text-gray-500"
                            >
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                    </div>
                </div>

                <div className="
                    flex
                    gap-2
                    justify-center
                    text-sm
                    mt-6
                    px-2
                    text-gray-500
                ">
                    <div>
                        {variant === 'login' ? 'New to us?' : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className="
                        underline cursor-pointer
                        "
                    >
                        {variant === 'login' ? 'Create an account' : 'Sign in'}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AuthForm;
