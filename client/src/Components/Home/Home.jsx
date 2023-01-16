import React , {useState}from 'react'
import hamburguesa1 from '../../assets/hamburguesa1.png'
import hamburguesa2 from '../../assets/hamburguesa2.png'
import hamburguesa3 from '../../assets/hamburguesa3.png'
import hamburguesa4 from '../../assets/hamburguesa4.png'
import hamburguesa5 from '../../assets/hamburguesa5.png'
import hamburguesa6 from '../../assets/hamburguesa6.png'
import logo from '../../assets/gustoPng.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
import styles from './Home.module.css';

// import { useAuth0 } from "@auth0/auth0-react";
// import { userLogin } from '../../redux/actions';
// import { useDispatch } from 'react-redux';
// import {useEffect} from 'react';
// import Loading from '../Loading/Loading';

const Home = () => {
 
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
        <div className={styles.container}>
            <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carrucel}>

                  <Carousel.Item>
                            <img
                              
                              className={styles.img}
                              src={hamburguesa1}
                              alt="First slide"/>

                            <Carousel.Caption>

                              <h3>Hamburguesa clasica</h3>
                              
                            </Carousel.Caption>
                          </Carousel.Item>


                  <Carousel.Item>
                            <img
                              className={styles.img}
                              src={hamburguesa2}
                              alt="Second slide"/>

                            <Carousel.Caption>
                              <h3>con cebollita delicioso</h3>
                              
                            </Carousel.Caption>
                  </Carousel.Item>


                  <Carousel.Item>
                          <img
                            className={styles.img}
                            src={hamburguesa3}  
                            alt="Third slide"/>

                          <Carousel.Caption>

                            <h3>Con papita rico</h3>
                            
                          </Carousel.Caption>
                  </Carousel.Item>

            </Carousel>
            <div className={styles.promocionesContainer}>
              <h1 className={styles.titulo2}> Promociones </h1>
                      <div className={styles.promociones}>
                            <div>
                              <img className={styles.img2}
                                    src={hamburguesa4}  
                                    alt="Third slide"/>
                                    <h3 className={styles.type}>Combo 1</h3>
                                    <p className={styles.type}>Hamburguesa con tocino y papas</p>
                            </div>

                            <div>
                              <img className={styles.img2}
                                    src={hamburguesa5}  
                                    alt="Third slide"/>
                                    <h3 className={styles.type}>Combo 2</h3>
                                    <p className={styles.type}>Doble carne con queso y pepinillos</p>
                            </div>

                            <div>
                              <img className={styles.img2}
                                    src={hamburguesa6}  
                                    alt="Third slide"/>
                                    <h3 className={styles.type}>Combo 3</h3>
                                    <p className={styles.type}>Hamburguesa con salsa golf</p>
                            </div>

                      </div>
            </div>


            <div className={styles.containerInfo}>
                <footer class="w-100 py-4 flex-shrink-0">
                  <div class="container py-4">
                    <div class="row gy-4 gx-5">
                        <div class="col-lg-4 col-md-6">

                            <h5 className={styles.gusto}>GUSTO</h5>
                          
                        </div>

                        <div class="col-lg-2 col-md-6">
                            <h5 className={styles.titulo}>Informacion</h5>
                            <p className={styles.type2}>Contactanos</p>
                            <p className={styles.type2}> +54 323464351</p>
                            <a href='https://www.instagram.com/ganasdegusto/' className={styles.a}>Instagram</a>
                        </div>

                        <div class="col-lg-2 col-md-6">
                              <h5 className={styles.titulo}>Ayuda</h5>
                              <p className={styles.type2}>Legales</p>

                              <p className={styles.type2}>Factura Electrónica</p>

                              <p className={styles.type2}>Política de Privacidad</p>

                              <p className={styles.type2}>Trabaja con nosotros.</p>
                            
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <img src={logo} className={styles.logo} alt="logo gusto" />
                            <p className={styles.type2}>Inicio</p>
                            <p className={styles.type2}>Menu</p>
                            <p className={styles.type2}>Sucursales</p>
                           
                        </div>
                      </div>
                    </div>
                </footer>
            </div>

        </div>
          

    
            
  )
}

export default Home;