import React from 'react';
import { products } from '../data/store';
import { ProductCard } from './ProductCard'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        
        {filteredProducts.length > 0 ? (
            <Swiper
                modules={[Navigation, Pagination, Mousewheel]}
                spaceBetween={20}
                slidesPerView={1} 
                navigation
                pagination={{ clickable: true }}
                mousewheel={true}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 }
                }}
                className="pb-5" 
            >
                {filteredProducts.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ProductCard product={item} isCarousel={true} />
                    </SwiperSlide>
                ))}
            </Swiper>
        ) : (
            <div className="col-12 text-center my-5">
                <p className="text-muted">No hay productos disponibles.</p>
            </div>
        )}
        
        {selectedCategory === 'all' && (
            <div className="text-center mt-4">
                <button className="btn btn-outline-dark px-5 py-2">Ver Toda la Tienda</button>
            </div>
        )}
    </section>
  );
};