import React from 'react'
import { useEffect } from 'react'
import { getAllPurchases, userProfile, updatePurchaseState } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './UserHistory.module.css'
import OldUserHistory from './oldUserHistory'
import logo from "../../assets/gustoPng.png";





// aca se obtienen las compras hechas por el usuario
// se muestran en el perfil de cada usuario luego de logearse
// se puede hacer un mapeo y devolver la Card del menu pero siendo ya una compra realizada

const UserHistory = () => {


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


// height: 100vh; /* Magic here */
// display: flex;
// justify-content: center;
// align-items: center;
  return (

    <div>
      { userPurchase.length > 0 ?
        <OldUserHistory/>
        : 
        <div>
          <div>
          <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '-170px', marginTop:'-20px' }}>
            <img src={logo} alt="img" style={{maxWidth:'30%'}} />
          </div>
          <h2 style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "0rem",
					}} className={styles.comments} >PARECE QUE AUN NO TIENES COMPRAS</h2>
          <h2 style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "0rem",
					}} className={styles.comments} > <a href='http://ganasdegusto.vercel.app/menu' style={{color: 'red'}}>🔥VER MENÚ🔥</a></h2>
          </div>
        </div>
        }
    </div>

  );
};

export default UserHistory