import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./recipe.css";

const Recipe = () => {
  const [data, setData] = useState([]);

  async function myRecipes() {
    const response = await fetch("https://dummyjson.com/recipes");
    const result = await response.json();
    setData(result.recipes);
  }
  useEffect(() => {
    myRecipes();
  }, []);

  return (
    <>
      <div className="container">
        <h1>
          <b>FOOD RECIPES </b>
        </h1>
        <div className="recipe-list">
          {data.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <div className="recipe-card">
                <img src={recipe.image} alt={recipe.name} />
                <h2>{recipe.name}</h2>
                <p>Rating: {recipe.rating}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recipe;
