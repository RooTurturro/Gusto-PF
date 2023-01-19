import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";


export default function Card({ id, name, price, description, image, addToCart, rating, category }) {
	const Swal = require("sweetalert2");


	const handleClick = () => {
		Swal.fire('Producto añadido al carrito!')
	}
	return (
		// <section className="light">
		// 	<div >
		// 		<div className="container py-2">
		// 			<div className="postcard light red">
		// 				<img className="postcard__img" src={image} alt="burger" />
		// 				<div className="postcard__text t-dark">
		// 					<Link to={`/products/${id}`} className="postcard__title red">{name}</Link>
		// 					<div>
		// 						Valoracion: {rating}
		// 					</div>
		// 					<div className="postcard__bar"></div>
		// 					<div className="postcard__preview-txt"> {description}</div>
		// 					<ul className="postcard__tagbox">
		// 						<li style={{ fontSize: '20px' }} className="tag__item">
		// 							${price}
		// 						</li>
		// 						<li style={{ fontSize: '20px' }} className="tag__item">
		// 							{category}
		// 						</li>

		// 					</ul>
		// 					<div style={{ display: 'flex', flexDirection: 'column', width: '20%', gap: '1rem', marginTop: '20px' }}>
		// 						{isAuthenticated ?
		// 							isAuthenticated && (
		// 								<button type="button" className="btn btn-info" onClick={() => { addToCart(id); handleClick() }} >
		// 									Agregar al carrito
		// 								</button>

		// 							): null}
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>

		<div class="card" style={{ width: '18rem', backgroundColor: 'transparent', border: 'none' }}>
			<button style={{ width: '50px', margin:'auto' }} type="button" className="btn btn-success" onClick={() => { addToCart(id); handleClick() }} >
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
					<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
				</svg>
			</button>
			<Link to={`/products/${id}`}>
				<img src={image} class="card-img-top" alt="..." />
			</Link>
			<div class="card-body">
				<h5 class="card-title">{name}</h5>
			</div>
		</div>
	);
}
