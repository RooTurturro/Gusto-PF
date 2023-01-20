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

  const name = window.localStorage.getItem('userName')
  const to = window.localStorage.getItem('userEmail')
  const products = window.localStorage.getItem('detailProducts')
  const price = window.localStorage.getItem('detailPrice')
  const state = window.localStorage.getItem('detailState')
  const address = window.localStorage.getItem('detailAdress')
  const specification = window.localStorage.getItem('detailSpecification')

  const detail = {
    products : products ,
    price : price ,
    address : address 
  }

  const sendEmail = async () => {
    await axios.post("http://localhost:3001/api/mail/checkout", { to, name , detail })
  };
  sendEmail();
  
  /*useEffect(() => {
    sendEmail()
  })*/
  sendEmail()
 console.log(name)
 console.log(to)
 console.log(products)
 console.log(price)
 console.log(state)

  return (
    <>
         <div class="container">
          <h2>SU COMPRA A SIDO ESITOSA XD</h2>
          <div class="row">
            <div class="col-lg-12">
              <div class="main-box clearfix">
                <div class="table-responsive">
                  <table class="table user-list">
                    <thead>
                      <tr>
                        <th scope="col" width="10%"><span>Name</span></th>
                        <th scope="col" width="20%" class="text-center"><span>Direccion</span></th>
                        <th scope="col" width="20%"><span>Productos</span></th>
                        <th scope="col" width="10%"><span>Total</span></th>
                        <th scope="col" width="20%"><span>Envio a domicilio</span></th>
                        <th scope="col" width="20%"><span>Estado</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center" >
                          {name}
                        </td>
                        <td class="text-center">
                          {address}
                        </td>
                        <td class="text-center">
                          {products}
                        </td>
                       
                        <td class="text-center">
                          {price}
                        </td>
                        <td class="text-center">
                          Delivery
                        </td>
                        <td class="text-center">
                          {state}
                        </td>
                        <td class="text-center">
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
