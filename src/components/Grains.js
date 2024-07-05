import React, { useState, useRef } from 'react';
import ProductModal from './ProductModal';

const Grains = () => {
  const [modalContent, setModalContent] = useState(null);
  const containerRef = useRef(null);

  const grainsProducts = [
    { id: 'modal1', img: 'https://via.placeholder.com/150', name: 'Rice', price: '$1.00/lb', description: 'Premium quality rice.' },
    { id: 'modal2', img: 'https://via.placeholder.com/150', name: 'Wheat Flour', price: '$2.00/lb', description: 'Whole wheat flour.' },
    { id: 'modal3', img: 'https://via.placeholder.com/150', name: 'Oats', price: '$3.00', description: 'Organic rolled oats.' },
    { id: 'modal4', img: 'https://via.placeholder.com/150', name: 'Quinoa', price: '$4.00', description: 'Nutritious quinoa.' },
    { id: 'modal5', img: 'https://via.placeholder.com/150', name: 'Cornmeal', price: '$1.50', description: 'Ground cornmeal.' },
    { id: 'modal6', img: 'https://via.placeholder.com/150', name: 'Barley', price: '$2.50', description: 'Whole grain barley.' },
    { id: 'modal7', img: 'https://via.placeholder.com/150', name: 'Millet', price: '$3.00', description: 'Gluten-free millet.' },
    { id: 'modal8', img: 'https://via.placeholder.com/150', name: 'Couscous', price: '$2.00', description: 'Moroccan-style couscous.' },
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
      <h2>Grains</h2>
      <div className="arrow-container left-arrow" onClick={() => scrollProducts('left')}>&#10094;</div>
      <div className="products-container" ref={containerRef}>
        {grainsProducts.map(product => (
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

export default Grains;
