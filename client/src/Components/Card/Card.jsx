import React from "react";
import "./Card.css";
import add from '../../assets/addToCart.png'
import { Link } from "react-router-dom";



export default function Card({ id, name, price, description, image, addToCart }) {
	const Swal = require("sweetalert2");
	// const { isAuthenticated } = useAuth0();
	const handleClick = () => {
		Swal.fire({
			title: 'Producto añadido al carrito!',
			confirmButtonColor: 'red'
		})
	}

	return (
		<div className="card" >
			<Link to={`/products/${id}`}>
				<img src={image} className="card-img-top" alt="..." />
			</Link>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p>{description}</p>
				<div >
					<p><strong>${price}</strong></p>
					<button style={{ border: 'none' }} onClick={() => { addToCart(id); handleClick() }}>
						<img style={{ width: '9rem' }} src={add} alt='x' />
					</button>
				</div>
			</div>
		</div>
	);
}
