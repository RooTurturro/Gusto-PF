import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//import styled from "./LandingPage.module.css";
// import { Link } from "react-router-dom";

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();
    
    return(

        <div >

            <button onClick={()=>loginWithRedirect()}>Login</button>
            
        </div>
            
    
            )
}

export default LoginButton;