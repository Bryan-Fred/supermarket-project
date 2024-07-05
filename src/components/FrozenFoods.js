import React, { useState, useRef } from 'react';
import ProductModal from './ProductModal';

const FrozenFoods = () => {
  const [modalContent, setModalContent] = useState(null);
  const containerRef = useRef(null);

  const frozenFoodsProducts = [
    { id: 'modal1', img: 'https://via.placeholder.com/150', name: 'Frozen Pizza', price: '$5.00', description: 'A delicious frozen pizza.' },
    { id: 'modal2', img: 'https://via.placeholder.com/150', name: 'Ice Cream', price: '$3.00', description: 'Creamy vanilla ice cream.' },
    { id: 'modal3', img: 'https://via.placeholder.com/150', name: 'Frozen Peas', price: '$2.00', description: 'Fresh frozen peas.' },
    { id: 'modal4', img: 'https://via.placeholder.com/150', name: 'Frozen Berries', price: '$4.00', description: 'Mixed frozen berries.' },
    { id: 'modal5', img: 'https://via.placeholder.com/150', name: 'Frozen Chicken', price: '$10.00', description: 'Frozen chicken breasts.' },
    { id: 'modal6', img: 'https://via.placeholder.com/150', name: 'Frozen Fish', price: '$8.00', description: 'Frozen salmon fillets.' },
    { id: 'modal7', img: 'https://via.placeholder.com/150', name: 'Frozen Vegetables', price: '$5.00', description: 'Mixed frozen vegetables.' },
    { id: 'modal8', img: 'https://via.placeholder.com/150', name: 'Frozen Fries', price: '$3.00', description: 'Crispy frozen fries.' },
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
      <h2>Frozen foods</h2>
      <div className="arrow-container left-arrow" onClick={() => scrollProducts('left')}>&#10094;</div>
      <div className="products-container" ref={containerRef}>
        {frozenFoodsProducts.map(product => (
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

export default FrozenFoods;
