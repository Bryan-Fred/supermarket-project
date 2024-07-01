import React from 'react';
import './App.css';
import Header from './components/Header';
import PromoSection from './components/PromoSection';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import CustomerTestimonials from './components/CustomerTestimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <PromoSection />
      <FeaturedProducts />
      <CustomerTestimonials />
    </div>
  );
}

export default App;