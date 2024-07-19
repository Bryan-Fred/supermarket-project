import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GrainsPage = ({ addToCart, cartCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Sample product data for grains (20 products)
  const products = [
    { id: 1, name: "Rice", price: 2.99, image: "https://example.com/rice.jpg" },
    { id: 2, name: "Wheat", price: 1.99, image: "https://example.com/wheat.jpg" },
    { id: 3, name: "Oats", price: 3.49, image: "https://example.com/oats.jpg" },
    { id: 4, name: "Barley", price: 1.49, image: "https://example.com/barley.jpg" },
    { id: 5, name: "Quinoa", price: 2.49, image: "https://example.com/quinoa.jpg" },
    { id: 6, name: "Millet", price: 2.99, image: "https://example.com/millet.jpg" },
    { id: 7, name: "Corn", price: 3.99, image: "https://example.com/corn.jpg" },
    { id: 8, name: "Sorghum", price: 2.49, image: "https://example.com/sorghum.jpg" },
    { id: 9, name: "Spelt", price: 4.99, image: "https://example.com/spelt.jpg" },
    { id: 10, name: "Amaranth", price: 3.99, image: "https://example.com/amaranth.jpg" },
    { id: 11, name: "Teff", price: 1.99, image: "https://example.com/teff.jpg" },
    { id: 12, name: "Farro", price: 1.49, image: "https://example.com/farro.jpg" },
    { id: 13, name: "Buckwheat", price: 2.99, image: "https://example.com/buckwheat.jpg" },
    { id: 14, name: "Rye", price: 3.49, image: "https://example.com/rye.jpg" },
    { id: 15, name: "Bulgur", price: 2.99, image: "https://example.com/bulgur.jpg" },
    { id: 16, name: "Freekeh", price: 2.49, image: "https://example.com/freekeh.jpg" },
    { id: 17, name: "Fonio", price: 3.99, image: "https://example.com/fonio.jpg" },
    { id: 18, name: "Kamut", price: 4.49, image: "https://example.com/kamut.jpg" },
    { id: 19, name: "Triticale", price: 4.99, image: "https://example.com/triticale.jpg" },
    { id: 20, name: "Wild Rice", price: 3.99, image: "https://example.com/wildrice.jpg" },
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
        <h2>Grains</h2>
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
      <ToastContainer className="custom-toast-container" />
    </div>
  );
};

export default GrainsPage;
