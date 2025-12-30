import react from 'react';

export const AboutUs = () => {
    return (
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
    );
};