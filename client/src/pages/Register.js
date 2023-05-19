import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/jwt-auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

function Register() {

    const [addUser, { loading, error, data }] = useMutation(ADD_USER);
    const [checked, setChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [formState, setFormState] = useState({
        email: "",
        username: "",
        password: "",
        merchant: false,
        businessName: "",
        businessDescription: "",
        phoneNumber: "",
        address: "",
    });

    const handleCheck = () => {
        setChecked(!checked);
    }

    useEffect(() => {
        setFormState((prevState) => ({
            ...prevState,
            merchant: checked,
        }));
        if (!checked) {
            setFormState((prevState) => ({
                ...prevState,
                businessName: "",
                businessDescription: "",
                phoneNumber: "",
                address: "",
                image: "",
            }))
        }
    }, [checked]);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //Grabbing imageUrl and appending to productData if valid
        const data = await uploadImage(event);
        if (data) {
            setFormState({
                ...formState,
                image: data.imageUrl
            })
        };

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
            setFormState({
                email: '',
                password: '',
            });
        } catch (error) {
            console.log(error)
        }
    };

    async function uploadImage(event) {
        const formData = new FormData();
        formData.append("image", event.target.image.files[0]);
        if (formData) {
            try {
                const response = await fetch("/upload", {
                    method: "POST",
                    body: formData,
                });
                return await response.json();

            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center mt-10 h-full">
            <form className="flex flex-col items-center gap-4 p-6 w-96 secFont" onSubmit={handleFormSubmit}>
                <h1 className="text-3xl border-b border-green-800 w-full text-center">Register</h1>
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
                        <span className="label-text text-black">USERNAME</span>
                    </label>
                    <input
                        className="input border border-black w-full max-w-xs rounded-none"
                        type="text"
                        name="username"
                        placeholder="username"
                        value={formState.username}
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
                {checked && <>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-black">BUSINESS NAME</span>
                        </label>
                        <input
                            className="input border border-black w-full max-w-xs rounded-none"
                            type="text"
                            name="businessName"
                            placeholder="name of your business"
                            value={formState.businessName}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-black">UPLOAD PICTURE</span>
                        </label>
                        <input type="file" name="image" className="file-input border border-black rounded-none w-full"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-black">BUSINESS DESCRIPTION</span>
                        </label>
                        <input
                            className="input border border-black w-full max-w-xs rounded-none"
                            type="text"
                            name="businessDescription"
                            placeholder="provide a description"
                            value={formState.businessDescription}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-black">PHONE NUMBER</span>
                        </label>
                        <input
                            className="input border border-black w-full max-w-xs rounded-none"
                            type="tel"
                            name="phoneNumber"
                            placeholder="xxx-xxx-xxxx"
                            value={formState.phoneNumber}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-black">ADDRESS</span>
                        </label>
                        <input
                            className="input border border-black w-full max-w-xs rounded-none"
                            type="text"
                            name="address"
                            placeholder="address"
                            value={formState.address}
                            onChange={handleFormChange}
                        />
                    </div>
                </>}
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text mx-4 secFont">Are you a merchant?</span>
                        <input type="checkbox" className="checkbox checkbox-secondary" onClick={handleCheck} />
                    </label>
                </div>
                <button className="bg-green-900 text-white hover:bg-green-800 px-3 py-2 w-32" type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default Register;