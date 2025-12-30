import React from 'react';
import { Link } from 'react-router-dom'; 

export const NavBar = ({ cartCount = 0 }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          CLEVAC
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold">
            <li className="nav-item px-2">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            
            <li className="nav-item dropdown px-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Colecciones
              </a>
              <ul className="dropdown-menu border-0 shadow-sm">
                {/* Navegación a rutas dinámicas */}
                <li><Link className="dropdown-item" to="/categoria/hombre">Hombre</Link></li>
                <li><Link className="dropdown-item" to="/categoria/mujer">Mujer</Link></li>
                <li><Link className="dropdown-item" to="/categoria/lentes">Lentes de Sol</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item fw-bold text-primary" to="/">Ver Todo</Link></li>
              </ul>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <Link to="/favoritos" className="text-dark position-relative">
                <i className="fa-regular fa-heart fs-5"></i>
            </Link>
            <button className="btn position-relative p-0">
              <i className="fa-solid fa-cart-shopping fs-5"></i>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};