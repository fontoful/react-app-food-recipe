import React, { useState, useEffect } from "react";
import "./App.scss";
import Navbar from "./styles/Navbar";
import Form from "./components/Form";

const API_KEY = "43297c46c87149f3a14cc5e5c316ea83";

function App() {
	// useEffect(() => {
	// 	const fetchData = async e => {
	// 		const response = await fetch(
	// 			`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken`
	// 		);
	// 		const data = await response.json();

	// 		console.log(data.recipes);
	// 	};

	// 	fetchData();
	// }, []);

	const fetchData = async e => {
		// Prevent default
		e.preventDefault();

		// Get input value
		const name = e.target.value;

		// const response = await fetch(
		// 	`https://www.food2fork.com/api/search?key=${API_KEY}&q=${name}&count=10`
		// );
		// const data = await response.json();

		// console.log(data.recipes);
		console.log(name);
	};

	return (
		<>
			<Navbar />
			<Form getRecipe={fetchData} />
		</>
	);
}

export default App;
