import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetail } from "../../redux/actions";
import styles from "./Detail.module.css";
import start from '../../assets/startButton.png'
import { addToCart } from '../../redux/shoppingActions'
import add from '../../assets/addToCart.png'
import Nav from '../NavBar/Nav'
import arrow from '../../assets/arrow.png'
import RatingProducts from '../RatingProducts/RatingProducts'
import videomaqueta from '../../assets/videoMaqueta.png'
import hottestImage from '../../assets/hottestImage.png'

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
						<RatingProducts />
						<p className={styles.description}>{product.description}</p>
						<p>${product.price}</p>
						<button style={{ border: 'none' }}>
						<img src={add} alt='??' />
						</button>
					</div>
					<div style={{ width: '40rem', display: 'flex', justifyContent: 'space-between' }}>
						<button className={styles.arrowContainer} onClick={() => navigate(-1)} ><img className={styles.arrow} src={arrow} alt='nada' />VOLVER</button>
						<div style={{ display: 'flex', width: '50rem', alignItems: 'flex-end', marginLeft: '30rem' }}>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<img src={arrow} className={styles.videoArrow} alt="flecha" />
								<img src={videomaqueta} alt="" />
							</div>
							<div>
								<p style={{ fontSize: '.8rem', marginBottom: '-.1rem', marginLeft: '1rem' }}>
									<img src={start} alt='nada' />
									<br />
									NO MARKETING
									<br />
									BULLSHIT, 2 MINUTOS
									<br />
									DE BURGER
								</p>
							</div>
						</div>
					</div>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: '4rem' }}>
					<div style={{ display: 'flex', alignItems: 'center', height: '5rem' }} >
						<p style={{ fontFamily: 'Oswald', fontWeight: '900', color: '#707981' }} >{product.name} ES EL
							<br />
							MAS COMPRADO DE HOY</p>
						<img style={{ marginBottom: '1rem',transform: 'scaleX(-1)' }} src={hottestImage} alt="adasd" />
					</div>
					<img className={styles.detailImage} src={product.image} alt='foto' />
				</div>
			</div>
		</div>
	);
};

export default Detail;
