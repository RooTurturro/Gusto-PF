import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import NavBar from "../NavBar/NavBar";
//import styled from "./LandingPage.module.css";
// import { Link } from "react-router-dom";

const Login = () => {

    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
      }


    return(

        <div >
            <NavBar/>

           {isAuthenticated && (
            
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )}

            <button onClick={()=>loginWithRedirect()}>Login</button>
            <LogoutButton/>


        </div>
            
    
            )
}

export default Login;