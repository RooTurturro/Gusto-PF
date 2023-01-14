import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentUrl } from "../redux/actions";

const PediYa = ({ price, quantity }) => {
	const dispatch = useDispatch();
	const paymentUrl = useSelector((state) => state.paymentUrl);
	const cart = useSelector((state) => state.cart)
	const totalPrice = () => {
		//FUNCIONA, tenemos la suma de todos los precios
		return cart.reduce((total, item) => total + item.price, 0);
	};

	const handlePayment = () => {
		const detail = {
			name: "GUSTO - Te damos lo tuyo 🔥",
			price: totalPrice(),
			id: 1,
		};
		console.log(detail);
		dispatch(getPaymentUrl(detail));
	};

	return (
		<div>
			<div class="card-body">
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
					<div style={{ display: 'flex' }}>
						Seleccione metodo de pago
						<a href={paymentUrl}>
							<img width={'100px'} src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668792016/Donde-Suena-Assets/mercado-pago_pxshfi.png" alt='mercadopago' />
						</a>
					</div>
				) : (
					null
				)}
			</div>

		</div>
	);
};

export default PediYa;
