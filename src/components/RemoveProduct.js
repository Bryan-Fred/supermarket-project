import React, { useState } from 'react';
import axios from 'axios';

const RemoveProduct = () => {
    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');

    const handleIdChange = (e) => {
        setProductId(e.target.value);
    };

    const handleNameChange = (e) => {
        setProductName(e.target.value);
    };

    const handleRemoveById = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:5000/products/${productId}`);
            alert('Product removed successfully');
            setProductId(''); // Reset form
        } catch (error) {
            console.error('Error removing product by ID:', error);
            alert('Error removing product');
        }
    };

    const handleRemoveByName = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:5000/products/name/${productName}`);
            alert('Product removed successfully');
            setProductName(''); // Reset form
        } catch (error) {
            console.error('Error removing product by name:', error);
            alert('Error removing product');
        }
    };

    return (
        <div className="product-removal-container">
            <form onSubmit={handleRemoveById} className="id-removal-form">
                <h2 className="id-form-title">Remove Product by ID</h2>
                <div className="id-form-group">
                    <label htmlFor="productIdInput">Product ID</label>
                    <input type="text" id="productIdInput" value={productId} onChange={handleIdChange} placeholder="Product ID" required />
                </div>
                <button type="submit" className="id-submit-button">Remove Product by ID</button>
            </form>

            <form onSubmit={handleRemoveByName} className="name-removal-form">
                <h2 className="name-form-title">Remove Product by Name</h2>
                <div className="name-form-group">
                    <label htmlFor="productNameInput">Product Name</label>
                    <input type="text" id="productNameInput" value={productName} onChange={handleNameChange} placeholder="Product Name" required />
                </div>
                <button type="submit" className="name-submit-button">Remove Product by Name</button>
            </form>
        </div>
    );
};

export default RemoveProduct;
