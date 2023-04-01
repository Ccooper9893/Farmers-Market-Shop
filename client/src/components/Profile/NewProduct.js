import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";
import oldpaper from "../../Images/oldpaper.jpg"


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
                    return await response.json();

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
                setMessage('Product Added!');
                setLoading(false);
                onAddProduct(data);
            }
        } catch (error) {
            console.log(error);
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
            <label htmlFor="productModal" className="btn text-lg mx-auto bg-green-800">
                New Product
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="productModal" className="modal-toggle" />
            <label htmlFor="productModal" className="modal cursor-pointer bg-opacity-80">
                <label className="modal-box shadow-sm mb-20 rounded-none" style={{
                backgroundImage: `url(${oldpaper})`,
                backgroundSize: '20rem',
                backgroundRepeat: 'repeat',
              }}>
                    <label htmlFor="productModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form
                        className="flex flex-col"
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
                        <label className="label">
                            <span className="label-text font-bold text-xl">PRODUCT NAME</span>
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
                            <span className="label-text font-bold text-xl">DESCRIPTION</span>
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
                                        <span className="label-text font-bold text-xl">PRICE</span>
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
                                <div>
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">STOCK</span>
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
                            <span className="label-text font-bold text-xl">CATEGORY</span>
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
                            <span className="label-text font-bold text-xl">UPLOAD PICTURE</span>
                        </label>
                        <input type="file" name="image" className="file-input input-bordered w-full" onChange={handleInputChange} />
                        {loading 
                            ? (<button className="btn loading bg-green-700 mt-8"></button>)
                            : <button className="btn bg-green-700 mt-8" type="submit">Create</button>
                        }

                        {message && (<h3 className="font-bold m-3">{message}</h3>)}
                    </form>
                </label>
            </label>
        </>
    );
}

export default NewProduct;