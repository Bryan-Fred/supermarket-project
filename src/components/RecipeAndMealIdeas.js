import React from 'react';

const RecipesAndMealIdeas = () => {
  // Example recipes data
  const recipes = [
    {
      id: 1,
      title: "Grilled Salmon with Asparagus",
      description: "Delicious grilled salmon served with fresh asparagus, seasoned with herbs and lemon.",
      imageUrl: "salmon.jpg", // Replace with your image path
    },
    {
      id: 2,
      title: "Mango Avocado Salad",
      description: "Refreshing salad made with ripe mangoes, creamy avocado, and a tangy lime dressing.",
      imageUrl: "salad.jpg", // Replace with your image path
    },
    {
      id: 3,
      title: "Pasta Primavera",
      description: "Classic pasta dish with a variety of fresh vegetables and a light olive oil sauce.",
      imageUrl: "pasta.jpg", // Replace with your image path
    },
  ];

  return (
    <section className="recipes-section">
      <div className="container">
        <h2>Recipes and Meal Ideas</h2>
        <div className="recipes-list">
          {recipes.map(recipe => (
            <div className="recipe" key={recipe.id}>
              <div className="recipe-image" style={{ backgroundImage: `url(${recipe.imageUrl})` }}></div>
              <div className="recipe-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button className="view-recipe-btn">View Recipe</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesAndMealIdeas;
