import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";


export default function Card({ id, name, price, description, image, addToCart, rating, category }) {

	return (
		<div className="card" >
			<Link to={`/products/${id}`}>
				<img src={image} className="card-img-top" alt="..." />
			</Link>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p>{description}</p>
				<p>$<strong>{price}</strong></p>
			</div>
		</div>
	);
}
