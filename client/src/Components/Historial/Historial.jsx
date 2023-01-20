import React, { useEffect } from 'react'
import { getAllPurchases, updatePurchaseState } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';



// aca se obtienen las compras hechas por el usuario
// se muestran en el perfil de cada usuario luego de logearse
// se puede hacer un mapeo y devolver la Card del menu pero siendo ya una compra realizada

const Historial = () => {

  const dispatch = useDispatch()
  const purchases = useSelector((state) => state.purchases)

  useEffect(() => {
    dispatch(getAllPurchases())
  }, [dispatch])

  const Swal = require('sweetalert2')

  function handleClick(id) {
    Swal.fire({
      title: '¿Estás seguro de cancelar la compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'Volver atras'
    }).then((result) => {
      if (result.value) {
        dispatch(updatePurchaseState(id, { state: "Cancelado" }))
        Swal.fire({
          title: 'Compra cancelada',
          icon: 'warning'
        }).then(() => {
          window.location.reload()
        })
      }
    })
  }

  function handleFinalizada(id) {
    Swal.fire({
      title: '¿Estás seguro de finalizar la compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, finalizar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.value) {
        dispatch(updatePurchaseState(id, { state: "entregado" }));
        Swal.fire({
          title: 'Compra finalizada!',
          icon: 'success'
        }).then(() => {
          window.location.reload()
        })
      }
    })
  }

  return (
    <div style={{ display: 'flex' }}>
      <div >
        <Sidebar />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-box clearfix">
              <div class="table-responsive">
                <table class="table user-list">
                  <thead>
                    <tr>
                      <th scope="col" width="10%"><span>Name</span></th>
                      <th scope="col" width="20%" class="text-center"><span>Adress</span></th>
                      <th scope="col" width="20%"><span>Productos</span></th>
                      <th scope="col" width="20%"><span>Especificaciones</span></th>
                      <th scope="col" width="10%"><span>Total</span></th>
                      <th scope="col" width="20%"><span>Envio a domicilio</span></th>
                      <th scope="col" width="20%"><span>Estado</span></th>
                      <th scope="col" width="20%"><span>Acciones</span></th>
                    </tr>
                  </thead>
                  {purchases.map((e) => (
                    <tbody>
                      <tr>
                        <td class="text-center" >
                          {e.name}
                        </td>

                        <td class="text-center">
                          {e.address}
                        </td>
                        <td class="text-center">
                          {e.products}
                        </td>
                        <td class="text-center">
                          {e.specification}
                        </td>

                        <td class="text-center">
                          {e.total}
                        </td>
                        <td class="text-center">
                          Delivery
                        </td>
                        <td class="text-center">
                          {e.state}
                        </td>
                        <td class="text-center">
                          {/* {e.state === 'En proceso'}
                          <button style={{ width: '100px' }} type='button' class='btn btn-danger' onClick={() => handleClick(e.id)} disabled={e.state === "Cancelado"}>Cancelar</button>
                          {e.state === 'En proceso'}
                          <button style={{ width: '100px' }} type='button' class='btn btn-success' disabled={e.state === "Cancelado"}>Entregada</button> */}
                          {e.state === 'en proceso' ? (
                            <div>
                              <button style={{ width: '100px' }} type='button' class='btn btn-danger' onClick={() => handleClick(e.id)} >Cancelar</button>
                              <button style={{ width: '100px' }} type='button' class='btn btn-success' onClick={() => handleFinalizada(e.id)}>Finalizar</button>
                            </div>

                          ) : e.state === 'entregado' ?
                            <button style={{ width: '100px' }} type='button' class='btn btn-info' disabled>Entregada</button>
                            : <button type='button' class='btn btn-warning' disabled>Cancelada</button>
                          }
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >

  );
};

export default Historial;
