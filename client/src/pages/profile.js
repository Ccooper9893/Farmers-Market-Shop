import React from "react";
import { useQuery } from "@apollo/client";
import Auth from "../utils/jwt-auth";
import { GET_ME } from "../utils/queries";

function Profile() {

    const { data } = useQuery(GET_ME);
    let user;

    if (data) {
        user = data.user;
    }
    
    return (
        <h1>Profile page</h1>
    )
};

export default Profile;