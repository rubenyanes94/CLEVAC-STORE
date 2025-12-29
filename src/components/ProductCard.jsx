import React from 'react';

export const ProductCard = ({ product }) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 border-0 shadow-sm product-card-hover">
        <div className="position-relative overflow-hidden">
          {hasDiscount && (
            <span className="badge bg-danger position-absolute top-0 start-0 m-3 z-1">
              OFERTA
            </span>
          )}
          <img 
            src={product.image} 
            className="card-img-top transition-image"
            alt={product.name} 
            style={{ height: '350px', objectFit: 'cover' }}
          />
          <div className="product-overlay d-flex align-items-end justify-content-center p-3">
             <button className="btn btn-dark w-100 fw-bold py-2 shadow">
                <i className="fa-solid fa-cart-plus me-2"></i>Añadir
             </button>
          </div>
        </div>

        <div className="card-body px-3 py-4 text-center">
          <p className="text-uppercase text-muted small mb-1">{product.category}</p>
          <h5 className="fw-bold mb-2">{product.name}</h5>
          
          <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
            {hasDiscount && (
              <span className="text-muted text-decoration-line-through small">
                ${product.originalPrice}
              </span>
            )}
            <span className="fs-5 fw-bold text-dark">${product.price}</span>
          </div>

          <div className="d-flex justify-content-center gap-1 mb-3">
            {product.sizes?.map(size => (
              <span key={size} className="size-badge">
                {size}
              </span>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-1 mb-3">
            {product.description}
          </div>

          <p className="small text-muted mb-0">
            {product.stock < 5 ? (
              <span className="text-danger fw-bold italic">¡Solo {product.stock} disponibles!</span>
            ) : (
              `${product.stock} en stock`
            )}
          </p>
        </div>
      </div>
    </div>
  );
};