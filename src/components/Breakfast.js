import React, { useState, useRef } from 'react';
import ProductModal from './ProductModal';

const Breakfast = () => {
  const [modalContent, setModalContent] = useState(null);
  const containerRef = useRef(null);

  const breakfastProducts = [
    { id: 'modal1', img: 'https://via.placeholder.com/150', name: 'Cereal', price: '$3.00', description: 'Crunchy breakfast cereal.' },
    { id: 'modal2', img: 'https://via.placeholder.com/150', name: 'Pancake Mix', price: '$4.00', description: 'Fluffy pancake mix.' },
    { id: 'modal3', img: 'https://via.placeholder.com/150', name: 'Oatmeal', price: '$2.50', description: 'Instant oatmeal packs.' },
    { id: 'modal4', img: 'https://via.placeholder.com/150', name: 'Eggs', price: '$2.00/dozen', description: 'Farm fresh eggs.' },
    { id: 'modal5', img: 'https://via.placeholder.com/150', name: 'Milk', price: '$1.50', description: 'Organic whole milk.' },
    { id: 'modal6', img: 'https://via.placeholder.com/150', name: 'Bagels', price: '$3.00', description: 'Freshly baked bagels.' },
    { id: 'modal7', img: 'https://via.placeholder.com/150', name: 'Yogurt', price: '$1.00', description: 'Greek yogurt.' },
    { id: 'modal8', img: 'https://via.placeholder.com/150', name: 'Granola Bars', price: '$2.50', description: 'Healthy granola bars.' },
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
      <h2>Breakfast</h2>
      <div className="arrow-container left-arrow" onClick={() => scrollProducts('left')}>&#10094;</div>
      <div className="products-container" ref={containerRef}>
        {breakfastProducts.map(product => (
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

export default Breakfast;
