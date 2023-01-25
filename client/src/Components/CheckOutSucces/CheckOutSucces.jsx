import React from 'react'
import styles from './CheckOutSucces.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios';





// aca se obtienen las compras hechas por el usuario
// se muestran en el perfil de cada usuario luego de logearse
// se puede hacer un mapeo y devolver la Card del menu pero siendo ya una compra realizada

const CheckOutSucces = () => {


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
    products: products,
    price: price,
    address: address,
    quantity: quantity
  }
  const sendEmail = async () => {
    await axios.post("http://gusto-pf-production.up.railway.app/api/mail/checkout", { to, name, detail })
  };
  sendEmail();
  return (
    <div className="container justify-content-center mt-5" >
      <div className="row" style={{marginTop:'10%'}}>
        <div className="col-lg-12">
          <div className="main-box clearfix">
            <div className="table-responsive">
              <h2 style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "2rem",
					}} className={styles.comments} >🔥 ¡GRACIAS POR TU COMPRA! 🔥</h2>
              <table className="table user-list">
                <thead>
                  <tr>
                    <th scope="col" width="10%"  className="text-center"><span>Nombre</span></th>
                    <th scope="col" width="20%" className="text-center"><span>Direccion</span></th>
                    <th scope="col" width="20%"  className="text-center"><span>Productos</span></th>
                    <th scope="col" width="10%"  className="text-center"><span>Total</span></th>
                    <th scope="col" width="20%"  className="text-center"><span>Envio a domicilio</span></th>
                    <th scope="col" width="20%"  className="text-center"><span>Estado</span></th>
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
                  </tr>
                </tbody>
              </table>
              <Link to="/miscompras">
                <button type='btn' className='btn btn-success'>Mis compras</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>





  );
};

export default CheckOutSucces;
