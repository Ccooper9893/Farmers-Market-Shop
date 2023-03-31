import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT, DELETE_PRODUCT } from '../../utils/mutations';

function ProductList({ product, onDeleteProduct }) {
    const [price, setPrice] = useState(product.price);
    const [stock, setStock] = useState(product.stock);

    const [updateProduct, { updateError }] = useMutation(UPDATE_PRODUCT);
    const [deleteProduct, { deleteError }] = useMutation(DELETE_PRODUCT);
    const [message, setMessage] = useState('');

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const priceFloat = parseFloat(price);
            const stockInt = parseInt(stock);
            const { data } = await updateProduct({ variables: { price: priceFloat, stock: stockInt, updateProductId: product._id } });
            if(data) {
                setMessage('Successfully updated!');
            };
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            const { data } = await deleteProduct({variables: {deleteProductId: id}});
            onDeleteProduct(id);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        name === 'price' ? setPrice(value) : setStock(value);
        setMessage('');
    };

    return (
        <form className=" w-96 m-auto my-8" onSubmit={handleUpdate}>
            <figure><img class="m-auto w-72" src={product.image} alt={product.name} /></figure>
            <div className="m-3 flex justify-center flex-col">
                <h2 className="font-bold text-xl">{product.name}</h2>
                <p>{product.product_description}</p>
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
                    <button className="btn my-3 bg-red-500 shadow-lg hover:bg-red-700 mx-3" onClick={() => handleDelete(product._id)}>Delete</button>
                </div>
            </div>
                {message ? (<p>{message}</p>) : null}
        </form>
    )
};

export default ProductList;