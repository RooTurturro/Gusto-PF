import React, { useEffect } from 'react'
import { getAllPurchases } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



// aca se obtienen las compras hechas por el usuario
// se muestran en el perfil de cada usuario luego de logearse
// se puede hacer un mapeo y devolver la Card del menu pero siendo ya una compra realizada

const Historial = () => {

  const dispatch = useDispatch()
  const purchases = useSelector((state) => state.purchases)

  useEffect(() => {
    dispatch(getAllPurchases())
  }, [dispatch])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to={'/create'}>
          <button type="button" class="btn btn-success">
            Nuevo producto
          </button>
        </Link>
        <Link to={'/productlist'}>
          <button type="button" class="btn btn-warning">
            Listado de productos
          </button>
        </Link>
      </div>
      {purchases.map((e) => (
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="main-box clearfix">
                <div class="table-responsive">
                  <table class="table user-list">
                    <thead>
                      <tr>
                        <th scope="col" width="10%"><span>Name</span></th>
                        <th scope="col" width="10%"><span>Lastname</span></th>
                        <th scope="col" width="20%" class="text-center"><span>Adress</span></th>
                        <th scope="col" width="20%"><span>Productos</span></th>
                        <th scope="col" width="20%"><span>Especificaciones</span></th>
                        <th scope="col" width="10%"><span>Total</span></th>
                        <th scope="col" width="20%"><span>Envio a domicilio</span></th>
                        <th scope="col" width="20%"><span>state</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center" >
                          {e.name}
                        </td>
                        <td class="text-center">
                          {e.lastname}
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
                          {e.state === 'En proceso' ? (
                            <button type='button' class='btn btn-danger'>Cancelar</button>
                          ) : <button type='button' class='btn btn-success'>Entregada</button>}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </>

  );
};

export default Historial;
