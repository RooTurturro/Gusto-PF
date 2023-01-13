import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useAuth0 } from "@auth0/auth0-react";



const AdminProvisorio = () => {
	const { isAuthenticated } = useAuth0();

	return (
		// <div>
		// 	{isAuthenticated ?
		// 		isAuthenticated && (
		// 			<div>

		// 				<Link to={'/create'} style={{ display: 'flex', justifyContent: 'center' }}>
		// 					<button>Nuevo producto</button>
		// 				</Link>
		// 				<Menu />
		// 			</div>

		// 		) : <div style={{ color: 'black', display: 'flex', justifyContent: 'center' }}>No tienes acceso!</div>}


		// </div>
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>

				<Link to={'/productlist'}>
					<button type="button" class="btn btn-warning">Lista de compras</button>
				</Link>
				<Link to={'/create'}>
					<button type="button" class="btn btn-success">
						Nuevo producto
					</button>
				</Link>
			</div>
			<Menu />
		</div>
	);
};

export default AdminProvisorio;
