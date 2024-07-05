import React from 'react';
import './App.css';
import Header from './components/Header';
import PromoSection from './components/PromoSection';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import CustomerTestimonials from './components/CustomerTestimonials';
import Toiletries from './components/Toiletries';
import FrozenFoods from './components/FrozenFoods';
import Grains from './components/Grains';
import Breakfast from './components/Breakfast';
import Pastries from './components/Pastries';
import ProductModal from './components/ProductModal';
import HealthTipsSection from './components/HealthTipsSection';
import RecipeAndMealIdeas from './components/RecipeAndMealIdeas';

function App() {
  return (
    <div className="App">
      <Header />
      <PromoSection />
      <div className="body-content">
      <FeaturedProducts />
      <Toiletries />
      <FrozenFoods />
      <Grains />
      <Breakfast />
      <Pastries />
      <CustomerTestimonials />
      </div>
      <Footer />
    </div>
  );
}

export default App;