import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userLocalLogin } from '../../redux/actions';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { userUpdate } from "../../redux/actions";
import { useDispatch } from "react-redux";
// import * as actions from "../../redux/actions";
// import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const ProfileUserForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usuario = useSelector((state) => state.user);
    const email = window.localStorage.getItem('userEmail')
    

    const Swal = require('sweetalert2')


    const [inputs, setInputs] = useState({
        name: usuario.name,
        email: email,
        phone: "",
        address: "",
    });

    //---------HANDLES-----------------------------------

    const handleSubmit = (evento) => {
        evento.preventDefault();
        dispatch(userUpdate(inputs));
        setInputs({
            name: "",
            email: "",
            phone: "",
            address: "",
        })
        Swal.fire(`Datos Guardados`);
        navigate('/perfil')

    }
    //--------
    const handleInputs = (evento) => {

        setInputs({
            ...inputs,
            [evento.target.name]: evento.target.value,
        })

    }
    // const picture = window.localStorage.getItem('userPicture')
    // const name =window.localStorage.getItem('userName')
    // const email =window.localStorage.getItem('useremail')
    // const log =window.localStorage.getItem('isLogIn')

    // useEffect(()=>{
    //     dispatch(userLocalLogin({picture, name, email, log}))
    //   }, [])

    


    return (
        <div className="form-body">
            <div className="row">
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h2 style={{color: 'white'}}>Editar Perfil</h2>
                            <form className="requires-validation formDa">
                                <p>Para modificar el correo electronico debe iniciar sesion con una nueva cuenta</p>
                                <div className="col-md-12">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={inputs.name}
                                        name='name'
                                        onChange={handleInputs}
                                        placeholder="Nombre Completo"
                                        required />
                                </div>
                                
                                <div className="col-md-12">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="phone"
                                        onChange={handleInputs}
                                        value={inputs.phone}
                                        placeholder="Telefono"
                                        required
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        className="form-control"
                                        type='text'
                                        name="address"
                                        onChange={handleInputs}
                                        value={inputs.address}
                                        placeholder='Direccion'

                                        required
                                    />
                                </div>
                                <div className='botones'>
                                    <button type="submit"
                                        onClick={handleSubmit}
                                        className="col-sm  bottonDa" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                        </svg>
                                        Guardar
                                    </button>
                                    <Link to={'/perfil'}>
                                        <button className="col-sm  bottonClose" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
                                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                            </svg>
                                            Atras
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileUserForm;