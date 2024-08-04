import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ToiletriesPage from "./components/ToiletriesPage";
import CartPage from "./components/CartPage";
import IndexPage from "./components/IndexPage";
import BreakfastPage from "./components/BreakfastPage";
import PastriesPage from "./components/PastriesPage";
import GrainsPage from "./components/GrainsPage";
import FrozenFoodsPage from "./components/FrozenFoodsPage";
import SearchResults from "./components/SearchResults";
import AdminDashboard from './components/AdminDashboard';
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log('Product added to cart:', product);
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartQuantity = (id, quantity) => {
    setCart(
      cart.map((item) => (item._id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header cartCount={cartCount} setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/IndexPage" />} />
        <Route path="IndexPage" element={<IndexPage />} />
        <Route
          path="/toiletries"
          element={<ToiletriesPage addToCart={addToCart} cartCount={cartCount} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/breakfast" element={<BreakfastPage addToCart={addToCart} cartCount={cartCount} />} />
        <Route path="/pastries" element={<PastriesPage addToCart={addToCart} cartCount={cartCount} />} />
        <Route path="/grains" element={<GrainsPage addToCart={addToCart} cartCount={cartCount} />} />
        <Route path="/FrozenFoods" element={<FrozenFoodsPage addToCart={addToCart} cartCount={cartCount} />} />
        <Route path="/search" element={<SearchResults results={searchResults} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
