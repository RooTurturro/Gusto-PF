import React from 'react'
import { useEffect } from 'react'
import { getAllPurchases, userProfile, updatePurchaseState} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './UserHistory.module.css'





// aca se obtienen las compras hechas por el usuario
// se muestran en el perfil de cada usuario luego de logearse
// se puede hacer un mapeo y devolver la Card del menu pero siendo ya una compra realizada

const OldUserHistory = () => {

    const dispatch = useDispatch()
    const email = window.localStorage.getItem('userEmail')
    const purchases = useSelector((state) => state.purchases)
    const user = useSelector(state => state.user);

    const userPurchase = purchases.filter(purchase =>
      user.name === purchase.name
    ) 
    
  
  useEffect(() => {
    
    dispatch(getAllPurchases())
    dispatch(userProfile(email))

  }, [dispatch])



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

    <>
{/* vertical-align: middle */}
    <div class="container" style={{marginTop:'100px'}}>    
       
          <div class="row">
            <div class="col-lg-12">
              <div class="main-box clearfix">
                <div class="table-responsive">
                  <table class="table user-list">
                    <thead>
                      <tr>
                        <th scope="col" width="10%" className="text-center"><span>Nombre</span></th>
                        <th scope="col" width="20%" className="text-center"><span>Direccion</span></th>
                        <th scope="col" width="20%" className="text-center"><span>Productos</span></th>
                        <th scope="col" width="20%" className="text-center"><span  style={{verticalAlign:'middle'}}>Especificaciones</span></th>
                        <th scope="col" width="10%" className="text-center"><span>Total</span></th>
                        <th scope="col" width="20%" className="text-center"><span>Envio a domicilio</span></th>
                        <th scope="col" width="20%" className="text-center"><span>Estado</span></th>
                      </tr>
                    </thead>
                    {userPurchase.map((e) => ( 
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
                        {e.takeAway === true ?  
                          <td class="text-center">
                            Retiro en local
                          </td>
                          :<td class="text-center">
                            Delivery
                          </td>}
                      

                        { e.takeAway === false ?
                          <td class="text-center">
                            {e.state === 'en proceso' ?
                            <button type='button' class='btn btn-success' onClick={() => purchaseState(e.id)}>Entregada!</button>
                            : e.state}
                          </td>
                        : <td class="text-center">
                        {e.state}
                      </td>}

                      </tr>
                    </tbody>
                    ))}
                  </table>

                </div>
              </div>
            </div>
          </div>
    


    </div>
    </>

  );
};

export default OldUserHistory