import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";


const AdminProvisorio = () => {
	return (
		<div>

			<Link to={'/create'} style={{display: 'flex', justifyContent: 'center'}}>
				<button>Nuevo producto</button>
			</Link>
			<Menu/>
		</div>

	);
};

export default AdminProvisorio;
