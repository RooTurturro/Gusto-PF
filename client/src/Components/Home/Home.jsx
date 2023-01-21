import React, { useEffect, useState } from "react";
import fatty from "../../assets/fatty.jpg";
import hamburguesa5 from "../../assets/hamburguesa5.png";
import hamburguesa6 from "../../assets/hamburguesa6.png";
import carrusel1 from "../../assets/carrusel1.jpg";
import carrusel2 from "../../assets/carrusel2.png";
import sucursal3 from "../../assets/sucursal3.jpg";
import logo from "../../assets/gustoPng.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { userLocalLogin, userLogin } from "../../redux/actions";
import home1 from "../../assets/home1.png";
import vicio from '../../assets/vicio.png'
import vicio_cut from '../../assets/vicio_cut.png'
import vicio_two from '../../assets/vicio_two.png'


// import { userLogin } from '../../redux/actions';

// import {useEffect} from 'react';
// import Loading from '../Loading/Loading';

const Home = () => {
	const [index, setIndex] = useState(0);
	const { user, isAuthenticated, isLoading } = useAuth0();
	const usuario = useSelector((state) => state.user);
	const dispatch = useDispatch();

	console.log(isAuthenticated);

	const storageLogIn = () => {
		window.localStorage.setItem("userPicture", user.picture);
		window.localStorage.setItem("userName", user.name);
		window.localStorage.setItem("userEmail", user.email);
		window.localStorage.setItem("isLogIn", "Log In");
	};

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	//-----Local Storage-----

	if (isAuthenticated) {
		storageLogIn();
	}

	const picture = window.localStorage.getItem("userPicture");
	const name = window.localStorage.getItem("userName");
	const email = window.localStorage.getItem("userEmail");
	const log = localStorage.getItem("isLogIn");

	console.log(picture, name, email, log);

	useEffect(() => {
		if (name && email) {
			dispatch(userLogin({ name, email }));
		}
		if (name && email && picture && log) {
			dispatch(userLocalLogin({ picture, name, email, log }));
		}
	}, [dispatch, log]);

	return (
		<div className={styles.container}>
			<div className={styles.home1}>
				<img src={home1} alt="home1" />
			</div>
			{/* <div className='col-12 col-md4'>
            <h3 className='title_two'>OUR COLLECTION</h3>
            <img className="img_vicio img fluid" src={vicio} alt="vicio" />
            <img className="img_vicio_cut img fluid" src={vicio_cut} alt="vicio_cut" />
            <img className="img_vicio_two img fluid" src={vicio_two} alt="vicio_two" />
          </div> */}
		</div>
	);
};



export default Home;
