import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import * as actions from "../../redux/actions";
// import { useNavigate } from "react-router-dom";
import styled from './ProfileUserForm.module.css'
// import { Link } from "react-router-dom";

const ProfileUserForm = (props) => {
	
    console.log(props)
	return (       
            <>
                    <form className={styled.form}>

                            <div>
                                
                                <input className={styled.input} placeholder="Nombre">{props.nombre}</input> 

                            </div>


                            <div>
                                
                                <input className={styled.input} placeholder="Telefono"></input> 

                            </div>

                            <div>
                                
                                <input className={styled.input} placeholder="Correo Electronico" type="email">{props.correo}</input> 

                            </div>

                            <div>
                                
                                <input className={styled.input} placeholder="Direccion"></input> 

                            </div>


                            <button className={styled.button} type="submit">Guardar Cambios</button>
                </form>
            </>
		
	            )
};

export default ProfileUserForm;