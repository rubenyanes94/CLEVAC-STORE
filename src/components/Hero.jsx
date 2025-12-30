import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <header className="hero-premium position-relative overflow-hidden">
      <div className="bg-decoration-blob top-right"></div>
      <div className="bg-decoration-blob bottom-left"></div>
      <div className="container position-relative z-1 py-5">
        <div className="row align-items-center min-vh-75 mt-lg-5">
          
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <div className="badge-new-collection animate__animated animate__fadeIn mb-4">
              <span className="dot-indicator"></span>
              Disponibilidad Inmediata 
            </div>
        
            <h1 className="hero-title animate__animated animate__fadeInDown mb-3">
              Define <span className="fw-black">Tu Propio</span> <br /> 
              Estándar.
            </h1>
            <p className="hero-subtitle mb-5 animate__animated animate__fadeInUp">
              No seguimos tendencias, las creamos. Calidad premium diseñada para quienes buscan distinción y confort en cada prenda.
            </p>
            
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start mb-5">
              <button 
                onClick={() => navigate('/categoria/hombre')} 
                className="btn-clevac-main animate__animated animate__zoomIn"
              >
                Comprar Ahora
              </button>
              <button 
                onClick={() => navigate('/categoria/lentes')} 
                className="btn-clevac-secondary animate__animated animate__zoomIn animate__delay-1s"
              >
                Explorar Accesorios
              </button>
            </div>

            <div className="brand-stats d-flex gap-4 justify-content-center justify-content-lg-start pt-4 border-top">
              <div className="stat-item">
                <span className="d-block fw-bold h4 mb-0">10k+</span>
                <small className="text-muted text-uppercase fw-bold">Clientes</small>
              </div>
              <div className="stat-item border-start ps-4">
                <span className="d-block fw-bold h4 mb-0">4.9</span>
                <small className="text-muted text-uppercase fw-bold">Rating</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-media-container animate__animated animate__fadeInRight">
              <img 
                src="clevac-store.jpeg"
                className="img-hero-curved shadow-2xl"
                alt="CLEVAC Lifestyle" 
              />
              <div className="floating-info-card animate__animated animate__bounceInUp animate__delay-2s">
                <div className="icon-wrapper-express">
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <div className="text-content">
                  <p className="mb-0 fw-bold text-dark">Envío Express</p>
                  <p className="mb-0 text-muted small">A todo el país</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};