import React from 'react'
import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { getUserLog, login } from "../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../Components/Login/LoginButton';
import LogoutButton from '../Components/Login/LogoutButton';
import Loading from '../Components/Loading/Loading';
import styles from './Perfil.module.css'

const Perfil = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    //const dispatch = useDispatch();
    const usuario = useSelector(state => state.userLog);


    if (isLoading) {
        return <Loading />;
    }

    return (

        // <div >

        //     {isAuthenticated && (

        //         <div>
        //             <img src={user.picture} alt={user.name} />
        //             <h2>{user.name}</h2>
        //             <p>{user.email}</p>
        //         </div>
        //     )}

        //     <div>

        //         <LoginButton />
        //     </div>
        //     <div>
        //         <LogoutButton />
        //     </div>


        // </div>

        <div>
            {isAuthenticated ?
                isAuthenticated && (
                    <div style={{ color: 'black' }}>
                        <img src={user.picture} alt={user.name} />
                        <h2> Bienvenido {user.nickname} !</h2>
                        <p>Su email es: {user.email}</p>
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