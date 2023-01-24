import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/gustoPng.png";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import Carrito from '../Carrito/Carrito'

import LoginButton from "../Login/LoginButton";
import { useState } from "react";
import { useEffect } from "react";
import { userProfile } from "../../redux/actions";



export default function Nav() {

	const cart = useSelector((state) => state.cart);
	const picture = window.localStorage.getItem("userPicture")
	const [openCart, setOpenCart] = useState(false);
	const dispatch = useDispatch();
	const email = window.localStorage.getItem('userEmail')

	useEffect(() => {
		dispatch(userProfile(email))
	})

	const user = useSelector(state => state.user)



	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-between">
			<div className="container-fluid all-show nav-container-custom">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="fuente">
					<ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginTop: '2.2rem' }}>
						<Link className="nav-link" to='/'>
							<img src={logo} alt='logo' style={{ width: '150px', marginLeft: '-2.2rem', marginTop: '-1.2rem' }} />
						</Link>
						<div className="nav-item active">
							<Link className="nav-link-custom" aria-current="page" to='/menu'>MENU</Link>
						</div>
						<div className="nav-item active">
							<Link className="nav-link-custom" to='/sucursales'>SUCURSALES</Link>
						</div>
						<div className="nav-item active">
							<Link className="nav-link-custom" aria-current="page" to='/miscompras'>MIS COMPRAS</Link>
						</div>
						{user.isAdmin ? (
							<div className="nav-item active">
								<Link className="nav-link-custom" aria-current="page" to='/productlist'>ADMIN</Link>
							</div>
						) : null}
					</ul>
				</div>
				<div style={{ color: 'red', display: 'flex', marginRight: '10px', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
					{cart.length > 0 ? (
						<Link to='/carrito'>
							<div className="carritoLleno">
								{cart.length}
							</div>
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
									<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
								</svg>
							</div>
						</Link>
						// <Carrito/>

					) :
						<Link className='nav-link' to='/carrito'>
							<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
								<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
							</svg>
						</Link>
					}
					{picture ? (
						<Link to='/perfil'>
							<img src={picture} alt='not found' className="picture-img" />
						</Link>
					) :
						<LoginButton />
					}
				</div>

			</div>
		</nav>
	);
}
