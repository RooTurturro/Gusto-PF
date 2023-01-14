import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/gustoPng.png'
import './Nav.css'
import { useAuth0 } from "@auth0/auth0-react";


export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-between">
      <div className="container-fluid all-show">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <Link className="nav-link" to='/'>
            <img src={logo} alt='logo' style={{ width: '60px' }} />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/productlist'>ADMIN</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/menu'>MENU</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to='/sucursales'>SUCURSALES</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/gustoburgerclub'>GUSTO BURGER CLUB</Link>
            </li> */}
            
          </ul>
        </div>
        <div style={{ color:'black', display: 'flex', gap:'1rem', marginRight:'10px' }}>
          <Link className='nav-link' to='/carrito'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </Link>
          <Link className="nav-link" to='/perfil'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  )
}