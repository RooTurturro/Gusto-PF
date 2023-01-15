import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentUrl, postPurchase } from "../../redux/actions";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";


const PediYa = () => {

	const { isAuthenticated, loginWithRedirect, user } = useAuth0()
	const dispatch = useDispatch();
	const paymentUrl = useSelector((state) => state.paymentUrl);
	const cart = useSelector((state) => state.cart)
	const purchase = useSelector((state) => state.purchase)
	const usuario = useSelector(state => state.user);
	const totalPrice = () => {
		//FUNCIONA, tenemos la suma de todos los precios
		return cart.reduce((total, item) => total + item.price, 0);
	};




	const handlePayment = () => {

		const detail = {
			name: usuario.name,
			lastname: usuario.lastname,
			address: usuario.address,
			email: usuario.email,
			specification: usuario.specification,
			total: totalPrice(),
			state: 'En proceso',
			products: [cart.map((el) => {
				return (
					el.name
				)
			})],
			takeAway: true
		};
		const userDetail = {
			name: "emiliano",
			to: "emilianore997@gmail.com"
		}
		const to = userDetail.to;
		const name = userDetail.name;
		const sendEmail = async () => {
			await axios.post("http://localhost:3001/api/mail/checkout", { to, name })
		};
		sendEmail();
		console.log(detail);
		dispatch(getPaymentUrl(detail));
		dispatch(postPurchase(detail))


	};


	return (
		<>
			{isAuthenticated ?
				isAuthenticated && (
					<div>
						<div class="card-body">

							{user.name || user.address || user.email === '' ?
								user.name && (
									<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
										<div>Complete sus datos para continuar con la compra!</div>
										<button type="button" class="btn btn-info">
											<Link to={'/editarperfilusuario'}>Editar perfil</Link>
										</button>
									</div>
								) : <div>
									<ul class="list-group list-group-flush">
										<li
											class="list-group-item border-0 px-0 mb-3">
											<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
												<strong>Monto total</strong>
												<span><strong>${totalPrice()}</strong></span>
											</div>
										</li>
									</ul>
									<button onClick={handlePayment} type="button" class="btn btn-primary btn-lg btn-block">
										Checkout
									</button>
									{paymentUrl.length > 0 ? (
										<div div style={{ display: 'flex' }}>
											Seleccione metodo de pago
											<a href={paymentUrl}>
												<img width={'100px'} src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668792016/Donde-Suena-Assets/mercado-pago_pxshfi.png" alt='mercadopago' />
											</a>
										</div>
									) : null}
								</div>}
						</div>
					</div >
				) :

				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<div>
						Inicie sesion para utilizar el carrito!
					</div>
					<button onClick={() => loginWithRedirect()} type="button" class="btn btn-primary">
						Iniciar Sesion
					</button>
				</div>
			}
		</>
	);
};

export default PediYa;
