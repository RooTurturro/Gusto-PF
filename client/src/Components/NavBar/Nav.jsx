import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/gustoPng.png'
import './Nav.css'
import { useAuth0 } from "@auth0/auth0-react";


export default function Nav() {

  const { isAuthenticated } = useAuth0();
  return (


    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-between">
      <div className="container-fluid all-show">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/adminprovisorio'>ADMIN</Link>
              </li>

            )}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/pediya'>PEDI YA!</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/menu'>MENU</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/sucursales'>SUCURSALES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>
                <img src={logo} alt='logo' style={{ width: '60px' }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/nosotros'>NOSOTROS</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/gustoburgerclub'>GUSTO BURGER CLUB</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to='/perfil'>PERFIL</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/trabajaaca'>TRABAJA ACA!</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/dashboard'>DASHBOARD</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}