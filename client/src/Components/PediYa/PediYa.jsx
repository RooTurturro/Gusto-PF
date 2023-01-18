import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentUrl, postPurchase } from "../../redux/actions";
import axios from "axios";
import FinalCheckOut from "./FinalCheckOut";
import { useAuth0 } from "@auth0/auth0-react";




const PediYa = () => {

	const { isAuthenticated, loginWithRedirect } = useAuth0()
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart)
	const usuario = useSelector(state => state.user);
	
	const Swal = require("sweetalert2");

	const totalPrice = () => {
		//FUNCIONA, tenemos la suma de todos los precios
		return cart.reduce((total, item) => total + item.price, 0);
	};




	const handlePayment = () => {
		if(!usuario.address){
			Swal.fire('Completa los datos para continuar la compra')
			return 
		} 

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
			takeAway: true
		};

		/*const to = detail.email;
		const name = detail.name;
		const compras = detail;
		const sendEmail = async () => {
			await axios.post("http://localhost:3001/api/mail/checkout", { to, name , compras})
		};
		sendEmail();*/
		dispatch(getPaymentUrl(detail));
		dispatch(postPurchase(detail))


	};

	console.log(usuario)

	return (
		<>
			{/* {isAuthenticated ?
				isAuthenticated && ( */}
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
								<button onClick={handlePayment} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{alignContent:'flex-start',color: '#212529'}} >
								Finalizar compra!
 								<FinalCheckOut/>
								</button>
								
							</div>
						</div>
					</div >
				{/* ) :

				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<div>
						Inicie sesion para utilizar el carrito!
					</div>
					<button onClick={() => loginWithRedirect()} type="button" className="btn btn-primary">
						Iniciar Sesion
					</button>
				</div>
			} */}
		</>
	);
};

export default PediYa;