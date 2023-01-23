import React from 'react'
import Nav from '../NavBar/Nav'
import styles from './Contacto.module.css'
import box from '../../assets/contactBoxes.png'
import teesperamos from '../../assets/teEsperamos.png'
import { BsWhatsapp, BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'

const Contacto = () => {
  return (
    <>
      <Nav />
      <div className={styles.contactoContainer}>
        <div className={styles.contactoInfo}>
          <div className={styles.contactoTitulo}>
            <div style={{ display: 'flex', marginTop:'2rem' }}>
              <h1>GUSTO</h1>
              <h2>™</h2>
            </div>
            <img src={teesperamos} style={{position:'absolute', marginLeft:'22rem', marginTop:'3.6rem'}} alt="ddd" />
          </div>
          <div className={styles.contactoUl}>
            <li>
              <BsInstagram />
              <span>@GANASDEGUSTO</span>
            </li>
            <li >
              <BsWhatsapp />
              <span>358 5168971</span>
            </li>
            <li >
              <BsTwitter />
              <span>GANASDEGUSTO</span>
            </li>
            <div className={styles.contactoRapido}>
              <li style={{ color: 'red' }}>
                <BsFacebook />
                <span >GANASDEGUSTO</span>
              </li>
              <div className={styles.nose}>
                RAPIDO, RICO & LLENADOR
                <br />
                <strong style={{ color: 'black', fontWeight: '900' }}>
                  ESTO ES GUSTO
                </strong>
              </div>
            </div>
          </div>
          <img style={{width:'59.5rem'}} src={box} alt='imagen' />
          <p style={{ fontSize: '1.3rem' }}>Todos los derechos reservados. <strong style={{fontWeight:'900'}}>GUSTO COMPANY</strong></p>
        </div>
        <div>
          <video className={styles.gVideo} autoPlay='autoplay' muted loop>
            <source src="https://res.cloudinary.com/dqgz49ox3/video/upload/v1674441096/G_xihpzd.mp4" type='video/mp4' />
          </video>
        </div>
      </div >





    </>
  )
}

export default Contacto