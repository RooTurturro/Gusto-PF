import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/gustoPng.png";
import "./Nav.css";
import { useSelector } from "react-redux";
import LogoutButton from "../Login/LogoutButton";
import LoginButton from "../Login/LoginButton";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import carrito from '../../assets/cart.png'


export default function Nav() {
	const usuario = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);
	console.log(cart);
	const picture = window.localStorage.getItem("userPicture");
	const log = window.localStorage.getItem("isLogIn");
	console.log(log + " navbar log");
	console.log(picture + " navbar picture");
	const { isAuthenticated } = useAuth0();

	useEffect(() => {
		console.log("se relogueo la navBAR");
	}, [usuario]);

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-between">
			<div className="container-fluid all-show nav-container-custom">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="fuente">
					<ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', }}>
						<Link className="nav-link" to='/'>
							<img src={logo} alt='logo' style={{ width: '150px', marginLeft: '-3.9rem ' }} />
						</Link>
						<div className="nav-item">
							<Link className="nav-link-custom active" aria-current="page" to='/menu'>MENU</Link>
						</div>
						<div className="nav-item">
							<Link className="nav-link-custom active" to='/sucursales'>SUCURSALES</Link>
						</div>
						<div className="nav-item">
							<Link className="nav-link-custom active" aria-current="page" to='/contacto'>CONTACTANOS</Link>
						</div>
						<div className="nav-item">
							<Link className="nav-link-custom active" aria-current="page" to='/productlist'>ADMIN</Link>
						</div>
					</ul>
				</div>
				<div style={{ color: 'red', display: 'flex', marginRight: '10px', alignItems: 'center', justifyContent: 'center' }}>
					<Link className='nav-link' to='/carrito'>
						<svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
							<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
						</svg>
					</Link>
					{picture ? (
						<Link>
							<img src={picture} alt='not found' className="picture-img" />
						</Link>
					) :
						<Link className="nav-link" to='/perfil'>
							<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
								<path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
								<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
							</svg>
						</Link>
					}
				</div>
			</div>
		</nav>
	);
}
