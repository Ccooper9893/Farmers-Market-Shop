import React, { useState } from "react";
import uploadImage from "../../utils/uploadImage";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";

function NewProduct({onAddProduct}) {

    const [addProduct] = useMutation(ADD_PRODUCT);
    const [formState, setFormState] = useState({
        name: "",
        productDescription: "",
        price: "",
        stock: "",
        category: "Meat",
    });

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        event.preventDefault();
        setMessage('');
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Form validation
        const { name, price, stock, productDescription, category } = formState;
        if (!name || !price || !stock || !productDescription || !category) {
            setMessage('Please provide the required information!');
            return;
        } else {
            setLoading(true);
        };

        const productData = {
            ...formState,
            price: parseFloat(formState.price),
            stock: parseInt(formState.stock)
        };

        //Grabbing imageUrl and appending to productData if valid
        const data = await uploadImage(event);
        if (data) {
            productData.image = data.imageUrl;
        };

        //Adding product to database
        try {
            const { data } = await addProduct({ variables: productData });
            if (data) {
                setMessage('Product Added!');
                setLoading(false);
                onAddProduct(data.addProduct)
            }
        } catch (error) {
            setMessage('There has been an error!')
            console.error(error);
        };

        setFormState({
            name: "",
            productDescription: "",
            price: "",
            stock: "",
            category: "Meat"
        });
    };

    return (
        <div className="secFont">
            <h1 className="text-center font-bold">PRODUCT DETAILS</h1>
            <form
                className="flex flex-col"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
            >
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">NAME</span>
                    </label>
                    <input
                        className="input border border-black w-full max-w-xs rounded-none"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">DESCRIPTION</span>
                    </label>
                    <input
                        className="input border border-black w-full max-w-xs rounded-none"
                        type="text"
                        name="productDescription"
                        value={formState.productDescription}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">PRICE</span>
                    </label>
                    <input
                        className="input border border-black w-full max-w-xs rounded-none"
                        type="number"
                        name="price"
                        value={formState.price}
                        onChange={handleInputChange}
                    />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">STOCK</span>
                    </label>
                    <input
                        className="input border border-black w-full max-w-xs rounded-none"
                        type="number"
                        name="stock"
                        value={formState.stock}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">CATEGORY</span>
                    </label>
                    <select
                        className="select w-full max-w-xs border border-black rounded-none"
                        name="category"
                        value={formState.category}
                        onChange={handleInputChange}
                    >
                        <option value="Meat">Meat</option>
                        <option value="Vegetable">Vegetable</option>
                        <option value="Fruit">Fruit</option>
                        <option value="Bread">Bread</option>
                        <option value="Art">Art</option>
                        <option value="Livestock">Livestock</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">UPLOAD PICTURE</span>
                    </label>
                    <input type="file" name="image" className="file-input  border border-black rounded-none w-full" />
                </div>
                <div className="mx-auto mt-6">
                    {loading
                        ? (<button className="bg-green-900 text-white hover:bg-green-800 px-3 py-3 w-32" type="submit" >Processing...</button>)
                        : <button className="bg-green-900 text-white hover:bg-green-800 px-3 py-3 w-32" type="submit" >Create</button>
                    }
                    {message && (<h3 className="font-bold m-3">{message}</h3>)}
                </div>
            </form>
        </div>
    )
};

export default NewProduct;