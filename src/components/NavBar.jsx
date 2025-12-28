import React from 'react';

export const NavBar = ({ setCategory, cartCount = 0 }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold fs-3" href="#">CLEVAC</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium">
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#" onClick={() => setCategory('all')}>Inicio</a>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Colecciones
                            </a>
                    <ul className="dropdown-menu shadow-sm border-0" aria-labelledby="navbarDropdown">
                        <li>
                                <button className="dropdown-item" onClick={() => setCategory('hombre')}>
                                    Hombre
                                </button>
                        </li>
                        <li>
                                <button className="dropdown-item" onClick={() => setCategory('mujer')}>
                                    Mujer
                                </button>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                                <button className="dropdown-item" onClick={() => setCategory('lentes')}>
                                    Lentes de Sol
                                </button>
                        </li>
                    </ul>
                </li>

                <li className="nav-item px-2">
                    <a className="nav-link" href="#ropa">Más Vendidos</a>
                </li>
                <li className="nav-item px-2">
                    <a className="nav-link" href="#faq">FAQ</a>
                </li>
            </ul>

            <div className="d-flex align-items-center">
                <a href="#" className="me-3 text-dark fs-5"><i className="fa-solid fa-magnifying-glass"></i></a>
                <a href="#" className="me-3 text-dark fs-5"><i className="fa-regular fa-user"></i></a>

                <a href="#" className="text-dark fs-5 position-relative">
                    <i className="fa-solid fa-bag-shopping"></i>
                    {cartCount > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                            {cartCount}
                        </span>
                    )}
                </a>
            </div>
        </div>
            </div >
        </nav >
    );
}