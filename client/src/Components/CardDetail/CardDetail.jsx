import React from "react";
import { useParams } from "react-router-dom";

const CardDetail = () => {
	const { id } = useParams();

	return (
		<div>
			CardDetail
			<h2>{id}</h2>
		</div>
	);
};

export default CardDetail;
