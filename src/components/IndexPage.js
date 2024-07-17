import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import Header from "./Header";
import PromoSection from "./PromoSection";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import CustomerTestimonials from "./CustomerTestimonials";
import Toiletries from "./Toiletries";
import FrozenFoods from "./FrozenFoods";
import Grains from "./Grains";
import Breakfast from "./Breakfast";
import Pastries from "./Pastries";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="body-content">
      <PromoSection />
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
};

export default IndexPage;
