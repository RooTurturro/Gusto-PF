import React, { useEffect ,useState } from 'react'
import { getAllPurchases, getAllUsers, updatePurchaseState } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';
import ModalCancel from "../Modal/ModalCancel";

// aca se obtienen las compras hechas por el usuario
// se muestran en el perfil de cada usuario luego de logearse
// se puede hacer un mapeo y devolver la Card del menu pero siendo ya una compra realizada

const Historial = () => {
 
  const [email, setEmail] = useState()
  const [name , setName] = useState()
  const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = () => {

        setIsOpen(true);
    }

    const closeModal = () => setIsOpen(false);

    return [isOpen, openModal, closeModal];
};

const [isOpenModal, openModal, closeModal] = useModal(false);


  const dispatch = useDispatch()
  const purchases = useSelector((state) => state.purchases)

  useEffect(() => {
    dispatch(getAllUsers());
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
    })
    .then((result) => {
      if (result.value) {
        dispatch(updatePurchaseState(id, { state: "Cancelado" }))
        Swal.fire({
          title: 'Compra cancelada',
          icon: 'warning'
        }).then(() => {
          openModal()
        })
      }
    })
    const userPurchase = purchases.filter((e) => e.id === id)
    setEmail(userPurchase[0].email)
    setName(userPurchase[0].name)
    console.log(name)
    console.log(userPurchase)
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
    <div style={{ display: 'flex', marginTop: '7%'  }}>
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
                    <tr>
                      <th scope="col" width="10%"><span>Name</span></th>
                      <th scope="col" width="20%" className="text-center"><span>Adress</span></th>
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
                        <td className="text-center" >
                          {e.name}
                        </td>

                        <td className="text-center">
                          {e.address}
                        </td>
                        <td className="text-center">
                          {e.products}
                        </td>
                        <td className="text-center">
                          {e.specification}
                        </td>

                        <td className="text-center">
                          {e.total}
                        </td>
                        <td className="text-center">
                          Delivery
                        </td>
                        <td className="text-center">
                          {e.state}
                        </td>
                        <td className="text-center">
                          {/* {e.state === 'En proceso'}
                          <button style={{ width: '100px' }} type='button' className='btn btn-danger' onClick={() => handleClick(e.id)} disabled={e.state === "Cancelado"}>Cancelar</button>
                          {e.state === 'En proceso'}
                          <button style={{ width: '100px' }} type='button' className='btn btn-success' disabled={e.state === "Cancelado"}>Entregada</button> */}
                          {e.state === 'en proceso' ? (
                            <div>
                              <button style={{ width: '100px' }} type='button' className='btn btn-danger' onClick={()=>{handleClick(e.id)}} >Cancelar</button>
                              <ModalCancel
                              to = {email}
                              name = {name}
                              isOpen={isOpenModal} closeModal={closeModal}/>
                              <button style={{ width: '100px' }} type='button' className='btn btn-success' onClick={() => handleFinalizada(e.id)}>Finalizar</button>
                            </div>
                          ) : e.state === 'entregado' ?
                            <button style={{ width: '100px' }} type='button' className='btn btn-info' disabled>Entregada</button>
                            : <button type='button' className='btn btn-warning' disabled>Cancelada</button>
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
