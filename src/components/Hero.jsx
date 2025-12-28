import react from 'react'

export const Hero = () => {
    return (
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
              <img src="clevac-store.jpeg"
                className="img-fluid rounded shadow-lg animate__animated animate__fadeInRight"
                style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
                alt="Hombre con ropa de moda CLEVAC" />
            </div>
          </div>
        </div>
      </header>
    );
}