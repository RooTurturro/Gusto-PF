import React from 'react'
import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { getUserLog, login } from "../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';
import Loading from '../Loading/Loading';
import styles from './Perfil.module.css'
import { Link } from 'react-router-dom';

const Perfil = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    //const dispatch = useDispatch();
    const usuario = useSelector(state => state.userLog);


    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            {isAuthenticated ?
                isAuthenticated && (
                    <div className={styles.container}>
                        
                        <div >
                            <img src={user.picture} alt="Imagen de usuario" className={styles.img} />
                        </div>
                        
                            
                        <div className={styles.infoContainer}>

                            <p>Nombre: {user.name}</p>
                            <p>Apodo: {user.nickname}</p>
                            <p>Correo: {user.email}</p>
                            
                        
                        </div>

                        <div className={styles.buttonContainer}>
                            <button className={styles.button}>Editar Perfil</button>
                            
                            <LogoutButton/>

                            <Link to={'/historial'} className={styles.button}> Historial Compras</Link>

                            <button className={styles.button}>Añadir Informacion</button>
                        </div>
                        



                    </div>
                 
                ) :

                <div className={styles.container}>
                    <div className={styles.login}>
                            <div>
                                <LoginButton />
                            </div>
                    </div>
                </div>
                
            }
        </div>

    )
}

export default Perfil;