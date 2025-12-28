// src/components/ProductList.jsx
import React from 'react';
import { products } from '../data/store';
import { ProductCard } from './ProductCard'; 

export const ProductList = ({ selectedCategory = 'all' }) => {
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(item => item.category === selectedCategory);

  return (
    <section className="container my-5" id="ropa">
        <h2 className="text-center fw-bold mb-5">
            {selectedCategory === 'all' 
              ? 'Nuestros Favoritos, Pensados para Ti' 
              : `Colección: ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
        </h2>
        
        <div className="row justify-content-center g-4">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))
            ) : (
                <div className="col-12 text-center my-5">
                    <p className="text-muted">No hay productos disponibles en esta categoría por ahora.</p>
                </div>
            )}
            
            {selectedCategory === 'all' && (
                <div className="col-12 text-center mt-4">
                    <a href="#" className="btn btn-outline-dark px-5 py-2">Ver Toda la Tienda</a>
                </div>
            )}
        </div>
    </section>
  );
};