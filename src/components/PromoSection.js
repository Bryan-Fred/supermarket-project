import React, { useEffect } from 'react';

const slidesData = [
  { src: 'veges.jpg', alt: 'Promo 1', text: 'Fresh Vegetables' },
  { src: 'fruits.jpg', alt: 'Promo 2', text: 'Discounts on Fruits' },
  { src: 'organic.jpg', alt: 'Promo 3', text: 'Organic Products' },
];

const PromoSection = () => {
  useEffect(() => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
  }, []);

  return (
    <section className="promo-section">
      <div className="slideshow-container">
        {slidesData.map((slide, index) => (
          <div key={index} className="mySlides fade">
            <img src={slide.src} alt={slide.alt} />
            <div className="text">
              <div>{slide.text}</div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        {slidesData.map((_, index) => (
          <span key={index} className="dot"></span>
        ))}
      </div>
    </section>
  );
};

export default PromoSection;
