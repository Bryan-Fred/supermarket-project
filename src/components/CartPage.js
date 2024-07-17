import React from 'react';

const CartPage = ({ cart, updateCartQuantity, removeFromCart }) => {
    const handleQuantityChange = (id, quantity) => {
        if (quantity < 1) {
            removeFromCart(id);
        } else {
            updateCartQuantity(id, quantity);
        }
    };

    return (
    <div className="cart-page">
        <div className="cart-page-unique">
            <h2>Cart</h2>
            <div className="cart-items-unique">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className="cart-item-unique">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>${item.price.toFixed(2)}</p>
                            <div className="quantity-unique">
                                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    </div>
    );
};

export default CartPage;
