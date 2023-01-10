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
                    <div className={styles.profile}>
                        <div className={styles.profileContainer}>
                            <img src={user.picture} alt={user.name} />
                            <h2>{user.nickname} </h2>
                            <p>Su email es: {user.email}</p>

                            <Link to={'/historial'}>
                                Historial de compras
                            </Link>
                        </div>
                        <div>
                            <LogoutButton />
                        </div>
                    </div>
                ) :
                <div className={styles.login}>
                    <div>
                        <LoginButton />
                    </div>
                </div>
            }
        </div>

    )
}

export default Perfil;