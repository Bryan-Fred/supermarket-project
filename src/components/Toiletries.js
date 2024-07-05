import React, { useState, useRef } from 'react';
import ProductModal from './ProductModal';

const Toiletries = () => {
  const [modalContent, setModalContent] = useState(null);
  const containerRef = useRef(null);

  const toiletriesProducts = [
    { id: 'modal1', img: 'https://via.placeholder.com/150', name: 'Shampoo', price: '$10.00', description: 'A high-quality shampoo for smooth hair.' },
    { id: 'modal2', img: 'https://via.placeholder.com/150', name: 'Soap', price: '$2.00', description: 'A bar of organic soap.' },
    { id: 'modal3', img: 'https://via.placeholder.com/150', name: 'Toothpaste', price: '$3.00', description: 'Minty fresh toothpaste.' },
    { id: 'modal4', img: 'https://via.placeholder.com/150', name: 'Deodorant', price: '$5.00', description: 'Long-lasting deodorant.' },
    { id: 'modal5', img: 'https://via.placeholder.com/150', name: 'Lotion', price: '$7.00', description: 'Moisturizing body lotion.' },
    { id: 'modal6', img: 'https://via.placeholder.com/150', name: 'Conditioner', price: '$10.00', description: 'Smooth and silky conditioner.' },
    { id: 'modal7', img: 'https://via.placeholder.com/150', name: 'Body Wash', price: '$8.00', description: 'Refreshing body wash.' },
    { id: 'modal8', img: 'https://via.placeholder.com/150', name: 'Hand Sanitizer', price: '$4.00', description: 'Kills 99.9% of germs.' },
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
      <h2>toiletries</h2>
      <div className="arrow-container left-arrow" onClick={() => scrollProducts('left')}>&#10094;</div>
      <div className="products-container" ref={containerRef}>
        {toiletriesProducts.map(product => (
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

export default Toiletries;
