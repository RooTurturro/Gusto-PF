import { useState } from "react";
import "./RatingProducts.css";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";


const colors = {
	red: "#FF0000",
	grey: "#a9a9a9",
};

function RatingProducts({ id }) {
	const Swal = require("sweetalert2");
	const stars = Array(5).fill(0);
	const dispatch = useDispatch();
	

	//DEFINO MIS ESTADOS

	//estrellas
	const [currentStars, setCurrentStars] = useState(0);
	const [hoverStars, setHoverStars] = useState(undefined);

	//DEFINO MIS HANDLERS

	const handleClick = (value) => {
		setCurrentStars(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(actions.ratingProducts(currentStars, id));
		// console.log(currentStars, id); LLEGA
		Swal.fire('¡Rating enviado!');
	};

	const handleMouseOver = (newHoverStars) => {
		setHoverStars(newHoverStars);
	};

	const handleMouseLeave = () => {
		setHoverStars(undefined);
	};

	return (
		<form style={styles.container} onSubmit={handleSubmit}>
			<p> RATING </p>
			<div style={styles.stars}>
				{stars.map((_, index) => {
					return (
						<FaStar
							key={index}
							size={24}
							onClick={() => handleClick(index + 1)}
							onMouseOver={() => handleMouseOver(index + 1)}
							onMouseLeave={handleMouseLeave}
							color={
								(hoverStars || currentStars) > index ? colors.red : colors.grey
							}
							style={{
								marginRight: 10,
								cursor: "pointer",
							}}
						/>
					);
				})}
			</div>

			<button type="button submit" className="btn btn-primary">
				Enviar
			</button>
		</form>
	);
}

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap:'1rem'
	},
	stars: {
		display: "flex",
		flexDirection: "row",
		
	},
	button: {
		border: "1px solid #a9a9a9",
		borderRadius: 5,
		width: 300,
		padding: 10,
	},
};

export default RatingProducts;
