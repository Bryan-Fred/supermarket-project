import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        imageUrl: '',
        category: ''
    });
    const [localImage, setLocalImage] = useState(null);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setLocalImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let imageUrl = product.imageUrl;

        if (localImage) {
            const formData = new FormData();
            formData.append('image', localImage);
            try {
                const uploadResponse = await axios.post('http://localhost:5000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                imageUrl = uploadResponse.data.imageUrl;
            } catch (error) {
                alert('Error uploading image');
                return;
            }
        }

        try {
            await axios.post('http://localhost:5000/products', { ...product, image: imageUrl });
            alert('Product added successfully');
            setProduct({ name: '', price: '', imageUrl: '', category: '' });
            setLocalImage(null);
        } catch (error) {
            alert('Error adding product');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-product-form">
            <h2 className="form-title">Add New Product</h2>
            <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input type="text" id="name" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
            </div>
            <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" id="imageUrl" name="imageUrl" value={product.imageUrl} onChange={handleChange} placeholder="Image URL" />
            </div>
            <div className="form-group">
                <label htmlFor="localImage">Upload Image</label>
                <input type="file" id="localImage" name="localImage" onChange={handleFileChange} />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <input type="text" id="category" name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
            </div>
            <button type="submit" className="submit-button">Add Product</button>
        </form>
    );
};

export default AddProduct;
