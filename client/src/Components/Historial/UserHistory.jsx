import React, { useEffect } from 'react'
import { getAllPurchases, userProfile, updatePurchaseState } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import './UserHistory.css'
import Nav from '../NavBar/Nav';
import { useNavigate } from 'react-router-dom';



// aca se obtienen las compras hechas por el usuario
// se muestran en el perfil de cada usuario luego de logearse
// se puede hacer un mapeo y devolver la Card del menu pero siendo ya una compra realizada

const UserHistory = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const email = window.localStorage.getItem('userEmail')

  useEffect(() => {
    dispatch(getAllPurchases())
    dispatch(userProfile(email))
  }, [dispatch])

  const purchases = useSelector((state) => state.purchases)
  const user = useSelector(state => state.user);
  const Swal = require('sweetalert2')

  function purchaseState(id) {
    dispatch(updatePurchaseState(id, { state: 'entregado' }));
    dispatch(getAllPurchases())
    Swal.fire({
      title: 'Entrega confirmada'
    }).then(() => {
      window.location.reload()
    })
  }
  return (
    <div>
      <Nav />

      <div className='containerUsuario'>
        <div className='container justify-content-center'>
          <div className="row">
            <div className="col-lg-12">
              <div className="main-box clearfix">
                <div className="table-responsive">
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th scope="col" width="10%">
                          <span>Nombre</span>
                        </th>
                        <th scope="col" width="20%" className="text-center">
                          <span>Dirección</span>
                        </th>
                        <th scope="col" width="20%">
                          <span>Productos</span>
                        </th>
                        <th scope="col" width="20%">
                          <span>Especificaciones</span>
                        </th>
                        <th scope="col" width="10%">
                          <span>Total</span>
                        </th>
                        <th scope="col" width="20%">
                          <span>Envio a domicilio</span>
                        </th>
                        <th scope="col" width="20%">
                          <span>Estado</span>
                        </th>
                      </tr>
                    </thead>
                    {purchases?.map((e) =>
                      e.name === user.name ? (
                        <tbody>
                          <tr>
                            <td className="text-center">{e.name}</td>
                            <td className="text-center">{e.address}</td>
                            <td className="text-center">{e.products}</td>
                            <td className="text-center">{e.specification}</td>
                            <td className="text-center">{e.total}</td>
                            <td className="text-center">Delivery</td>
                            {e.takeAway === false ? (
                              <td className="text-center">
                                {e.state === "en proceso" ? (
                                  <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => purchaseState(e.id)}
                                  >
                                    Recibido!
                                  </button>
                                ) : (
                                  e.state
                                )}
                              </td>
                            ) : (

                              <td className="text-center"><button type='button' className='btn btn-danger' disabled>{e.state}</button></td>
                            )}
                          </tr>
                        </tbody>
                      ) : null
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHistory;