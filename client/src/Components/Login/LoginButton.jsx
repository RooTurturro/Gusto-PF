import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from './Login.module.css';


const LoginButton = () => {

    
   
    const { loginWithRedirect } = useAuth0();

    

    return (

        <div className={styled.container}>

            <button className={styled.button} onClick={() => loginWithRedirect()}><span>Iniciar Sesión</span></button>

    

        </div>


    )
}

export default LoginButton;