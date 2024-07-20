import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BreakfastPage = ({ addToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Sample product data for breakfast items (20 products)
  const products = [
    { id: 1, name: "Cereal", price: 4.99, image: "https://example.com/cereal.jpg" },
    { id: 2, name: "Granola Bars", price: 3.49, image: "https://example.com/granola-bars.jpg" },
    { id: 3, name: "Oatmeal", price: 2.99, image: "https://example.com/oatmeal.jpg" },
    { id: 4, name: "Pancake Mix", price: 5.99, image: "https://example.com/pancake-mix.jpg" },
    { id: 5, name: "Syrup", price: 3.99, image: "https://example.com/syrup.jpg" },
    { id: 6, name: "Coffee", price: 7.99, image: "https://example.com/coffee.jpg" },
    { id: 7, name: "Tea", price: 4.49, image: "https://example.com/tea.jpg" },
    { id: 8, name: "Bagels", price: 2.49, image: "https://example.com/bagels.jpg" },
    { id: 9, name: "Cream Cheese", price: 2.99, image: "https://example.com/cream-cheese.jpg" },
    { id: 10, name: "Yogurt", price: 1.99, image: "https://example.com/yogurt.jpg" },
    { id: 11, name: "Juice", price: 3.49, image: "https://example.com/juice.jpg" },
    { id: 12, name: "Milk", price: 2.49, image: "https://example.com/milk.jpg" },
    { id: 13, name: "Eggs", price: 2.99, image: "https://example.com/eggs.jpg" },
    { id: 14, name: "Butter", price: 3.99, image: "https://example.com/butter.jpg" },
    { id: 15, name: "Jam", price: 2.49, image: "https://example.com/jam.jpg" },
    { id: 16, name: "Muffins", price: 4.49, image: "https://example.com/muffins.jpg" },
    { id: 17, name: "Fruit", price: 3.49, image: "https://example.com/fruit.jpg" },
    { id: 18, name: "Toast", price: 1.99, image: "https://example.com/toast.jpg" },
    { id: 19, name: "Pita Bread", price: 2.99, image: "https://example.com/pita-bread.jpg" },
    { id: 20, name: "Smoothie Mix", price: 5.49, image: "https://example.com/smoothie-mix.jpg" },
  ];

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    // Scroll to top when the component mounts or the currentPage changes
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="main-products-pages">
      <div className="products-pages-unique">
        <h2>Breakfast</h2>
        <div className="products-unique">
          {currentProducts.map(product => (
            <div key={product.id} className="product-unique">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="pagination-unique">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
       {/*<ToastContainer className="custom-toast-container" />*/}
    </div>
  );
};

export default BreakfastPage;
