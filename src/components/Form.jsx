import React from "react";
import "../App.scss";

const Form = ({ handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="recipeName" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Form;
