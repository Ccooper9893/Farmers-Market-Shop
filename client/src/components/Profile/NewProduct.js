import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";

function NewProduct() {

    const [addProduct, { error }] = useMutation(ADD_PRODUCT);
    const [formState, setFormState] = useState({
        name: "",
        productDescription: "",
        price: "",
        stock: "",
        category: "Meat",
    });
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        event.preventDefault();
        setMessage('');
        const { name, value } = event.target;
        if (name !== "image") {
            setFormState({ ...formState, [name]: value });
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Form validation
        const { name, price, stock, productDescription, category } = formState;
        if (!name || !price || !stock || !productDescription || !category) {
            setMessage('Please provide the required information!');
            return;
        } else {
            setMessage('Uploading...');
        };

        //Grabbing imageUrl
        const data = await uploadImage(event);

        const productData = {
            ...formState,
            image: data.imageUrl,
            price: parseFloat(formState.price),
            stock: parseInt(formState.stock)
        };

        //Adding product to database
        try {
            const { data } = await addProduct({ variables: productData });
            if (data) {
                setMessage('');
                window.location.reload();
            }
        } catch (error) {
            setMessage('Error in adding your product.')
        };

        setFormState({
            name: "",
            productDescription: "",
            price: "",
            stock: "",
            category: "Meat"
        });
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
                console.log(error)
            }
        }
    }

    return (
        <>
            {/* The button to open modal */}
            <label htmlFor="my-modal-4" className="btn w-3/5 mx-auto">
                New Product
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box bg-green-500 mb-20" htmlFor="">
                    <form
                        className="flex justify-center flex-col text-center"
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
                        <h2 className=" text-3xl font-bold">New Product</h2>
                        <label className="label">
                            <span className="label-text font-bold">Name:</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Carrots"
                            className="input input-bordered"
                            value={formState.name}
                            onChange={handleInputChange}
                        />
                        <label className="label">
                            <span className="label-text font-bold">Description:</span>
                        </label>
                        <input
                            type="text"
                            name="productDescription"
                            placeholder="Product description"
                            className="input input-bordered"
                            value={formState.productDescription}
                            onChange={handleInputChange}
                        />
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="label">
                            <input
                                className="input input-bordered"
                                type="text"
                                name="price"
                                placeholder="$4.58"
                                value={formState.price}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label className="label">
                            <span className="label-text font-bold">Stock</span>
                        </label>
                        <label className="label">
                            <input
                                className="input input-bordered"
                                type="text"
                                name="stock"
                                placeholder="20"
                                value={formState.stock}
                                onChange={handleInputChange} />
                        </label>
                        <label className="label">
                            <span className="label-text font-bold">Category:</span>
                        </label>
                        <select className="select w-full max-w-xs" name="category" value={formState.category} onChange={handleInputChange}>
                            <option disabled selected>Choose a category</option>
                            <option value="Meat">Meat</option>
                            <option value="Vegetable">Vegetable</option>
                            <option value="Fruit">Fruit</option>
                            <option value="Bread">Bread</option>
                            <option value="Art">Art</option>
                            <option value="Livestock">Livestock</option>
                        </select>
                        <label className="label">
                            <span className="label-text font-bold">Upload Picture</span>
                        </label>
                        <input type="file" name="image" className="file-input input-bordered w-full max-w-xs" onChange={handleInputChange} />
                        <button className="btn btn-wide bg-slate-600 mt-8" type="submit">Create</button>
                        {message && (
                            <h3 className="font-bold m-3">{message}</h3>
                        )}
                    </form>
                </label>
            </label>
        </>
    );
}

export default NewProduct;