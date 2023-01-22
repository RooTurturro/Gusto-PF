import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { userLocalLogin, userLogin } from "../../redux/actions";
import home1 from "../../assets/home1.png";
import homeOurCollection from '../../assets/homeOurCollection.png'
import imageForCintaGusto from '../../assets/imageForCintaGusto.png'
import neck from '../../assets/neck.png'
import video from '../../assets/vagoMovimiento.mp4'
import gif from '../../assets/gif.mp4'
import Nav from "../NavBar/Nav";


// import { userLogin } from '../../redux/actions';

// import {useEffect} from 'react';
// import Loading from '../Loading/Loading';

const Home = () => {
	const [index, setIndex] = useState(0);
	const { user, isAuthenticated, } = useAuth0();

	const dispatch = useDispatch();

	console.log(isAuthenticated);

	const storageLogIn = () => {
		window.localStorage.setItem("userPicture", user.picture);
		window.localStorage.setItem("userName", user.name);
		window.localStorage.setItem("userEmail", user.email);
		window.localStorage.setItem("isLogIn", "Log In");
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
		<>
			<Nav />
			<div className={styles.container}>
				<div className={styles.home1}>
					<img src={home1} alt="home1" />
				</div>
				<div className={styles.container2}>
					<div>

						<div>
							<img src={homeOurCollection} className={styles.collection} alt='our colection' />
						</div>
						<div className={styles.container3}>
							{/* <div style={{ width: '100%', height: '0', paddingbottom: '100', position: 'relative' }}>
							<iframe src="https://giphy.com/embed/nO5muK3XxJPxAqIEiu" style={{ width: "100%", height: "100%", position: 'absolute' }} class="giphy-embed" allowFullScreen>	
							</iframe>
						</div> */}
							<video className={styles.video} autoPlay='autoplay' muted loop='loop'>
								<source src={video} type='video/mp4' />
								
							</video>
							<video className={styles.gif} autoPlay='autoplay' muted loop>
								<source src={gif} type='video/mp4' />
							</video>
							<img className={styles.cuellito} src={neck} alt='cuello' />
						</div>
					</div>
				</div>

			</div>
		</>
	);
};


export default Home;
