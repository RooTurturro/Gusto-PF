import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateSpecification} from "../../redux/actions"
const FinalCheckOut = () => {
	const paymentUrl = useSelector((state) => state.paymentUrl);
    const purchase = useSelector((state) => state.newPurchase);
    const dispatch = useDispatch();

    function delivery(id) {
        dispatch(updateSpecification(id, { takeAway: false }));
    }

    function takeAway(id) {
        dispatch(updateSpecification(id, { takeAway: true }));
    }
	return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Elija metodo de entrega</h1>
                    </div>
                    <div className="modal-body">
                    {/* <div>
                     <button onClick={handleDelivery} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"onClick={() => delivery(purchase.id)} >Delivery</button>
                    <button type="button" style={{ fontSize: '12px', gap: '1rem', width: '70px', marginBottom: '10px' }} onClick={() => takeAway(purchase.id)} >TakeAway</button>
                    </div> */}

                    <div class="dropdown-center">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Forma de entrega
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onClick={() => delivery(purchase.id)}>TakeAway</a></li>
                            <li><a class="dropdown-item" href="#" onClick={() => takeAway(purchase.id)}>Delivery</a></li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Notas de Pedido:</label>
                        <textarea class="form-control" id="message-text" type="text"name="image" ></textarea>
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
	);
};

export default FinalCheckOut;
