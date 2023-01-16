import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetail } from "../../redux/actions";
import styles from "./Detail.module.css";
import RatingProducts from "../RatingProducts/RatingProducts";
import Edit from "../Edit";


const Detail = () => {
	const navigate = useNavigate()
	const usuario = useSelector(state => state.user);
	const { id } = useParams();
	const product = useSelector((state) => state.productDetail);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsDetail(id));
	}, [dispatch, id]);

	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<img src={product.image} alt="nada" />
				<div className={styles.info} >
					<h3>{product.name}</h3>
					<p>{product.description}</p>
					<RatingProducts id={id} />
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
