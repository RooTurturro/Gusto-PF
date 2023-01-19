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

// import { userLogin } from '../../redux/actions';

// import {useEffect} from 'react';
// import Loading from '../Loading/Loading';

const Home = () => {

  const [index, setIndex] = useState(0);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const usuario = useSelector((state) => state.user);
  const dispatch = useDispatch();


  console.log(isAuthenticated)



  const storageLogIn = () => {
    window.localStorage.setItem('userPicture', user.picture);
    window.localStorage.setItem('userName', user.name);
    window.localStorage.setItem('userEmail', user.email);
    window.localStorage.setItem('isLogIn', 'Log In');

  }


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  //-----Local Storage-----

  if (isAuthenticated) {

    storageLogIn()


  };


  const picture = window.localStorage.getItem('userPicture')
  const name = window.localStorage.getItem('userName')
  const email = window.localStorage.getItem('userEmail')
  const log = localStorage.getItem('isLogIn')

  console.log(picture, name, email, log)

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
      dispatch(userLocalLogin({ picture, name, email, log }))
      dispatch(userLogin({ name, email }))
    }, 2000);


    return () => clearTimeout(timer);

  }, [dispatch])





  return (
    <div className={styles.container}>
      <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carrucel}>

        <Carousel.Item>
          <img

            className={styles.img}
            src={carrusel1}
            alt="First slide" />

          <Carousel.Caption>



          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className={styles.img}
            src={sucursal3}
            alt="Second slide" />

          <Carousel.Caption>


          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className={styles.img}
            src={carrusel2}
            alt="Third slide" />

          <Carousel.Caption>



          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <div className={styles.promocionesContainer}>
        <h1 className={styles.titulo2}> Promociones </h1>
        <div className={styles.promociones}>
          <div>
            <Link to='/products/1d7df98a-a672-474a-92ee-58ae7d0f31ec'>
              <img className={styles.img2}
                src={fatty}
                alt="Third slide" />
            </Link>
            <h3 className={styles.type}>Combo 1</h3>
            <p className={styles.type}>Hamburguesa con tocino y papas</p>
          </div>
          <div>
            <Link to='/products/686d5bf4-62b7-4b0c-aaca-ca330282a05f'>
              <img className={styles.img2}
                src={hamburguesa5}
                alt="Third slide" />
            </Link>
            <h3 className={styles.type}>Combo 2</h3>
            <p className={styles.type}>Doble carne con queso y pepinillos</p>
          </div>

          <div>
            <Link to='/products/2ec0c79b-214d-43ea-8a4b-fa858a149aa0'>
              <img className={styles.img2}
                src={hamburguesa6}
                alt="Third slide" />
            </Link>
            <h3 className={styles.type}>Combo 3</h3>
            <p className={styles.type}>Hamburguesa con salsa golf</p>
          </div>
        </div>
      </div>
      <div className={styles.containerInfo}>
        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                <h5 className={styles.gusto}>GUSTO</h5>
              </div>

              <div className="col-lg-2 col-md-6">
                <h5 className={styles.titulo}>Informacion</h5>
                <p className={styles.type2}>Contactanos</p>
                <p className={styles.type2}> +54 323464351</p>
                <a href='https://www.instagram.com/ganasdegusto/' className={styles.a}>Instagram</a>
              </div>

              <div className="col-lg-2 col-md-6">
                <h5 className={styles.titulo}>Ayuda</h5>
                <p className={styles.type2}>Legales</p>

                <p className={styles.type2}>Factura Electrónica</p>

                <p className={styles.type2}>Política de Privacidad</p>

                <p className={styles.type2}>Trabaja con nosotros.</p>

              </div>
              <div className="col-lg-4 col-md-6">
                <img src={logo} className={styles.logo} alt="logo gusto" />
                <p className={styles.type2}>Inicio</p>
                <p className={styles.type2}>Menu</p>
                <p className={styles.type2}>Sucursales</p>

              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>)





}

export default Home;

