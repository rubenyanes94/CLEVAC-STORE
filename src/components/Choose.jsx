import React from "react";

export const Choose = () => {
    return (
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
    );
};