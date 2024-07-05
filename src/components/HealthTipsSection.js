import React from 'react';

const HealthTipsSection = () => {
  // Example health tips data
  const healthTips = [
    {
      id: 1,
      title: "Eat a Variety of Foods",
      content: "Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in your diet.",
    },
    {
      id: 2,
      title: "Stay Hydrated",
      content: "Drink plenty of water throughout the day to stay hydrated and support overall health.",
    },
    {
      id: 3,
      title: "Get Regular Exercise",
      content: "Engage in regular physical activity to improve cardiovascular health, muscle strength, and mental well-being.",
    },
    {
      id: 4,
      title: "Prioritize Sleep",
      content: "Ensure you get adequate sleep each night to support energy levels, mood, and overall health.",
    },
  ];

  return (
    <section className="health-tips-section">
      <div className="container">
        <h2>Health and Wellness Tips</h2>
        <div className="tips-list">
          {healthTips.map(tip => (
            <div className="tip" key={tip.id}>
              <h3>{tip.title}</h3>
              <p>{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTipsSection;
