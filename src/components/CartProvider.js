// CartProvider.js (Assuming you use a context for managing the cart state)
import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.find(item => item._id === action.payload._id);
      if (existingProduct) {
        return state.map(item =>
          item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item._id === action.payload._id ? { ...item, quantity: action.payload.quantity } : item
      );
    case 'REMOVE_FROM_CART':
      return state.filter(item => item._id !== action.payload._id);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = product => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const updateCartQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { _id: id, quantity } });
  };

  const removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { _id: id } });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
