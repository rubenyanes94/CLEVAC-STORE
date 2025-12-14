// src/components/ProductCard.jsx
import React from 'react';

export const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 product-card-small text-center border-0 shadow-sm animate__animated animate__fadeInUp">
        <img 
            src={product.image} 
            className="card-img-top rounded-top"
            alt={product.name} 
            style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-decoration-line-through small mb-0">
            ${product.originalPrice}
          </p>
          <p className="card-text text-danger fw-bold fs-5">
            ${product.price}
          </p>
          <button className="btn btn-buy">Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
};