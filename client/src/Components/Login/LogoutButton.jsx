
import React from "react";
import styled from './Logout.module.css';
import { userLocalLogout } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const LogoutButton = () => {

  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storageLogOut =  () => {
    window.localStorage.removeItem('userPicture');
    window.localStorage.removeItem('userName');
    window.localStorage.removeItem('useremail');
    window.localStorage.removeItem('isLogIn');
  
  }
  const handleClick = ()=>{
    logout();
    localStorage.clear();
    storageLogOut();
    dispatch(userLocalLogout())
    navigate('/')
  }

  return (
    
    <div className={styled.container}>

      <button className={styled.button} onClick={handleClick}>
            <span>Cerrar Sesión</span>
      </button>

    </div>
    
  );
};

export default LogoutButton;