import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Contacto.css'


const Contacto = () => {
    const navigate = useNavigate()

    return (
        <div className="containerForm">
            <div className="row ">
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <form

                                    className='contactForm'
                                    action="https://getform.io/f/9e90f343-83d2-4804-8fb9-1bf8089ba2e5"
                                    method="POST"
                                    encType="multipart/form-data">
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="name">Nombre*</label>
                                                    <input type="text" name="name" className="form-control" placeholder="Ingrese su nombre *" required="required" data-error="Firstname is required." />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="lastname">Apellido *</label>
                                                    <input type="text" name="lastname" className="form-control" placeholder="Ingrese su apellido *" required="required" data-error="Lastname is required." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="email">Email *</label>
                                                    <input type="email" name="email" className="form-control" placeholder="Ingrese su email*" required="required" data-error="Valid email is required." />

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="need">Motivo</label>
                                                    <select name="need" className="form-control" required="required" data-error="Please specify your need.">
                                                        <option value="" selected disabled>-Seleccione su motivo-</option>
                                                        <option >Producto en mal estado</option>
                                                        <option >Mi pedido no llego</option>
                                                        <option >Otro</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label for="message">Mensaje *</label>
                                                    <textarea id="message" name="message" className="form-control" placeholder="Ingrese su mensaje" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                                                <button type='button' className='btn btn-danger' onClick={() => navigate(-1)}>Volver</button>
                                                <input type="submit" className="btn btn-success btn-send  pt-2 btn-block" value="Enviar" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contacto