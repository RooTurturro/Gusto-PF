import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from './Logout.module.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    
    <div className={styled.container}>

      <button className={styled.button} onClick={() => logout({ returnTo: window.location.origin })}>
            <span>Cerrar Sesión</span>
      </button>

    </div>
    
  );
};

export default LogoutButton;