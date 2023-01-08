import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/gustoPng.png'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-between">
      <div className="container-fluid all-show">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to='/pediya'>PEDI YA!</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to='/menu'>MENU</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/sucursales'>SUCURSALES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/home'>
                <img src={logo} alt='logo' style={{width:'60px'}} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/nosotros'>NOSOTROS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/gustoburgerclub'>GUSTO BURGER CLUB</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/trabajaaca'>TRABAJA ACA!</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>DASHBOARD</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


