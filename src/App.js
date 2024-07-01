import React from 'react';
import './App.css';
import Header from './components/Header';
import PromoSection from './components/PromoSection';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <div className="App">
      <Header />
      <PromoSection />
      <FeaturedProducts />
    </div>
  );
}

export default App;
