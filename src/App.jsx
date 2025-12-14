// src/App.jsx
import React from 'react';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div>
      {/* --- PROMO BAR --- */}
      <div className="promo-bar">
        <div className="container">
          ENVÍO GRATIS A TODO EL PAÍS EN PEDIDOS +$50 | <a href="#ropa">COMPRAR AHORA</a>
        </div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">CLEVAC</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium">
              <li className="nav-item px-2"><a className="nav-link active" href="#">Inicio</a></li>
              <li className="nav-item px-2"><a className="nav-link" href="#categorias">Colecciones</a></li>
              <li className="nav-item px-2"><a className="nav-link" href="#ropa">Más Vendidos</a></li>
              <li className="nav-item px-2"><a className="nav-link" href="#faq">FAQ</a></li>
            </ul>
            <div className="d-flex">
              <a href="#" className="me-3 text-dark fs-5"><i className="fa-solid fa-magnifying-glass"></i></a>
              <a href="#" className="me-3 text-dark fs-5"><i className="fa-regular fa-user"></i></a>
              <a href="#" className="text-dark fs-5 position-relative">
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>2</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <header className="clevac-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="text-uppercase fw-bold small text-muted mb-2">4,9/5 Estrellas | 10.000+ Clientes Satisfechos</p>
              <h1 className="animate__animated animate__fadeInDown mb-3">
                Viste <span className="text-primary">Tu Esencia</span>.<br />Siente Tu Estilo.
              </h1>
              <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Descubre colecciones que combinan diseño vanguardista, calidad premium y confort insuperable para tu día a día.
              </p>
              <div className="d-flex gap-3">
                <a href="#ropa" className="btn btn-lg btn-primary animate__animated animate__zoomIn">Explorar Ropa</a>
                <a href="#lentes" className="btn btn-lg btn-outline-secondary animate__animated animate__zoomIn animate__delay-1s">Ver Lentes</a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              {/* Imagen Hero - Asegúrate de tener esta imagen o cambiar la URL */}
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                className="img-fluid rounded shadow-lg animate__animated animate__fadeInRight"
                style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
                alt="Hombre con ropa de moda CLEVAC" />
            </div>
          </div>
        </div>
      </header>

      {/* --- CATEGORÍAS --- */}
      <section className="container my-5" id="categorias">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="category-card animate__animated animate__fadeIn">
              <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Hombres" />
              <div className="category-overlay"><span className="category-title">Hombres</span></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="category-card animate__animated animate__fadeIn animate__delay-1s">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Mujeres" />
              <div className="category-overlay"><span className="category-title">Mujeres</span></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="category-card animate__animated animate__fadeIn animate__delay-2s">
              <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Accesorios" />
              <div className="category-overlay"><span className="category-title">Accesorios</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIOS (Trusted Listeners) --- */}
      <section className="trusted-listeners border-top border-bottom">
        <div className="container">
            <h4 className="fw-bold mb-4">Amado por Influencers y Clientes</h4>
            <p className="text-muted">De profesionales a viajeros, miles confían en la calidad de CLEVAC.</p>
            <div className="row justify-content-center mt-4" id="testimonials">
                <div className="col-md-4 mb-3">
                    <div className="p-4 border rounded text-start h-100 bg-light">
                        <div className="mb-2 text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                        <p className="small fst-italic">"La calidad de la tela es increíble. Perfecta para viajar y no se arruga."</p>
                        <small className="fw-bold d-block mt-3">- Marco T., Venezuela</small>
                    </div>
                </div>
                 <div className="col-md-4 mb-3">
                    <div className="p-4 border rounded text-start h-100 bg-light">
                        <div className="mb-2 text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                        <p className="small fst-italic">"Mis lentes de sol favoritos. Diseño moderno y premium."</p>
                        <small className="fw-bold d-block mt-3">- Sofia P., Venezuela</small>
                    </div>
                </div>
                 <div className="col-md-4 mb-3">
                    <div className="p-4 border rounded text-start h-100 bg-light">
                        <div className="mb-2 text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                        <p className="small fst-italic">"El lookbook me inspiró. Llevo mi nuevo outfit con confianza."</p>
                        <small className="fw-bold d-block mt-3">- Daniel V., Caracas</small>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section className="features-section container my-5 py-5">
        <h2 className="text-center fw-bold mb-5">¿Por Qué Elegir CLEVAC?</h2>
        <div className="row">
          <div className="col-md-4 feature-item">
            <i className="fas fa-magic feature-icon"></i>
            <h5 className="fw-bold">Tecnología Anti-Arrugas</h5>
            <p className="small text-muted">Tejidos que resisten las arrugas, perfectos para el viajero.</p>
          </div>
          <div className="col-md-4 feature-item">
            <i className="fas fa-tshirt feature-icon"></i>
            <h5 className="fw-bold">Confort Transpirable</h5>
            <p className="small text-muted">Diseño ergonómico y materiales ligeros.</p>
          </div>
          <div className="col-md-4 feature-item">
            <i className="fas fa-shield-alt feature-icon"></i>
            <h5 className="fw-bold">Garantía de Calidad</h5>
            <p className="small text-muted">Lentes de sol con protección UV400 y monturas duraderas.</p>
          </div>
        </div>
      </section>

      {/* --- HISTORIA (NUEVO) --- */}
      <section className="container-fluid py-5 bg-light mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="img-fluid rounded shadow" alt="Taller de diseño" />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h6 className="text-uppercase text-primary fw-bold ls-2 mb-2">Nuestra Historia</h6>
              <h2 className="fw-bold mb-4">Diseñado en Caracas, <br />Inspirado en el Mundo.</h2>
              <p className="text-muted mb-4">
                CLEVAC nació de la necesidad de encontrar el equilibrio perfecto entre la elegancia urbana y la comodidad diaria. No solo hacemos ropa; creamos una segunda piel que te acompaña en tus momentos más importantes.
              </p>
              <p className="text-muted mb-4">
                Cada costura es revisada a mano y nuestros materiales son seleccionados para durar años, no temporadas. Creemos en la moda lenta y consciente.
              </p>
              <a href="#" className="btn btn-outline-dark">Leer Más Sobre Nosotros</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- LISTA DE PRODUCTOS (Desde store.js) --- */}
      <ProductList />

      {/* --- FAQ (NUEVO) --- */}
      <section className="container my-5 pt-5" id="faq">
        <h2 className="text-center fw-bold mb-4">Preguntas Frecuentes</h2>
        <div className="accordion accordion-flush mx-auto" id="faqAccordion" style={{ maxWidth: '800px' }}>
          
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                ¿Los productos CLEVAC tienen garantía?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#faqAccordion">
              <div className="accordion-body">Sí, todos nuestros productos tienen una garantía de 30 días contra defectos de fabricación. Consulta nuestra política para más detalles.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                ¿Cómo elijo la talla correcta?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#faqAccordion">
              <div className="accordion-body">Recomendamos revisar nuestra guía de tallas detallada en cada página de producto. Si tienes dudas, contáctanos.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                ¿Cuál es su política de devoluciones?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#faqAccordion">
              <div className="accordion-body">Aceptamos devoluciones y cambios dentro de los 14 días posteriores a la compra, siempre y cuando el producto esté sin usar y con las etiquetas originales.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                ¿Hacen envíos internacionales?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#faqAccordion">
              <div className="accordion-body">Sí, ofrecemos envíos a la mayoría de los países. Los costos y tiempos de entrega varían según el destino.</div>
            </div>
          </div>

        </div>
      </section>

      {/* --- NEWSLETTER (NUEVO) --- */}
      <section className="newsletter-section text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h3 className="fw-bold mb-3">Únete al Club CLEVAC</h3>
              <p className="text-muted mb-4">Recibe un 10% de descuento en tu primera compra y acceso exclusivo a nuevas colecciones.</p>
              <form action="#">
                <div className="input-group mb-3">
                  <input type="email" className="form-control newsletter-input" placeholder="Tu correo electrónico" aria-label="Tu correo electrónico" />
                  <button className="btn btn-subscribe" type="button">SUSCRIBIRSE</button>
                </div>
              </form>
              <small className="text-muted">Respetamos tu privacidad. Sin spam, solo estilo.</small>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (NUEVO) --- */}
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
                <li className="nav-item"><a href="#" className="nav-link">Términos de Servicio</a></li>
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
    </div>
  );
}

export default App;
