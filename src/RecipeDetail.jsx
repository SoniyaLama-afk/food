import React, { useEffect, useState } from "react";
import "./recipeDetail.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // const recipeId = window.location.pathname.split("")[2];
  //for Id extraction of url

  // console.log("/recipe/1".split("/")[2]);

  //react router dom ko useParams vanne hook use gareko
  const params = useParams();

  //redirecting url
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRecipe() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes/${params?.id}`
        );
        const result = await response.json();
        setRecipe(result);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [params?.id]);

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-detail">
      <button className="btn" onClick={() => navigate("/")}>
        Back
      </button>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <p>
        <strong>Difficulty:</strong> {recipe.difficulty}
        <strong>Cuisine:</strong>
        {recipe.cuisine}
      </p>
      <h3>Preparation Time:{recipe.prepTimeMinutes}min</h3>
      <p>
        <strong>Description:</strong> {recipe.description}
      </p>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients?.join(", ")}
      </p>
      <p>
        <strong>Instructions:</strong> {recipe.instructions}
      </p>
    </div>
  );
};

export default RecipeDetail;
