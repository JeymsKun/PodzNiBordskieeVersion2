import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import foodsData from '../data/foods';
import '../css/food-details-style.css';

function Food() {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    const selectedFood = foodsData.find((food) => food.id === parseInt(id));
    setFood(selectedFood);
  }, [id]);

  if (!food) {
    return <div>Food not found</div>;
  }

  const instructionsHTML = food.instructions.map((instruction, index) => {
    const sentences = instruction.split('. ');
    const numberedSentences = sentences.map((sentence, i) => {
      const number = i === 0 ? index + 1 : '';
      return (
        <p key={i}>
          {number ? number + '. ' : ''}
          {sentence}
        </p>
      );
    });
    return numberedSentences;
  });

  const imagePath = require(`../foods/${food.image}`);

  return (
    <div className="food-details-container container-food-details">
      <h1 id="food-name">{food.name}</h1>
      <img id="food-image" src={imagePath} alt={food.name} />
      <p id="food-description">{food.description}</p>
      <h2>Ingredients:</h2>
      <ul id="food-ingredients">
        {food.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <div id="food-instructions">{instructionsHTML}</div>
    </div>
  );
}

export default Food;
