import "./Modal.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import {getAllPurchases, getPurchaseDetail, updateSpecification} from "../../redux/actions"

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  const paymentUrl = useSelector((state) => state.paymentUrl);
  const purchase = useSelector((state) => state.newPurchase);
  const dispatch = useDispatch();

  function delivery(id) {
      dispatch(updateSpecification(id, { takeAway: false }))
      dispatch(getPurchaseDetail(purchase.id));
  }

  function takeAway(id) {
      dispatch(updateSpecification(id, { takeAway: true }));
      dispatch(getPurchaseDetail(purchase.id));
  }

  const [inputs, setInputs] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateSpecification(purchase.id, {specification: inputs}));
    setInputs()
}

const handleInputs = (event) => {

    setInputs(event.target.value)

}

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button type="button" className="btn-close" style={{ position: 'absolute', top: '1rem' , right: '1rem'}} aria-label="Close" onClick={closeModal}/>
        <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Completar pedido</h1>
                    </div>
                    <div className="modal-body">
                        <DropdownButton id="dropdown-basic-button" title="Tipo de entrega">
                            <Dropdown.Item href="#/action-1" onClick={() => takeAway(purchase.id)}>Take Away</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={() => delivery(purchase.id)}>Delivery</Dropdown.Item>
                        </DropdownButton>
                            
                        <div className="mb-3">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nota sobre el pedido</Form.Label>
                                    <Form.Control as="textarea" placeholder="Nota sobre el pedido " onChange={handleInputs}/>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleSubmit}>
                                    Guardar
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="modal-footer">                    
                    {paymentUrl.length > 0 ? (
									<div div style={{ display: 'flex', alignItems: 'center'}}>
										Seleccione metodo de pago
										<a href={paymentUrl}>
											<img width={'100px'} src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668792016/Donde-Suena-Assets/mercado-pago_pxshfi.png" alt='mercadopago' />
										</a>
									</div>
								) :  null}
                    </div>
                </div>
            </div>
      </div>
    </article>
  );
};
export default Modal;