import React from 'react'
import { Link } from 'react-router-dom'
import { RiDashboardFill } from 'react-icons/ri'
import { MdInventory2, MdAccountCircle } from 'react-icons/md'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiLogOut } from 'react-icons/bi'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul className='ul'>
                    <p className="title">MAIN</p>
                    <li className='li'>
                        <RiDashboardFill className="icon" />
                        <span className='span'>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li className='li'>
                            <MdAccountCircle className="icon" />
                            <span className='span'>Usuarios</span>
                        </li>
                    </Link>
                    <Link to="/productlist" style={{ textDecoration: "none" }}>
                        <li className='li'>
                            <MdInventory2 className="icon" />
                            <span className='span'>Productos</span>
                        </li>
                    </Link>
                    <Link to='/historial'>
                        <li className='li'>
                            <HiOutlineShoppingBag className="icon" />
                            <span className='span'>Compras</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <li className='li'>
                        <MdAccountCircle className="icon" />
                        <span className='span'>Perfil</span>
                    </li>
                    <li className='li'>
                        <BiLogOut className="icon" />
                        <span className='span'>Cerrar sesión</span>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Sidebar