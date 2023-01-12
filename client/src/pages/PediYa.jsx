import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentUrl } from "../redux/globalActions";

const PediYa = ({ price, quantity }) => {
	const dispatch = useDispatch();
	const paymentUrl = useSelector((state) => state.paymentUrl);
	const cart = useSelector((state) => state)

	const handlePayment = () => {
		const details =[] //pasarle el cart
		dispatch(getPaymentUrl(details));
		console.log(paymentUrl);
	};

	return (
		<div>
			<div class="card-body">
				<ul class="list-group list-group-flush">
					<li class="list-group-item d-flex justify-content-between align-items-center px-0">
						Envio
						<span>Gratis</span>
					</li>
					<li
						class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
						<div>
							<strong>Monto total</strong>
						</div>
						<span><strong>${price}.00 x {quantity} = ${price * quantity}.00</strong></span>
					</li>
				</ul>
				<button onClick={handlePayment} type="button" class="btn btn-primary btn-lg btn-block">
					Checkout
				</button>
				{paymentUrl.length > 0 ? (
					<div style={{display:'flex'}}>
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
