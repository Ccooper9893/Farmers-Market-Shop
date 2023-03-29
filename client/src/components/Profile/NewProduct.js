import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";

function NewProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    let image;

    const [addProduct, { error }] = useMutation(ADD_PRODUCT);

    const handleInputChange = (event) => {
        const inputType = event.target.name;
        const inputValue = event.target.value;
        console.log(inputValue);
        switch (inputType) {
            case "name":
                setName(inputValue);
                break;
            case "price":
                setPrice(inputValue);
                break;
            case "stock":
                setStock(inputValue);
                break;
            case "category":
                setCategory(inputValue);
                break;
            case "description":
                setProductDescription(inputValue);
                break;
            case "image":
                uploadImage(event);
                break;
            default:
                break;
        }
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

                image = await response.json();
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addProduct({
                variables: {
                    name,
                    image,
                    price: parseFloat(price),
                    stock: parseInt(stock),
                    productDescription,
                    category,
                },
            });
            console.log(data);

            setSuccessMessage("Product created successfully!");
            setName("");
            setPrice("");
            setStock("");
            setCategory("");
            setProductDescription("");
            setErrorMessage("");
        } catch (error) {
            setErrorMessage(error.message);
            console.log(error);
        }
    };

    return (
        <>
            {/* The button to open modal */}
            <label htmlFor="my-modal-4" className="btn">
                New Product
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative bg-green-700" htmlFor="">
                    <form
                        className="flex justify-center flex-col text-center"
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
                        <h2 className=" text-3xl">New Product</h2>
                        <label className="label">
                            <span className="label-text font-bold">Name:</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Carrots"
                            className="input input-bordered"
                            value={name}
                            onChange={handleInputChange}
                        />
                        <label className="label">
                            <span className="label-text font-bold">Description:</span>
                        </label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Freshly harvested carrots"
                            className="input input-bordered"
                            value={productDescription}
                            onChange={handleInputChange}
                        />
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="label">
                            <input type="text" name="price" placeholder="10" className="input input-bordered" onChange={handleInputChange} />
                        </label>
                        <label className="label">
                            <span className="label-text font-bold">Category:</span>
                        </label>
                        <select className="select w-full max-w-xs" name="category" defaultValue="Option 1" value={category} onChange={handleInputChange}>
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
                        <input type="file" name="image" className="file-input input-bordered w-full max-w-xs" />


                        <button className="btn btn-wide bg-slate-600 mt-8" type="submit">Create</button>
                    </form>
                </label>
            </label>
        </>
    );
}

export default NewProduct;