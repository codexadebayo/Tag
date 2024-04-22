import React, { useState } from 'react'
import './AddProducts.css'
import upload_area from '../../Assets/upload_area.svg'

const AddProducts = () => {
    const [image, setImage] = useState(false);

    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: '',
    })
    const imageHandler = (e) => {
        setImage(e.target.files[0]);

    }
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }
    const Add_Product = async () => {
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        const response = await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });

        if (response.ok) {
            responseData = await response.json();
            if (responseData.success) {
                product.image = responseData.image_url;
                console.log(product);
                await fetch('http://localhost:4000/products',{
                    method:'POST',
                    headers:{
                        Accept:'application/json',
                        "Content-Type":'application/json'

                    },
                    body:JSON.stringify(product),
                }).then((res)=>res.json()).then((data)=>{
                    data.success?alert("Product has been successfully saved in Database"):alert("Failed")
                })
            }
        } else {
            console.error('Failed to upload product image');
        }
    };

    return (
        <div className='add-products'>
            <div className="add-product-item-fields">
                <p>
                    Product Title
                </p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here' />
            </div>
            <div className="add-product-price">
                <div className="add-product-item-fields">
                    <p>Price</p>
                    <input
                        value={productDetails.old_price} onChange={changeHandler}
                        type="text" name="old_price" placeholder='Type Here' />
                </div>
                <div className="add-product-item-fields">
                    <p> Offer Price</p>
                    <input
                        value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type Here' />
                </div>
            </div>
            <div className="add-product-item-field">
                <p>Product Category</p>
                <select
                    value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="men">Men</option>

                </select>
            </div>
            <div className="add-product-item-field">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='add-product-thumbnail-img' />
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
            </div>
            <button
                onClick={() => { Add_Product() }}

                className='add-product-btn'>ADD</button>
        </div>
    )
}

export default AddProducts