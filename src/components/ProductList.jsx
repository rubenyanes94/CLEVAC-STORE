// src/components/ProductList.jsx
import React from 'react';
import { products } from '../data/store'; // Importamos la data
import { ProductCard } from './ProductCard'; // Importamos la tarjeta

export const ProductList = () => {
  return (
    <section className="container my-5" id="ropa">
        <h2 className="text-center fw-bold mb-5">Nuestros Favoritos, Pensados para Ti</h2>
        <div className="row justify-content-center">
            {/* Aquí ocurre la magia: Mapeamos la data */}
            {products.map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
            
            <div className="col-12 text-center mt-4">
                <a href="#" className="btn btn-outline-dark px-5 py-2">Ver Toda la Tienda</a>
            </div>
        </div>
    </section>
  );
};