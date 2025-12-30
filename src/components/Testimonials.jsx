import React from "react";

export const Testimonials = () => {
  return (
    <section className="trusted-listeners border-top border-bottom">
        <div className="container">
            <h4 className="fw-bold mb-4">Amado por los Clientes</h4>
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
    );
};