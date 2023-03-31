import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT, DELETE_PRODUCT } from '../../utils/mutations';

function ProductList({ props }) {
    const [price, setPrice] = useState(props.price);
    const [stock, setStock] = useState(props.stock);

    const [updateProduct, { updateError }] = useMutation(UPDATE_PRODUCT);
    const [deleteProduct, { deleteError }] = useMutation(DELETE_PRODUCT);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const priceFloat = parseFloat(price);
            const stockInt = parseInt(stock);
            const { data } = await updateProduct({ variables: { price: priceFloat, stock: stockInt, updateProductId: props._id } });
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async () => {
        try {
            const { data } = await deleteProduct({variables: {deleteProductId: props._id}});
            if(data) {
                window.location.reload();
            };
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        name === 'price' ? setPrice(value) : setStock(value);
    };

    return (
        <form className=" w-96 m-auto my-8" onSubmit={handleUpdate}>
            <figure><img class="m-auto w-72" src={props.image} alt={props.name} /></figure>
            <div className="m-3 flex justify-center flex-col">
                <h2 className="font-bold text-xl">{props.name}</h2>
                <p>{props.product_description}</p>
                <div className="my-2">
                    <p>Price $</p>
                    <input className="border border-black" type="number" name="price" value={price} onChange={handleChange}></input>
                </div>
                <div>
                    <p>Stock</p>
                    <input className="border border-black" type="number" name="stock" value={stock} onChange={handleChange}></input>
                </div>
                <div className="mt-4">
                    <button className="btn my-3 bg-slate-700 shadow-lg mx-3" type="submit">Update</button>
                    <button className="btn my-3 bg-red-500 shadow-lg hover:bg-red-700 mx-3" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </form>
    )
};

export default ProductList;