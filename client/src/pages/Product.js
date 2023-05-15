import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../utils/queries";

function Product() {
    const { id } = useParams();

    return (
        <h1>Certain Product</h1>
    )
};

export default Product;