import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FormContact = () => {
    const navigate = useNavigate();
    const Swal = require("sweetalert2");

    const [errors, setErrors] = useState({});

    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
    });

    function validate(state) {
        let errors = {};

        if (!state.name) errors.name = "Nombre es requerido";
        if (!state.email) errors.email = "Email es requerido";
        if (!state.message) errors.message = "El mensaje es requerido";

        return errors;
    }

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...state,
                [e.target.name]: e.target.value,
            })
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        setState({
            name: "",
            email: "",
            message: ""
        })
        Swal.fire(`El formulario se envio exitosamente`)

        navigate('/')

    }

    return (
        <div className="container-form">
            <div className="info-form">
                <h2>Contactános</h2>
                <p>Escríbenos y en breve nos pondremos en contacto</p>
                <a href="#"><i className="fa fa-phone"></i>11 23456678</a>
                <br />
                <a href="#"> <i className="fa fa-envevlope"></i>gusto@hotmal.com</a>
                <br />
                <a href="#"> <i className="fa fa-map-marked">Argentina</i></a>
                <form onSubmit={handleSubmit}>
                    <br />
                    <p>Nombre</p>
                    <input type="text" name="name" placeholder="Ingresa tu nombre" onChange={(e) => handleChange(e)} className="campo" value={state.name} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Ingresa tu correo" onChange={(e) => handleChange(e)} className="campo" value={state.email} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    <p>Mensaje</p>
                    <textarea name="message" placeholder="Ingresa tu mensaje" onChange={(e) => handleChange(e)} value={state.message}></textarea>
                    {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

                    <button disabled={!state.name || !state.email || !state.message} type="submit">Enviar</button>
                    <Link to={"/"}>
						<button>Volver</button>
					</Link>

                </form>
            </div>
        </div>
    )
}

export default FormContact;