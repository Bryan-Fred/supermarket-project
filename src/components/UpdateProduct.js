import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProduct = () => {
    const [productId, setProductId] = useState('');
    const [product, setProduct] = useState({
        name: '',
        price: '',
        image: '',
        category: ''
    });

    useEffect(() => {
        if (productId) {
            axios.get(`http://localhost:5000/products/${productId}`)
                .then(response => setProduct(response.data))
                .catch(error => alert('Error fetching product'));
        }
    }, [productId]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/products/${productId}`, product);
            alert('Product updated successfully');
        } catch (error) {
            alert('Error updating product');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
            <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
            <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" required />
            <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
            <button type="submit">Update Product</button>
        </form>
    );
};

export default UpdateProduct;
