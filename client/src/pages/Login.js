import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/jwt-auth";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

function Login() {
    const [login, { error }] = useMutation(LOGIN_USER);
    const [errorMessage, setErrorMessage] = useState("");
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    });


    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
        setErrorMessage("");
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            
            Auth.login(data.loginUser.token);
            setFormState({
                email: '',
                password: '',
            });
        } catch (error) {
            setErrorMessage("Incorrect email and/or password!")
        }
    };

    return (
        <div className="flex flex-col items-center secFont mt-24 h-full">
            <form className="flex flex-col items-center gap-4 p-6 w-96" onSubmit={handleFormSubmit}>
                <h1 className="text-3xl border-b border-green-800 w-full text-center pb-2">Login</h1>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">EMAIL</span>
                    </label>
                    <input
                        className="input border border-black w-full max-w-xs rounded-none"
                        type="email"
                        name="email"
                        placeholder="user@email.com"
                        value={formState.email}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">PASSWORD</span>
                    </label>
                    <input
                        className="input border border-black w-full max-w-xs rounded-none"
                        type="password"
                        name="password"
                        placeholder="password"
                        value={formState.password}
                        onChange={handleFormChange}
                    />
                </div>
                <button className="bg-green-900 text-white hover:bg-green-800 px-3 py-2 w-32" type="submit">SIGN IN</button>
                {error && <h2 className=" text-red-700">{errorMessage}</h2>}
                <Link className="my-4 hover:underline" to="/register">Create Account</Link>
            </form>

        </div>
    )
};

export default Login;