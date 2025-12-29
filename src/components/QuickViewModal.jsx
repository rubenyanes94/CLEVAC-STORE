import React, { useState, useEffect } from 'react';

export const QuickViewModal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    setSelectedSize('');
  }, [product]);

  if (!product) return null;

  const handleWhatsApp = () => {
    if (!selectedSize) {
      alert("Por favor, selecciona una talla primero.");
      return;
    }
    const message = `¡Hola CLEVAC! Me encanta el "${product.name}" en talla [${selectedSize}]. ¿Tienen disponibilidad?`;
    window.open(`https://wa.me/584120000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 rounded-4 overflow-hidden">
          <div className="modal-body p-0">
            <button type="button" className="btn-close position-absolute top-0 end-0 m-3 z-3" onClick={onClose}></button>
            <div className="row g-0">
              <div className="col-md-6">
                <img src={product.image} className="img-fluid h-100 object-fit-cover" alt={product.name} style={{ minHeight: '400px' }} />
              </div>
              <div className="col-md-6 p-4 p-lg-5 d-flex flex-column justify-content-center">
                <span className="text-muted small text-uppercase fw-bold mb-2">{product.category}</span>
                <h2 className="fw-bold mb-3">{product.name}</h2>
                <h3 className="text-primary fw-bold mb-4">${product.price}</h3>
                
                <p className="text-muted mb-4">{product.description}</p>

                <div className="mb-4">
                  <label className="fw-bold small mb-2 d-block">SELECCIONA TU TALLA:</label>
                  <div className="d-flex gap-2">
                    {product.sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`btn-size-selector ${selectedSize === size ? 'active' : ''}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="btn btn-dark btn-lg w-100 py-3 rounded-pill fw-bold mb-2" onClick={handleWhatsApp}>
                  <i className="fa-brands fa-whatsapp me-2"></i> CONSULTAR POR WHATSAPP
                </button>
                <p className="text-center small text-muted mt-2">Disponibilidad inmediata: {product.stock} unidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};