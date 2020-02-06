import React from "react";
import style from "./recipe.module.css";

//3. pass them doown to the component
const Recipe = ({ title, calories, image, ingredients = [] }) => {
  //{title ... } deconstruction
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};
export default Recipe;
