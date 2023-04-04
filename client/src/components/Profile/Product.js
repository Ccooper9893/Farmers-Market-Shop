import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT, DELETE_PRODUCT } from '../../utils/mutations';
import notePaperbg from '../../Images/notepaper.webp';

function Product({ product, onDeleteProduct }) {

    const [price, setPrice] = useState(product.price);
    const [stock, setStock] = useState(product.stock);

    const [updateProduct] = useMutation(UPDATE_PRODUCT);
    const [deleteProduct] = useMutation(DELETE_PRODUCT);

    const [message, setMessage] = useState(''); //Error messaging if product fails to upload
    const [warning, setWarning] = useState(false); //Are you sure you want to delete product?

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const priceFloat = parseFloat(price);
            const stockInt = parseInt(stock);
            const { data } = await updateProduct({ variables: { price: priceFloat, stock: stockInt, updateProductId: product._id } });
            if (data) {
                setMessage('Successfully updated!');
            };
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteProduct({ variables: { deleteProductId: id } });
            onDeleteProduct(id);

        } catch (error) {
            setMessage('There has been an error.')
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        name === 'price' ? setPrice(value) : setStock(value);
        setMessage('');
    };

    return (
        <form className="w-80 lg:w-72 m-auto my-4  mx-4 grid grid-rows-8 shadow-lg shadow-black" onSubmit={handleUpdate} style={{
            backgroundSize: '15rem',
            backgroundImage: `url(${notePaperbg})`,
            backgroundRepeat: 'repeat',
        }}>
            <h2 className="text-3xl font-bold border-b-black border">{product.name}</h2>
            <div className="m-3 row-span-6">
                <img className="m-auto w-24 rounded-full mt-5" src={product.image} alt={product.name} />
                <p className="text-lg">{product.product_description}</p>
                <div className="my-2">
                    <p>Price $</p>
                    <input
                        className="input p-0 w-32 m-auto text-center border border-black"
                        type="number"
                        name="price"
                        value={price}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div>
                    <p>Stock</p>
                    <input
                        className="input p-0 w-32 m-auto text-center border border-black"
                        type="number"
                        name="stock"
                        value={stock}
                        onChange={handleChange}
                    >
                    </input>
                </div>
            </div>
            <div className="row-span-2">
                {message ? (<p>{message}</p>) : (<p></p>)}
                <button className="btn m-3 shadow-lg  bg-slate-700 " type="submit">Update</button>
                {warning
                    ? (<button className="btn my-3 bg-red-500 shadow-lg hover:bg-red-700 mx-3" type="button" onClick={() => handleDelete(product._id)}>Are you sure?</button>)
                    : <button className="btn my-3 bg-red-500 shadow-lg hover:bg-red-700 mx-3" onClick={() => setWarning(true)}>Delete</button>
                }
            </div>
        </form>
    )
};

export default Product;