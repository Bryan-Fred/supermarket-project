import React from 'react';

const ProductModal = ({ product, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="modal-image-container">
          <img src={product.img} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
