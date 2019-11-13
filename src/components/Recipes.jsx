import React from "react";
import "./Recipes.scss";

const Recipes = ({ recipes }) => {
	return (
		<div className="cards">
			{recipes.map(item => {
				return (
					<div key={item.id}>
						<div className="card">
							<img src={item.image_url} alt="" />
							<h2>{item.title}</h2>
							<p>Publisher : {item.publisher}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Recipes;
