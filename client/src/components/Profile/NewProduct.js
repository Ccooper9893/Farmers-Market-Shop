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
        image: ""
    })

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        if (name === "image") {
            console.log("image has been changed");
        } else {
            console.log(value);
            setFormState({ ...formState, [name]: value });
        }
    };

    async function uploadImage(event) {
        const formData = new FormData();
        formData.append("image", event.target.image.files[0]);
        console.log(event.target);
        console.log(formData);
        if (formData) {
            try {
                const response = await fetch("/upload", {
                    method: "POST",
                    body: formData,
                });
                return await response.json();
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        const data = await uploadImage(event);
        const productData = {
            ...formState,
            image: data.imageUrl,
            price: parseFloat(formState.price),
            stock: parseInt(formState.stock)
          };
        try {
            const { data } = await addProduct({ variables: productData });
              console.log(data);
        } catch (error) {
            console.log(error);
        };
        setFormState({
            name: "",
            productDescription: "",
            price: "",
            stock: "",
            category: "",
        })
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
                    </form>
                </label>
            </label>
        </>
    );
}

export default NewProduct;