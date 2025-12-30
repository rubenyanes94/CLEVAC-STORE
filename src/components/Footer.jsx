import React from "react";

export const Footer = () => {
    return (
        <footer className="clevac-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5 className="fw-bold text-white mb-3">CLEVAC</h5>
              <p className="text-secondary">Diseño sin interrupciones, estilo para todos. Comprometidos con la calidad y la elegancia atemporal.</p>
            </div>

            <div className="col-6 col-lg-2">
              <h6 className="fw-bold mb-3 text-white">Enlaces Rápidos</h6>
              <ul className="nav flex-column">
                <li className="nav-item"><a href="#" className="nav-link">Inicio</a></li>
                <li className="nav-item"><a href="#ropa" className="nav-link">Colecciones</a></li>
                <li className="nav-item"><a href="#lentes" className="nav-link">Ofertas</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
              </ul>
            </div>

            <div className="col-6 col-lg-3">
              <h6 className="fw-bold mb-3 text-white">Soporte</h6>
              <ul className="nav flex-column">
                <li className="nav-item"><a href="#faq" className="nav-link">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contáctanos</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Política de Privacidad</a></li>
              </ul>
            </div>

            <div className="col-lg-3 mt-4 mt-lg-0 text-lg-end">
              <h6 className="fw-bold mb-3 text-white">Síguenos</h6>
              <div className="social-icons">
                <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>

          <div className="text-center border-top border-secondary pt-3 mt-5">
            <p className="mb-0 small text-secondary">&copy; 2025 CLEVAC. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
};