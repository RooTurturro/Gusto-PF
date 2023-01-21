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
							<img src={logo} alt='logo' style={{ width: '280px', marginLeft: '-3.9rem ' }} />
						</Link>
						<div className="nav-item">
							<Link className="nav-link-custom active" aria-current="page" to='/menu'>MENU</Link>
						</div>
						<div className="nav-item">
							<Link className="nav-link-custom active" to='/sucursales'>SUCURSALES</Link>
						</div>
						<div className="nav-item">
							<Link className="nav-link-custom active" aria-current="page" to='/productlist'>CONTACTANOS</Link>
						</div>
					</ul>
				</div>
				<div style={{ color: 'red', display: 'flex', marginRight: '10px', alignItems: 'center', justifyContent: 'center' }}>
					<Link className='nav-link' to='/carrito'>
						<img src={carrito} style={{width:'300px', height:'200px'}} alt='not found' />
					</Link>
					{picture ? (
						<Link>
							<img src={picture} alt='not found' className="picture-img" />
						</Link>
					) :
						<Link className="nav-link" to='/perfil'>
							<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
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
