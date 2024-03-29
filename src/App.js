import React, { useState, useEffect } from "react";
import "./App.scss";
import Navbar from "./styles/Navbar";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "43297c46c87149f3a14cc5e5c316ea83";

function App() {
	const [recipe, setRecipe] = useState([]);

	const getRecipe = async e => {
		// prevent default
		e.preventDefault();

		// get input
		const name = e.target.elements.recipeName.value;

		const response = await fetch(
			`https://www.food2fork.com/api/search?key=${API_KEY}&q=${name}&count=10  `
		);
		const data = await response.json();
		const recipes = data.recipes;

		// Setter
		setRecipe(recipes);
	};

	return (
		<>
			<Navbar />
			<Form handleSubmit={getRecipe} />
			<Recipes recipes={recipe} />
		</>
	);
}

export default App;
