import React from "react";
import "../../styles/App.scss";

const Form = ({ handleSubmit }) => {
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="recipeName"
                    placeholder="Look for a recipe.."
                    id="mainInput"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Form;
