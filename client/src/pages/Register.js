import React, { useState, useEffect } from "react";
import Auth from "../utils/jwt-auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import uploadImage from "../utils/uploadImage";

function Register() {

    const [addUser] = useMutation(ADD_USER);
    const [checked, setChecked] = useState(false); //Sign up as merchant?
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [formState, setFormState] = useState({
        email: "",
        password: "",
        merchant: false,
        businessName: "",
        businessDescription: "",
        phoneNumber: "",
        address: "",
        image: "",
    });

    const handleCheck = () => {
        setChecked(!checked);
    }

    useEffect(() => {
        setFormState((prevState) => ({
            ...prevState,
            merchant: checked,
            image: "https://storage.googleapis.com/farmers-market-images/1684473321782-farmlogo.webp"
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
        setErrorMessage("");
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const { email, password, businessName, businessDescription, phoneNumber, address } = formState;

        //Checking for required input
        if (checked && (!email || !password || !businessName || !businessDescription || !phoneNumber || !address)) {
            setErrorMessage("Please provide required information!");
            setLoading(false);
            return;
        } else if (!checked && (!email || !password)) {
            setErrorMessage("Please provide required information!");
            setLoading(false);
            return;
        }
        const userData = {
            ...formState,
        };
        //Uploading image if user is signing up as merchant
        if (checked) {
            const data = await uploadImage(event);
            if (data) {
                userData.image = data.imageUrl
            }
        };

        //Creating the new account
        try {
            console.log(userData);
            const { data } = await addUser({
                variables: { ...userData },
            });

            setLoading(false);
            Auth.login(data.addUser.token);

        } catch (error) {
            console.log(error);
            setErrorMessage("There has been an error!");
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
                        <input type="file" name="image" className="file-input border border-black rounded-none w-full" />
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
                {loading ? (
                <button className="bg-green-900 text-white hover:bg-green-800 px-3 py-2 w-32" type="submit">Processing...</button>
                ): (
                    <button className="bg-green-900 text-white hover:bg-green-800 px-3 py-2 w-32" type="submit">Sign Up</button>
                )}

                {errorMessage && <h2 className="text-red-600">{errorMessage}</h2>}
            </form>
        </div>
    )
};

export default Register;