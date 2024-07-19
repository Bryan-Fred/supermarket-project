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
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
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
      cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const products = [
    { id: 1, name: "Shampoo", price: 5.99, category: "Toiletries", image: "https://theskinstory.in/cdn/shop/files/1_101b2734-5b84-4ccd-97c3-ea15e483f1f0.jpg?v=1704451340" },
    { id: 2, name: "Frozen Pizza", price: 6.99, category: "Frozen Foods", image: "https://example.com/frozen-pizza.jpg" },
    // Add more products from other categories
  ];

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header cartCount={cartCount} products={products} setSearchResults={setSearchResults} /> {/* Pass products and setSearchResults to Header */}
      <Routes>
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
