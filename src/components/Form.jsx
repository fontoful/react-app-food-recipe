import React from "react";
import "../App.scss";

const Form = ({ getRecipe }) => {
	return (
		<div>
			<form>
				<input type="text" name="recipeName" />
				<button type="submit" onSubmit={getRecipe}>
					Search
				</button>
			</form>
		</div>
	);
};

export default Form;
