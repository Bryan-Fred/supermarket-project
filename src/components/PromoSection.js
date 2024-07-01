import React, { useEffect } from 'react';

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
      setTimeout(showSlides, 3000); // Change image every 2 seconds
    }
  }, []);
  

  return (
    <section className="promo-section">
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src="veges.jpg" alt="Promo 1" />
          <div className="text">
            <div>Fresh Vegetables</div>
          </div>
        </div>
        <div className="mySlides fade">
          <img src="fruits.jpg" alt="Promo 2" />
          <div className="text">
            <div>Discounts on Fruits</div>
          </div>
        </div>
        <div className="mySlides fade">
          <img src="organic.jpg" alt="Promo 3" />
          <div className="text">
            <div>Organic Products</div>
          </div>
        </div>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default PromoSection;
