import React from "react";
import { Link, Head } from "@inertiajs/react";

import { Input } from "@/Components";

const Signup = () => {
    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>

            <div className="grid min-h-screen grid-cols-2">
                <div className="relative max-w-lg pl-16">
                    <header className="mb-6">
                        <img
                            className="block mb-4"
                            width={78}
                            src="/images/logo.png"
                            alt=""
                        />

                        <h1 className="mb-2 text-3xl font-bold">Sign Up</h1>
                        <p className="text-[#A3AED0]">
                            Fill data below to sign up
                        </p>
                    </header>

                    <div className="space-y-6">
                        <button
                            type="button"
                            className="w-full btn btn-neutral"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.7874 10.2249C19.7874 9.56659 19.7291 8.94159 19.6291 8.33325H10.2124V12.0916H15.6041C15.3624 13.3249 14.6541 14.3666 13.6041 15.0749V17.5749H16.8207C18.7041 15.8333 19.7874 13.2666 19.7874 10.2249Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M10.2126 20.0001C12.9126 20.0001 15.1709 19.1001 16.8209 17.5751L13.6043 15.0751C12.7043 15.6751 11.5626 16.0418 10.2126 16.0418C7.60427 16.0418 5.39593 14.2834 4.60427 11.9084H1.2876V14.4834C2.92926 17.7501 6.30427 20.0001 10.2126 20.0001Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M4.60407 11.9083C4.39574 11.3083 4.2874 10.6666 4.2874 9.99993C4.2874 9.33327 4.40407 8.6916 4.60407 8.0916V5.5166H1.2874C0.604068 6.8666 0.212402 8.38327 0.212402 9.99993C0.212402 11.6166 0.604068 13.1333 1.2874 14.4833L4.60407 11.9083Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M10.2126 3.95833C11.6876 3.95833 13.0043 4.46667 14.0459 5.45834L16.8959 2.60833C15.1709 0.991667 12.9126 0 10.2126 0C6.30427 0 2.92926 2.25 1.2876 5.51667L4.60427 8.09167C5.39593 5.71667 7.60427 3.95833 10.2126 3.95833Z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Sign up with Google
                        </button>

                        <div className="divider">
                            <span className="text-neutral-content">or</span>
                        </div>

                        <form className="space-y-3">
                            <Input
                                type="email"
                                label="Email*"
                                placeholder="mail@simmmple.com"
                            />

                            <Input
                                type="text"
                                label="Employee id*"
                                placeholder="Abs123"
                            />

                            <Input
                                type="text"
                                label="Phone Number*"
                                placeholder="+62 1234 5678 981"
                            />

                            <button
                                type="submit"
                                className="w-full btn btn-primary rounded-2xl"
                            >
                                Connect
                            </button>

                            <p>
                                Already have an account?{" "}
                                <Link
                                    href="/signin"
                                    className="font-bold text-primary"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>

                    <footer className="absolute bottom-4">
                        <p className="text-neutral-content">
                            © 2022 LamteubaKupi. All Rights Reserved.{" "}
                        </p>
                    </footer>
                </div>

                <img
                    className="block object-contain h-screen ml-auto"
                    src="/images/long-black.png"
                    alt=""
                />
            </div>
        </>
    );
};

export default Signup;
