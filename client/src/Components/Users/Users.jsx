import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers, updateUser } from '../../redux/actions'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const Users = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.users)

  function habilitarUser(email) {
    dispatch(updateUser(email, { state: 'Habilitado' }))
    Swal.fire({
      title: 'Usuario habilitado'
    }).then(() => {
      window.location.reload()
    })
  }

  useEffect(() => {
    dispatch(getAllUsers())
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
      {user.map((e) => (
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="main-box clearfix">
                <div class="table-responsive">
                  <table class="table user-list">
                    <thead>
                      <tr>
                        <th scope="col" width="20%"><span>Nombre</span></th>
                        <th scope="col" width="20%" class="text-center"><span>Dirección</span></th>
                        <th scope="col" width="20%"><span>Telefono</span></th>
                        <th scope="col" width="25%"><span>E-Mail</span></th>
                        <th scope="col" width="20%"><span>state</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center" >
                          {e.name}
                        </td>

                        <td class="text-center">
                          {e.address}
                        </td>
                        <td class="text-center">
                          {e.phone}
                        </td>
                        <td class="text-center">
                          {e.email}
                        </td>
                        <td class="text-center">
                          {e.state === 'Deshabilitado' ? (
                            <button onClick={() => habilitarUser(e.email)} type='button' class='btn btn-danger'>Deshabilitado</button>
                          ) : <button type='button' class='btn btn-success'>Habilitado</button>}
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

  )
}

export default Users