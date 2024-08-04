import React from 'react';
import AddProduct from './AddProduct';
import RemoveProduct from './RemoveProduct';
import ViewProducts from './ViewProducts';
import UpdateProduct from './UpdateProduct';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h3>Add Product</h3>
            <AddProduct />
            <h3>Remove Product</h3>
            <RemoveProduct />
            <ViewProducts />
            <UpdateProduct />
        </div>
    );
};

export default AdminDashboard;
