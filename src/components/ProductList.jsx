import React from 'react';
import { products } from '../data/store';
import { ProductCard } from './ProductCard'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams } from 'react-router-dom';

export const ProductList = ({ setViewedProduct, title, category }) => {
  const { categoryName } = useParams();
  const currentCategory = categoryName || category || 'all';

  const filteredProducts = currentCategory === 'all' 
    ? products 
    : products.filter(item => item.category === currentCategory);

  return (
    <section className="container my-5">
        <h2 className="text-center fw-bold mb-5 text-uppercase">
            {currentCategory === 'all' ? title : `Colección ${currentCategory}`}
        </h2>
        
        {filteredProducts.length > 0 ? (
            <Swiper
                modules={[Navigation, Pagination, Mousewheel, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                mousewheel={true}
                autoplay={{
                  delay: 3000, 
                  disableOnInteraction: false, 
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 }
                }}
                className="pb-5"
            >
                {filteredProducts.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ProductCard product={item} isCarousel={true} setViewedProduct={setViewedProduct} />
                    </SwiperSlide>
                ))}
            </Swiper>
        ) : (
            <div className="col-12 text-center my-5">
                <p className="text-muted">No hay productos disponibles.</p>
            </div>
        )}
    </section>
  );
};