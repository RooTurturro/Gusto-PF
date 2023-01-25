import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/gustoPng.png";
import styles from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import Carrito from '../Carrito/Carrito'
import LoginButton from "../Login/LoginButton";
import { useState } from "react";
import { useEffect } from "react";
import { userProfile } from "../../redux/actions";
import PediYa from '../PediYa/PediYa'
import { delFromCart } from '../../redux/shoppingActions'
import CarritoItem from '../Carrito/CarritoItem'




export default function Nav() {

	//---------MODAL---------------
	
	const [mostrar, setMostrar] = useState(false);

	const cart = useSelector(state => state.cart)


	//--------------
	
	const picture = window.localStorage.getItem("userPicture")
	const dispatch = useDispatch();
	const email = window.localStorage.getItem('userEmail')

	useEffect(()=>{
		dispatch(userProfile(email))
	},[dispatch, email])

	const user = useSelector(state => state.user)


	
	return (

		<div className={styles.container}>
			
						<div>
							<Link to='/'>
								<img src={logo} alt='logo' style={{ width: '150px'}} />
							</Link>
						</div>
				
				
				<div className={styles.enlaces}>
						
						
						<div>
							<Link to='/menu' className={styles.enlace}>MENU</Link>
						</div>

						<div>
							<Link to='/sucursales' className={styles.enlace}>SUCURSALES</Link>
						</div>

						<div>
							<Link to='/contacto' className={styles.enlace}>CONTACTANOS</Link>
						</div>

						<div >
							<Link to='/miscompras' className={styles.enlace}>MIS COMPRAS</Link>
						</div>
						
						{user.isAdmin ? (
							<div >
								<Link to='/productlist' className={styles.enlace}>ADMIN</Link>
							</div>
						) : null}
					
				</div>

				<div>

					{ picture 
					? (<Link to='/perfil'> <img src={picture} alt='not found' className={styles.imagen} /> </Link>) 
					:  <LoginButton />
					}


				</div>
					

				

				<div className={styles.Carrito}>

							<button onClick={ ()=>setMostrar(true) }> Abrir Carrito </button>

							<Carrito isOpen={mostrar}  onClose={ ()=> setMostrar(false) }>
										<div>
											{
												cart.map((item) =>
													<CarritoItem
														key={item.id}
														id={item.id}
														name={item.name}
														price={item.price}
														quantity={item.quantity}
														description={item.description}
														total={item.quantity * item.price}
														image={item.image}
														delOneFromCart={() => dispatch(delFromCart(item.id))}
														delAllFromCart={() => dispatch(delFromCart(item.id, true))}
													/>)
											}
											
											< PediYa />
											
										</div>
							</Carrito>

				</div>

			

			
		</div>
	);
}
