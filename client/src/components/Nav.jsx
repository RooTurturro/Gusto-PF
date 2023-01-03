import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav () {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
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
              <NavLink className="nav-link" to='/home'>HOME</NavLink>
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
          </ul>
        </div>
      </div>
    </nav>
  )
}

