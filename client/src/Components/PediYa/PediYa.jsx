import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentUrl, postPurchase } from "../../redux/actions";
import axios from "axios";

import { useState } from "react";
import Modal from "../Modal/Modal";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const PediYa = () => {


	const useModal = (initialValue = false) => {
		const [isOpen, setIsOpen] = useState(initialValue);
		
		const openModal = () =>{
			
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
					quantity: [cart.map((el) => {
												return (
													el.quantity
													)
												})],
											takeAway: true
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

	const { isAuthenticated, loginWithRedirect } = useAuth0()
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart)
	const usuario = useSelector(state => state.user);

	
	
	const Swal = require("sweetalert2");

	const totalPrice = () => {
		//FUNCIONA, tenemos la suma de todos los precios
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const handlePayment = () => {

		if(!usuario.address){
			Swal.fire('Completa los datos para continuar la compra')
			.then((result) => {
				if (result.value) {
					window.location.href='https://ganasdegusto.vercel.app/editarperfilusuario';
				}
			})
			
		} 
	};

	console.log(usuario);

	return (
			
				<div className="card-body">
					<div>

						<div className="card-body">
							<div>
								<ul className="list-group list-group-flush">
									<li
										className="list-group-item border-0 px-0 mb-3">
										<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
											<strong>Monto total</strong>
											<span><strong>${totalPrice()}</strong></span>
										</div>
									</li>
								</ul>
								<button type="button" className="btn btn-primary" style={{ alignContent: "flex-start", color: "#212529" }} onClick={usuario.address ? openModal : handlePayment}>Finalizar compra!</button>
									<Modal isOpen={isOpenModal} closeModal={closeModal}/>								
							</div>
						</div>
					</div >
				</div >
				
		
	);
};

export default PediYa;