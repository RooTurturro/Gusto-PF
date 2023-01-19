
import React from "react";
import styled from './Logout.module.css';
import { userLocalLogout } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const LogoutButton = () => {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storageLogOut =  () => {
    window.localStorage.removeItem('userPicture');
    window.localStorage.removeItem('userName');
    window.localStorage.removeItem('useremail');
    window.localStorage.removeItem('isLogIn');
  
  }
  const handleClick = ()=>{
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