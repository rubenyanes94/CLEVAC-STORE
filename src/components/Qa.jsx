import react from 'react';

export const Qa = () => {
    return (
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
    );
};