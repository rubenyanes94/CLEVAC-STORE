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

  const filteredProducts = products.filter(item => 
    currentCategory === 'all' ? true : item.category.toLowerCase() === currentCategory.toLowerCase()
  );

  const isHome = currentCategory === 'all';

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold mb-5 text-uppercase">
        {isHome ? title : `Colección ${currentCategory}`}
      </h2>

      {filteredProducts.length > 0 ? (
        isHome ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 }
            }}
          >
            {filteredProducts.map(item => (
              <SwiperSlide key={item.id}>
                <ProductCard product={item} setViewedProduct={setViewedProduct} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="row g-4">
            {filteredProducts.map(item => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <ProductCard product={item} setViewedProduct={setViewedProduct} />
              </div>
            ))}
          </div>
        )
      ) : (
        <p className="text-center text-muted">No hay productos en esta categoría.</p>
      )}
    </section>
  );
};