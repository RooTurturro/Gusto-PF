import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetail } from "../../redux/actions";
import styles from "./Detail.module.css";
import RatingProducts from "../RatingProducts/RatingProducts";
import Edit from "../Edit";

const Detail = () => {
	const { id } = useParams();
	const product = useSelector((state) => state.productDetail);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsDetail(id));
	}, [dispatch, id]);
	console.log(product);
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<img src={product.image} alt="nada" />
				<div className={styles.info} >
					<h3>{product.name}</h3>
					<p>Descripcion sobre el producto: {product.description}</p>
					<RatingProducts id={id} />
				</div>
			</div>
			<div className={styles.actionsButtons}>

				<Edit productDetail={product} />

				<Link to={"/menu"}>
					<button type="button" class="btn btn-danger">Volver</button>
				</Link>
			</div>
		</div>
	);
};

export default Detail;
