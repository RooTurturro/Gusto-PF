import React from "react"
import styles from "./Footer.module.css"
import logo from "../../assets/gustoPng.png"

const Footer = ()=>{

    return (
        <div >

            <footer className={styles.containerInfo}>

                <div>
                    <img src={logo} className={styles.logo} alt="logo gusto" />
                    {/* <h5 className={styles.gusto}>GUSTO</h5> */}
                </div>

                <div>

                        <h5 className={styles.titulo}>Informacion</h5>
                        <p className={styles.type2}>Contáctanos</p>
                        <p className={styles.type2}> +54 323464351</p>
                        <a href='https://www.instagram.com/ganasdegusto/' className={styles.a}>Instagram</a>

                </div>

                <div>
                    <h5 className={styles.titulo}>Ayuda</h5>

                    <p className={styles.type2}>Factura Electrónica</p>

                    <p className={styles.type2}>Política de Privacidad</p>

                    <p className={styles.type2}>Trabaja con nosotros.</p>

                </div>

                <div>
                        <h5 className={styles.titulo}>GUSTO</h5>
                        <p className={styles.type2}>Inicio</p>
                        <p className={styles.type2}>Menu</p>
                        <p className={styles.type2}>Sucursales</p>

                </div>

            </footer>
      </div>
    )

}


export default Footer;