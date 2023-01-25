import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentUrl, postPurchase, getAllUsers } from "../../redux/actions";
import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./PediYa.module.css";


const PediYa = () => {


	const useModal = (initialValue = false) => {
		const [isOpen, setIsOpen] = useState(initialValue);

		const openModal = () => {

			setIsOpen(true);

			const detail = {
				name: usuario.name,
				lastname: usuario.lastname,
				address: usuario.address,
				email: usuario.email,
				specification: usuario.specification,
				total: totalPrice(),

				state: 'en proceso',

				products: [cart.map((el) => {
					return (
						el.name
					)
				})],
				takeAway: true,
				quantity:1
				/*quantity: [cart.map((el) => {
					return (
						el.quantity
					)
				})],*/
			};

			const data = () => {
				window.localStorage.setItem('detailProducts', detail.products);
				window.localStorage.setItem('detailPrice', detail.total);
				window.localStorage.setItem('detailState', detail.state);
				window.localStorage.setItem('detailAdress', detail.address);
				window.localStorage.setItem('detailQuantity', detail.quantity);
			}

			dispatch(getPaymentUrl(detail));
			dispatch(postPurchase(detail));
			dispatch(getAllUsers());
			data();
		}

		const closeModal = () => setIsOpen(false);

		return [isOpen, openModal, closeModal];
	};

	const [isOpenModal, openModal, closeModal] = useModal(false);

	
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart)
	const usuario = useSelector(state => state.user);



	const Swal = require("sweetalert2");

	const totalPrice = () => {
		//FUNCIONA, tenemos la suma de todos los precios
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const handlePayment = () => {

		if (!usuario.address) {
			Swal.fire('Completa los datos para continuar la compra')
				.then((result) => {
					if (result.value) {
						window.location.href = 'https://ganasdegusto.vercel.app/editarperfilusuario';
					}
				})

		}
	};
	
	

	return (

		
			

				<div className={styles.container}>
					
						
							
						<div className={styles.montototal}>
									<strong>Monto total</strong>
									<span><strong>${totalPrice()}</strong></span>
						</div>
							
						<div>

							<button type="button" className={styles.pediya} onClick={usuario.address ? openModal : handlePayment}>PEDI YA!</button>
						
						</div>
						

						<Modal isOpen={isOpenModal} closeModal={closeModal} />
					
				</div>
			



	);
};

export default PediYa;