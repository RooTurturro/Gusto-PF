import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetail } from "../../redux/actions";
import styles from "./Detail.module.css";
import RatingProducts from "../RatingProducts/RatingProducts";
import Edit from "../Edit";
import {addToCart} from '../../redux/shoppingActions'


const Detail = () => {
	const navigate = useNavigate()
	const usuario = useSelector(state => state.user);
	const { id } = useParams();
	const product = useSelector((state) => state.productDetail);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsDetail(id));
	}, [dispatch, id]);

	const Swal = require("sweetalert2");

	function addItemToCart(){
		dispatch(addToCart(id));
		Swal.fire('Producto añadido al carrito!')
	}

	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<img src={product.image} alt="nada" />
				<div className={styles.info} >
					<h3>{product.name}</h3>
					<p>{product.description}</p>
					<RatingProducts id={id} />
					<button style={{ width: '50px', margin: '6px', marginTop:'20px'}} type="button" className="btn btn-success" onClick={() => {addItemToCart()}} >
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
							<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
						</svg>
					</button>
				</div>
			</div>

			<div className={styles.actionsButtons}>
				{usuario.isAdmin ? usuario.isAdmin && (
					<Edit productDetail={product} />
				) : null}
				<div>
					<button onClick={() => navigate(-1)} type="button" className="btn btn-danger">Volver</button>
				</div>
			</div>
		</div>
	);
};

export default Detail;
