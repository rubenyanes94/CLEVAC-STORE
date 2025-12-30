import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { ProductList } from './components/ProductList';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { QuickViewModal } from './components/QuickViewModal';
import { Categories } from './components/Categories';
import { Testimonials } from './components/Testimonials';
import { Choose } from './components/Choose';
import { AboutUs } from './components/AboutUs';
import { Qa } from './components/Qa';
import { Footer } from './components/Footer';
import { SearchPage } from './components/SearchPage';

function App() {
  const [viewedProduct, setViewedProduct] = useState(null);


  return (
    <div>
      <div className="promo-bar">
        <div className="container">
          ENVÍO A TODO EL PAÍS | <a href="#ropa">COMPRAR AHORA</a>
        </div>
      </div>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Categories />
            <ProductList title="Nuestros Favoritos" category="all" setViewedProduct={setViewedProduct} />
            <Testimonials />
            <Choose />
            <AboutUs />
            <Qa />
          </>
        } />

        <Route path="/search" element={<SearchPage setViewedProduct={setViewedProduct} />} />

        <Route path="/categoria/:categoryName" element={
          <div className="pt-5 mt-5"> 
            <ProductList setViewedProduct={setViewedProduct} />
          </div>
        } />
      </Routes>

      <QuickViewModal 
        product={viewedProduct} 
        onClose={() => setViewedProduct(null)} 
      />

      <Footer />
    </div>
  );
}

export default App;