import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const NavBar = ({ cartCount = 0 }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(''); 
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
      <div className="container">
        {/* Logo de la tienda */}
        <Link className="navbar-brand fw-bold fs-3" to="/" style={{ letterSpacing: '1px' }}>
          CLEVAC
        </Link>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold text-uppercase" style={{ fontSize: '0.9rem' }}>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/categoria/hombre">Hombre</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/categoria/mujer">Mujer</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/categoria/lentes">Accesorios</Link>
            </li>
          </ul>
          <form className="d-flex position-relative me-lg-3 my-3 my-lg-0" onSubmit={handleSearch}>
            <input
              className="form-control border-0 bg-light rounded-pill ps-4 pe-5"
              type="search"
              placeholder="Buscar productos..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', minWidth: '220px', height: '40px', fontSize: '0.85rem' }}
            />
            <button 
              className="btn position-absolute end-0 top-50 translate-middle-y border-0 me-1" 
              type="submit"
              style={{ background: 'transparent' }}
            >
              <i className="fa-solid fa-magnifying-glass text-muted"></i>
            </button>
          </form>

          {/* ICONO DE CARRITO */}
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn p-0 position-relative border-0 bg-transparent">
              <i className="fa-solid fa-cart-shopping fs-5"></i>
              {cartCount > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
                  style={{ fontSize: '0.6rem', padding: '0.35em 0.6em' }}
                >
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