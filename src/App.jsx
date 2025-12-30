// src/App.jsx
import React from 'react';
import { useState } from 'react';
import { Route } from 'react-router-dom';
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

function App() {

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [viewedProduct, setViewedProduct] = useState(null);

  return (
    <div>
      <div className="promo-bar">
        <div className="container">
          ENVÍO A TODO EL PAÍS | <a href="#ropa">COMPRAR AHORA</a>
        </div>
      </div>
      <NavBar setCategory={setSelectedCategory} />
      {selectedCategory === 'all' && (
      <>
        <Hero />
        <Categories/>
      </>
      )}
      <ProductList selectedCategory={selectedCategory} setViewedProduct={setViewedProduct} />
      <Testimonials/>
      <Choose/>
      <AboutUs/>
      <Qa/>

      <QuickViewModal 
        product={viewedProduct} 
        onClose={() => setViewedProduct(null)} 
      />

      <Footer/>
    </div>
  );
}

export default App;
