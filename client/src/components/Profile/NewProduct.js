import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";

function NewProduct({ onAddProduct }) {

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

    async function uploadImage(event) {
        const formData = new FormData();
        formData.append("image", event.target.image.files[0]);
        if (formData) {
            try {
                const response = await fetch("/upload", {
                    method: "POST",
                    body: formData,
                });
                if (response.ok) {
                    return await response.json();
                }
                return false;
            } catch (error) {
                console.log(error);
            }
        }
    };

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

    return (
        <>
            {/* The button to open modal */}
            <label htmlFor="productModal" className="btn w-3/5 mx-auto">
                New Product
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="productModal" className="modal-toggle" />
            <label htmlFor="productModal" className="modal cursor-pointer bg-opacity-80">
                <label className="modal-box bg-amber-100 shadow-sm mb-20 flex justify-center">
                    <label htmlFor="productModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form
                        className="flex flex-col"
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
                        <h2 className=" text-3xl font-bold">CREATE PRODUCT</h2>
                        <label className="label">
                            <span className="label-text font-bold">PRODUCT NAME</span>
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
                            <span className="label-text font-bold">DESCRIPTION</span>
                        </label>
                        <input
                            type="text"
                            name="productDescription"
                            placeholder="Product description"
                            className="input input-bordered"
                            value={formState.productDescription}
                            onChange={handleInputChange}
                        />
                        <div className="mx-2">
                            <div className="flex flex-row flex-wrap">
                                <div>
                                    <label className="label">
                                        <span className="label-text font-bold">PRICE</span>
                                    </label>
                                    <label className="label p-0">
                                        <input
                                            className="input input-bordered"
                                            type="number"
                                            name="price"
                                            placeholder="$ USD"
                                            value={formState.price}
                                            onChange={handleInputChange}
                                        />
                                    </label>
                                </div>
                                <div className="mx-2">
                                    <label className="label">
                                        <span className="label-text font-bold">STOCK</span>
                                    </label>
                                    <label className="label p-0">
                                        <input
                                            className="input input-bordered"
                                            type="number"
                                            name="stock"
                                            placeholder="20"
                                            value={formState.stock}
                                            onChange={handleInputChange} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <label className="label">
                            <span className="label-text font-bold">CATEGORY</span>
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
                            <span className="label-text font-bold">UPLOAD PICTURE</span>
                        </label>
                        <input type="file" name="image" className="file-input input-bordered w-full" onChange={handleInputChange} />
                        {loading 
                            ? (<button className="btn btn-wide loading bg-slate-600 mt-8"></button>)
                            : <button className="btn btn-wide bg-slate-600 mt-8" type="submit">Create</button>
                        }

                        {message && (<h3 className="font-bold m-3">{message}</h3>)}
                    </form>
                </label>
            </label>
        </>
    );
}

export default NewProduct;