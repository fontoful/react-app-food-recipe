import React from "react";
import "../App.scss";

const Form = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="recipeName" placeholder="Look a recipe" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
