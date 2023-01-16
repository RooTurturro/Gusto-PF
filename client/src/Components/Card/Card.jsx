import React from "react";
import "./Card.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Card({ id, name, price, description, image, addToCart, rating, category }) {
	const Swal = require("sweetalert2");
	const { isAuthenticated } = useAuth0();

	const handleClick = () => {
		Swal.fire('Producto añadido al carrito!')
	}
	return (
		<section className="light">
			<div >
				<div className="container py-2">
					<div className="postcard light red">
						<img className="postcard__img" src={image} alt="burger" />
						<div className="postcard__text t-dark">
							<Link to={`/products/${id}`} className="postcard__title red">{name}</Link>
							<div>
								Valoracion: {rating}
							</div>
							<div className="postcard__bar"></div>
							<div className="postcard__preview-txt"> {description}</div>
							<ul className="postcard__tagbox">
								<li style={{ fontSize: '20px' }} className="tag__item">
									${price}
								</li>
								<li style={{ fontSize: '20px' }} className="tag__item">
									{category}
								</li>

							</ul>
							<div style={{ display: 'flex', flexDirection: 'column', width: '20%', gap: '1rem', marginTop: '20px' }}>
								{isAuthenticated ?
									isAuthenticated && (
										<button type="button" className="btn btn-info" onClick={() => { addToCart(id); handleClick() }} >
											Agregar al carrito
										</button>

									): null}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
