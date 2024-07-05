import React, { useState, useRef } from 'react';
import ProductModal from './ProductModal';

const Pastries = () => {
  const [modalContent, setModalContent] = useState(null);
  const containerRef = useRef(null);

  const pastriesProducts = [
    { id: 'modal1', img: 'https://via.placeholder.com/150', name: 'Croissant', price: '$2.00', description: 'Fresh buttery croissant.' },
    { id: 'modal2', img: 'https://via.placeholder.com/150', name: 'Muffin', price: '$1.50', description: 'Chocolate chip muffin.' },
    { id: 'modal3', img: 'https://via.placeholder.com/150', name: 'Donut', price: '$1.00', description: 'Glazed donut.' },
    { id: 'modal4', img: 'https://via.placeholder.com/150', name: 'Cake Slice', price: '$3.00', description: 'Slice of chocolate cake.' },
    { id: 'modal5', img: 'https://via.placeholder.com/150', name: 'Tart', price: '$2.50', description: 'Fruit tart.' },
    { id: 'modal6', img: 'https://via.placeholder.com/150', name: 'Eclair', price: '$2.00', description: 'Chocolate eclair.' },
    { id: 'modal7', img: 'https://via.placeholder.com/150', name: 'Brownie', price: '$1.50', description: 'Rich chocolate brownie.' },
    { id: 'modal8', img: 'https://via.placeholder.com/150', name: 'Cookie', price: '$1.00', description: 'Freshly baked cookie.' },
  ];

  const openModal = (product) => {
    setModalContent(product);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const scrollProducts = (direction) => {
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="category-section">
      <h2>Pastries</h2>
      <div className="arrow-container left-arrow" onClick={() => scrollProducts('left')}>&#10094;</div>
      <div className="products-container" ref={containerRef}>
        {pastriesProducts.map(product => (
          <div className="product" key={product.id}>
            <div className="product-image-container">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="product-name-price">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
            <button className="quick-view-btn" onClick={() => openModal(product)}>Quick View</button>
          </div>
        ))}
      </div>
      <div className="arrow-container right-arrow" onClick={() => scrollProducts('right')}>&#10095;</div>
      {modalContent && <ProductModal product={modalContent} closeModal={closeModal} />}
      <div className="category-link">See All</div>
    </section>
  );
};

export default Pastries;
