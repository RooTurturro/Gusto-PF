import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/gustoPng.png'
import './Nav.css'
import { useSelector } from 'react-redux'
import LogoutButton from '../Login/LogoutButton'
import LoginButton from '../Login/LoginButton'
import { useEffect } from 'react'


export default function Nav() {

  const usuario = useSelector(state => state.user);
  const cart = useSelector((state) => state.cart);
  console.log(cart)

  const picture = window.localStorage.getItem('userPicture')
  const log = window.localStorage.getItem('isLogIn')
  console.log(log + ' navbar log')
  console.log(picture + ' navbar picture')

  useEffect(() => {
    console.log('se relogueo la navBAR')
  }, [usuario])



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
              <Link className="nav-link active" aria-current="page" to='/'>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/sucursales'>SUCURSALES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/menu'>MENU</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/contacto'>CONTACTENOS</Link>
            </li>
            {usuario.isAdmin ? usuario.isAdmin && (
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
            {cart.length > 0 ? (
              <a href='#!' style={{ backgroundColor: 'red', color: 'white', fontSize: '18px', borderRadius: '100%' }}>
                {cart.length}
              </a>
            ) : null}
          </Link>

          <Link className='nav-link' to='/perfil'>
            {picture
              ?
              <div style={{ borderRadius: '100%' }}>
                <img src={picture} width="36" height="40" backgroundColor='black' alt='nada' />
              </div>
              : <svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
              </svg>}

          </Link>


          {log === 'Log In' ? <LogoutButton /> : <LoginButton />}

        </div>
      </div>
    </nav>
  )
}