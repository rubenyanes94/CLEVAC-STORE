import React, { useState } from 'react';

export const ProductCard = ({ product,setViewedProduct }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  // Función para redirigir a WhatsApp
  const handleWhatsAppClick = () => {
    const message = `Hola CLEVAC! Me interesa el producto: ${product.name}. ¿Tienen disponibilidad?`;
    window.open(`https://wa.me/584120000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="mb-4">
      <div className="card h-100 border-0 shadow-sm product-card-hover">
        <div className="position-relative overflow-hidden group">

          {hasDiscount && (
            <span className="badge-promo">OFERTA</span>
          )}
          <img
            src={product.image}
            className="card-img-top transition-image"
            alt={product.name}
            style={{ height: '380px', objectFit: 'cover' }}
          />
          <div className="product-overlay">
            <button className="btn btn-dark btn-quick-add mb-2" onClick={handleWhatsAppClick}>
              <i className="fa-brands fa-whatsapp me-2"></i>Comprar Ahora
            </button>
            <button
              className="btn btn-outline-dark btn-view-more bg-white"
              onClick={() => setViewedProduct(product)}
            >
              Ver Detalle
            </button>
          </div>
        </div>
        <div className="card-body px-3 py-4">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div>
              <p className="text-category">{product.category}</p>
              <h5 className="product-title-premium">{product.name}</h5>
            </div>
            <div className="text-end">
              {hasDiscount && (
                <span className="price-old">${product.originalPrice}</span>
              )}
              <span className="price-new d-block">${product.price}</span>
            </div>
          </div>

          <p className="product-description-short">{product.description}</p>

          <div className="d-flex gap-2 mt-3 mb-3">
            {product.sizes?.map(size => (
              <span key={size} className="size-pill">{size}</span>
            ))}
          </div>

          <div className="d-flex align-items-center justify-content-between pt-2 border-top">
            <span className={`stock-indicator ${product.stock < 10 ? 'low-stock' : ''}`}>
              {product.stock < 10 ? `¡Solo ${product.stock} piezas!` : 'En Stock'}
            </span>
            <div className="rating-stars">
              <i className="fa-solid fa-star text-warning small"></i>
              <span className="ms-1 small fw-bold">4.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};