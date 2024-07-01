// src/CustomerTestimonials.js
import React from 'react';

const CustomerTestimonials = () => {

  const testimonials = [
    {
      name: "John Doe",
      rating: 5,
      message: "Great service and amazing products!",
      photo: "https://via.placeholder.com/50",
    },
    {
      name: "Jane Smith",
      rating: 4,
      message: "I love the quality of the products.",
      photo: "https://via.placeholder.com/50",
    },
    {
      name: "Alice Johnson",
      rating: 5,
      message: "Fast delivery and excellent customer support.",
      photo: "https://via.placeholder.com/50",
    },
    {
      name: "Michael Brown",
      rating: 3,
      message: "Good products, but the prices are a bit high.",
      photo: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="customer-testimonials">
        <div className="testimonial-header">
            <div className='left-line'></div>
            <h2>Customer Testimonials</h2>
            <div className='right-line'></div>
        </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <div className="customer-info">
                <div className="customer-photo" style={{ backgroundImage: `url(${testimonial.photo})` }}></div>
                <h3>{testimonial.name}</h3>
              </div>
              <div className="customer-rating">
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p>{testimonial.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
