import React from 'react'
import Nav from '../NavBar/Nav'

const Contacto = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className=" text-center mt-5 ">
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <h1 >Contactenos atraves de este formulario
            <hr />
            ó
            <hr />
            <a href='https://wa.me/+543513287397' target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'green' }}>
              Whatsapp
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          </h1>
        </div>
        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_name">Nombre*</label>
                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Ingrese su nombre *" required="required" data-error="Firstname is required." />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_lastname">Apellido *</label>
                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Ingrese su apellido *" required="required" data-error="Lastname is required." />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_email">Email *</label>
                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Ingrese su email*" required="required" data-error="Valid email is required." />

                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_need">Please specify your need *</label>
                            <select id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                              <option defaultValue='nada' disabled>-Seleccione su motivo-</option>
                              <option >Producto en mal estado</option>
                              <option >Mi pedido no llego</option>
                              <option >Aca va algo no se</option>
                              <option >Otro</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Mensaje *</label>
                            <textarea id="form_message" name="message" className="form-control" placeholder="Ingrese su mensaje" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <hr />
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
    </>
  )
}

export default Contacto