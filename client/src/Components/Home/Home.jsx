import React from 'react'
import cuadrado from '../../assets/cuadrado.png'
import vicio from '../../assets/vicio.png'
import vicio_cut from '../../assets/vicio_cut.png'
import vicio_two from '../../assets/vicio_two.png'
import logo_inst from '../../assets/logo_instagram.png'
import arrow from '../../assets/arrow.png'
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (

    <div className='section'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md4'>
            <Link to="/menu">
              <button className="button"><h1 className='title_one'>GUSTO </h1></button>
            </Link>
            <h1 className='marca_registrada'>®</h1>
          </div>
          <div className='col-12 col-md4'>
            <h3 className='title_two'>OUR COLLECTION</h3>
            <img className="img_vicio img fluid" src={vicio} alt="vicio" />
            <img className="img_vicio_cut img fluid" src={vicio_cut} alt="vicio_cut" />
            <img className="img_vicio_two img fluid" src={vicio_two} alt="vicio_two" />
          </div>
          <div className='col-12 col-md4'>
            <img className="cuadrado img fluid" src={cuadrado} alt="cuadrado" />
            <h1 className='title_three'>TE DAMOS LO TUYO, A DOMICILIO.</h1>
            <h1 className='title_four'>CALIDAD, VELOCIDAD & LLENADOR.</h1>
          </div>
          <div className='col-12 col-md4'>
            <img className="logo_inst img fluid" src={logo_inst} alt="instagram" />
            <img className="arrow img fluid" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home