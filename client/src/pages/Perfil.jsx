import React from 'react'
import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { getUserLog, login } from "../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../Components/Login/LoginButton';
import LogoutButton from '../Components/Login/LogoutButton';

const Perfil = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    //const dispatch = useDispatch();
    const usuario = useSelector(state => state.userLog);

    
    if (isLoading) {
        return <div>Loading ...</div>;
      }

    return (

        <div>
            
            {isAuthenticated && (
                
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )}

            <p>Front-Log in</p><LoginButton/>
            <p>Front-Log out</p><LogoutButton/>
            <br />
            <br />
            <a href="http://localhost:3000/login?returnTo=http://localhost:3001/">BACK-LOG IN</a>
            <br />
            <a href="http://localhost:3000/logout?returnTo=http://localhost:3001/">BACK-LOG OUT</a>

            <h2>User:{usuario}</h2>
            <h1>Hola</h1>
        
        </div>
  )
}

export default Perfil;