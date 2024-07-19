import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PastriesPage = ({ addToCart, cartCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Sample product data for pastries (20 products)
  const products = [
    { id: 1, name: "Croissant", price: 2.99, image: "https://example.com/croissant.jpg" },
    { id: 2, name: "Donut", price: 1.99, image: "https://example.com/donut.jpg" },
    { id: 3, name: "Muffin", price: 3.49, image: "https://example.com/muffin.jpg" },
    { id: 4, name: "Bagel", price: 1.49, image: "https://example.com/bagel.jpg" },
    { id: 5, name: "Danish", price: 2.49, image: "https://example.com/danish.jpg" },
    { id: 6, name: "Eclair", price: 2.99, image: "https://example.com/eclair.jpg" },
    { id: 7, name: "Tart", price: 3.99, image: "https://example.com/tart.jpg" },
    { id: 8, name: "Scone", price: 2.49, image: "https://example.com/scone.jpg" },
    { id: 9, name: "Cake", price: 4.99, image: "https://example.com/cake.jpg" },
    { id: 10, name: "Pie", price: 3.99, image: "https://example.com/pie.jpg" },
    { id: 11, name: "Brownie", price: 1.99, image: "https://example.com/brownie.jpg" },
    { id: 12, name: "Cookie", price: 1.49, image: "https://example.com/cookie.jpg" },
    { id: 13, name: "Cupcake", price: 2.99, image: "https://example.com/cupcake.jpg" },
    { id: 14, name: "Macaron", price: 3.49, image: "https://example.com/macaron.jpg" },
    { id: 15, name: "Choux", price: 2.99, image: "https://example.com/choux.jpg" },
    { id: 16, name: "Puff Pastry", price: 2.49, image: "https://example.com/puff-pastry.jpg" },
    { id: 17, name: "Strudel", price: 3.99, image: "https://example.com/strudel.jpg" },
    { id: 18, name: "Cheesecake", price: 4.49, image: "https://example.com/cheesecake.jpg" },
    { id: 19, name: "Tiramisu", price: 4.99, image: "https://example.com/tiramisu.jpg" },
    { id: 20, name: "Profiterole", price: 3.99, image: "https://example.com/profiterole.jpg" },
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
        <h2>Pastries</h2>
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

export default PastriesPage;
