import React from "react" ;
import {useState } from "react"
import axios from "axios"
import "./Modal.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";

const ModalCancel = ({ isOpen ,closeModal , to, name })=>{

    const purchases = useSelector((state) => state.purchases)
    const handleModalContainerClick = (e) => e.stopPropagation();
    const [motivo , setMotivo] = useState()

    // const userPurchase = purchases.filter((e) => e.id === id)
    
const handleInputs = (event) =>{
    setMotivo(event.target.value)
}

 const handleSubmit = async ()=>{
 await axios.post("http://localhost:3001/api/mail/cancel",{to, name ,motivo})
 }
console.log(to);
    return(

        <>
           <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button type="button" className="btn-close" style={{ position: 'absolute', top: '1rem' , right: '1rem'}} aria-label="Close" onClick={closeModal}/>
        <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Formulario de cancelacion</h1>
                    </div>
                    <div className="modal-body">
      
                        <div className="mb-3">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Motivo de cancelacion</Form.Label>
                                    <p>{to}</p>
                                    <Form.Control as="textarea" placeholder="Nota sobre el pedido " onChange={handleInputs}/>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleSubmit}>
                                    Enviar
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </article>
        </>
    )
};

export default ModalCancel;
