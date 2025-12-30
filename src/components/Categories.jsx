import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Categories = () => {
  const navigate = useNavigate();
  const goToCategory = (path) => {
    navigate(`/categoria/${path}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="container my-5" id="categorias">
      <div className="row g-4">
        <div className="col-md-4" onClick={() => goToCategory('hombre')} style={{ cursor: 'pointer' }}>
          <div className="category-card animate__animated animate__fadeIn">
            <img src="clevac-chaqueta.jpeg" alt="Hombres" />
            <div className="category-overlay">
                <span className="category-title text-uppercase fw-bold">Hombres</span>
            </div>
          </div>
        </div>
        <div className="col-md-4" onClick={() => goToCategory('mujer')} style={{ cursor: 'pointer' }}>
          <div className="category-card animate__animated animate__fadeIn animate__delay-1s">
            <img src="clevac-camisa.jpeg" alt="Mujeres" />
            <div className="category-overlay">
                <span className="category-title text-uppercase fw-bold">Mujeres</span>
            </div>
          </div>
        </div>
        <div className="col-md-4" onClick={() => goToCategory('lentes')} style={{ cursor: 'pointer' }}>
          <div className="category-card animate__animated animate__fadeIn animate__delay-2s">
            <img src="clevac-franela.jpeg" alt="Accesorios" />
            <div className="category-overlay">
                <span className="category-title text-uppercase fw-bold">Accesorios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};