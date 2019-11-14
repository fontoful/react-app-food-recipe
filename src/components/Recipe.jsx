import React, { useState, useEffect } from "react";

const API_KEY = "43297c46c87149f3a14cc5e5c316ea83";

const Recipe = props => {
	const [activeRecipe, setActiveRecipe] = useState([]);

	// Use effect to consume the API
	useEffect(() => {
		const fetchRecipes = async () => {
			// get input
			const title = props.location.state.recipe;

			const response = await fetch(
				`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
			);
			const data = await response.json();

			setActiveRecipe(data.recipes[0]);
		};

		fetchRecipes();
	}, []);

	const recipe = activeRecipe;

	return (
		<div className="container">
			<img src={recipe.image_url} alt={recipe.title} />
			<h1>{recipe.title}</h1>
		</div>
	);
};

export default Recipe;
