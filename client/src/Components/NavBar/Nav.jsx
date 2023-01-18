import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/gustoPng.png'
import './Nav.css'
import { useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";


export default function Nav() {
  const usuario = useSelector(state => state.user);
  const { isAuthenticated } = useAuth0();
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
              <Link className="nav-link" to='/sucursales'>SUCURSALES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/menu'>MENU</Link>
            </li>
            {usuario.isAdmin ? usuario.isAdmin &&  (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/productlist'>ADMIN</Link>
              </li>

            ) : <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/miscompras'>MIS COMPRAS</Link>
              </li>}
          </ul>
        </div>
        <div style={{ color: 'black', display: 'flex', gap: '1rem', marginRight: '10px' }}>
          <Link className='nav-link' to='/carrito'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </Link>
          {isAuthenticated ?
            isAuthenticated && (
              <Link className="nav-link" to='/perfil'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" fill="currentColor" className="bi bi-person-fill-check" viewBox="0 0 16 16">
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                </svg>
              </Link>
            ) :
            <Link className="nav-link" to='/perfil'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" fill="currentColor" className="bi bi-person-fill-x" viewBox="0 0 16 16">
                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z" />
              </svg>
            </Link>}
        </div>
      </div>
    </nav>
  )
}