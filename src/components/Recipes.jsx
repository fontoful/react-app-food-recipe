import React from "react";
import "./Recipes.scss";

import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
	return (
		<div className="cards container">
			{recipes.map((item, idx) => {
				return (
					<div key={idx}>
						<div className="card">
							<img src={item.image_url} alt="" />
							<h2>{item.title}</h2>
							<p>Publisher : {item.publisher}</p>

							<button>
								<Link
									to={{
										pathname: `/recipe/${item.recipe_id}`,
										state: { recipe: item.title }
									}}
								>
									View Recipe
								</Link>
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Recipes;
