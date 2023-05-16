import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/jwt-auth";
import { LOGIN_USER } from "../utils/mutations";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <Link to="/register">Create an Account</Link>
        </div>
    )
};

export default Login;