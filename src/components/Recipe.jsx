import React, { useState, useEffect } from "react";

const API_KEY = "43297c46c87149f3a14cc5e5c316ea83";

const Recipe = props => {
	const [activeRecipe, setActiveRecipe] = useState([]);

	// Logging it to the console
	console.log(props);

	// Use effect to consume the API
	useEffect(() => {
		const fetch = async () => {
			// get input
			const title = props.location.state.recipe;

			const response = await fetch(
				`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
			);
			const data = await response.json();

			setActiveRecipe(data.recipes[0]);
		};

		fetch();
	}, []);

	return <div>This is the recipe</div>;
};

export default Recipe;
