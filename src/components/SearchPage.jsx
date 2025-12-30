import React from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/store';
import { ProductCard } from './ProductCard';

export const SearchPage = ({ setViewedProduct }) => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-5 pt-5 min-vh-100">
      <h3 className="mb-4">
        Resultados para: <span className="text-muted fw-light">"{query}"</span>
      </h3>
      
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3">
              <ProductCard product={product} setViewedProduct={setViewedProduct} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted fs-5">No se encontraron productos.</p>
            <Link to="/" className="btn btn-dark">Volver a la tienda</Link>
          </div>
        )}
      </div>
    </div>
  );
};