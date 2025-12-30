import react from 'react';

export const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <section className="container my-5" id="categorias">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="category-card animate__animated animate__fadeIn">
                <img src="clevac-chaqueta.jpeg" alt="Hombres" />
                <div className="category-overlay"><span className="category-title">Hombres</span></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-card animate__animated animate__fadeIn animate__delay-1s">
                <img src="clevac-camisa.jpeg" alt="Mujeres" />
                <div className="category-overlay"><span className="category-title">Mujeres</span></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-card animate__animated animate__fadeIn animate__delay-2s">
                <img src="clevac-franela.jpeg" alt="Accesorios" />
                <div className="category-overlay"><span className="category-title">Accesorios</span></div>
              </div>
            </div>
          </div>
        </section>
    );
};