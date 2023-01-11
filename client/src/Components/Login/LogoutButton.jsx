import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from './Logout.module.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className={styled.button} onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;