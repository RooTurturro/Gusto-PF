import React from "react";
import "./Sucursales.css";

export default function Sucursales({ street, schedule, id }) {
	return (
		<div>
			<div className="cards">
				<h2>{street}</h2>
				<p className="horario">HORARIO: {schedule}</p>
				<p className="distancia">150 mts de distancia</p>
			</div>
		</div>
	);
}
