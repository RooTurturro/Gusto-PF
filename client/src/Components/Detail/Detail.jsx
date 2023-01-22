import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetail } from "../../redux/actions";
import styles from "./Detail.module.css";

import { addToCart } from '../../redux/shoppingActions'
import add from '../../assets/addToCart.png'
import Nav from '../NavBar/Nav'
import arrow from '../../assets/arrow.png'
import RatingProducts from '../RatingProducts/RatingProducts'


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

	function addItemToCart() {
		dispatch(addToCart(id));
		Swal.fire('Producto añadido al carrito!')
	}

	return (
		<div className={styles.detail}>
			<Nav />
			<div className={styles.detailContainer}>
				<div className={styles.detailInfo}>
					<div>
						<h1>{product.name}</h1>
						<RatingProducts/>
						<p className={styles.description}>{product.description}</p>
						<p>${product.price}</p>
						<img src={add} alt='??' />
					</div>
					<button className={styles.arrowContainer} onClick={() => navigate(-1)} ><img className={styles.arrow} src={arrow} alt='nada' />VOLVER</button>
				</div>
				<img className={styles.detailImage} src={product.image} alt='foto' />
			</div>
		</div>
	);
};

export default Detail;
