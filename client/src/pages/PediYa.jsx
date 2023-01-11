import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentUrl } from "../redux/actions";

const PediYa = () => {
	const dispatch = useDispatch();
	const paymentUrl = useSelector((state) => state.paymentUrl);

	const handlePayment = () => {
		const details = {
			name: "burgerfan",
			price: 100,
			id: 1,
		};

		dispatch(getPaymentUrl(details));
		console.log(paymentUrl);
	};

	return (
		<div>
			<button onClick={handlePayment}>Checkout</button>
			{paymentUrl.length > 0 ? (
				<a href={paymentUrl}>
					<img src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668792016/Donde-Suena-Assets/mercado-pago_pxshfi.png" />
				</a>
			) : (
				<div>
					<p>carganding</p>
				</div>
			)}
		</div>
	);
};

export default PediYa;
