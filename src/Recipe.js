import React from "react";

//3. pass them doown to the component
const Recipe = (title, calories, image) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};
export default Recipe;
