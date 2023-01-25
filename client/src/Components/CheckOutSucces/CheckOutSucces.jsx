import React, { useEffect } from 'react'
import { getAllPurchases, priceOrder } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios';



// aca se obtienen las compras hechas por el usuario
// se muestran en el perfil de cada usuario luego de logearse
// se puede hacer un mapeo y devolver la Card del menu pero siendo ya una compra realizada

const CheckOutSucces = () => {

  const dispatch = useDispatch()
  const newPurchase = useSelector((state) => state.newPurchase)
  const purchase = useSelector((state) => state.purchases)
  const cart = useSelector((state) => state.cart)
  // LOCAL STORAGE
  const name = window.localStorage.getItem('userName')
  const to = window.localStorage.getItem('userEmail')
  const products = window.localStorage.getItem('detailProducts')
  const price = window.localStorage.getItem('detailPrice')
  const state = window.localStorage.getItem('detailState')
  const address = window.localStorage.getItem('detailAdress')
  const specification = window.localStorage.getItem('detailSpecification')
  const quantity = window.localStorage.getItem('detailQuantity')
  // DETALLE DEL PEDIDO
  const detail = {
    products : products ,
    price : price ,
    address : address ,
    quantity : quantity
  }
  const sendEmail = async () => {
    await axios.post("http://gusto-pf-production.up.railway.app/api/mail/checkout", { to, name , detail })
  };
  sendEmail();
  return (
    <>
         <div className="container">
          <h2>Su compra se realizo con exito</h2>
          <div className="row">
            <div className="col-lg-12">
              <div className="main-box clearfix">
                <div className="table-responsive">
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th scope="col" width="10%"><span>Name</span></th>
                        <th scope="col" width="20%" className="text-center"><span>Direccion</span></th>
                        <th scope="col" width="20%"><span>Productos</span></th>
                        <th scope="col" width="10%"><span>Total</span></th>
                        <th scope="col" width="20%"><span>Envio a domicilio</span></th>
                        <th scope="col" width="20%"><span>Estado</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center" >
                          {name}
                        </td>
                        <td className="text-center">
                          {address}
                        </td>
                        <td className="text-center">
                          {products + ""}x{quantity}
                        </td>
                       
                        <td className="text-center">
                          {price}
                        </td>
                        <td className="text-center">
                          Delivery
                        </td>
                        <td className="text-center">
                          {state}
                        </td>
                        <td className="text-center">
                          {state === 'En proceso'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <Link to="/miscompras">
        <button>Mis compras</button>
      </Link>

    </>

  );
};

export default CheckOutSucces;
