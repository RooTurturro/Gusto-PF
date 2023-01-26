import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers, updateUser } from '../../redux/actions'
import Swal from 'sweetalert2'
import Sidebar from '../Sidebar/Sidebar'


const Users = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.users)

  function habilitarUser(e) {
    const userToUpdate = {
      name: e.name,
      phone: e.phone,
      email: e.email,
      address: e.address,
      isAdmin: e.isAdmin,
      state: "Habilitado",
    }
    dispatch(updateUser(userToUpdate))
    Swal.fire({
      title: 'Usuario habilitado'
    }).then(() => {
      window.location.reload()
    })
  }

  function deshabilitarUser(e) {
    const userToUpdate = {
      name: e.name,
      phone: e.phone,
      email: e.email,
      address: e.address,
      isAdmin: e.isAdmin,
      state: "Deshabilitado",
    }
    dispatch(updateUser(userToUpdate))
    Swal.fire({
      title: 'Usuario deshabilitado'
    }).then(() => {
      window.location.reload()
    })
  }

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])


  return (
    <>

      <div style={{ display: 'flex', marginTop: '7%' }}>
        <div >
          <Sidebar />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-box clearfix">
                <div className="table-responsive">
                  <table className="table user-list">
                    <thead>
                      <tr className='text-center'>
                        <th scope="col" width="20%"><span>Nombre</span></th>
                        <th scope="col" width="20%" className="text-center"><span>Dirección</span></th>
                        <th scope="col" width="20%"><span>Telefono</span></th>
                        <th scope="col" width="25%"><span>E-Mail</span></th>
                        
                      </tr>
                    </thead>
                    {user.map((e) => (
                      <tbody key={e.id}>
                        <tr  >
                          <td className="text-center" >
                            {e.name}
                          </td>

                          <td className="text-center">
                            {e.address}
                          </td>
                          <td className="text-center">
                            {e.phone}
                          </td>
                          <td className="text-center">
                            {e.email}
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
      </div>
    </>
  )
}

export default Users