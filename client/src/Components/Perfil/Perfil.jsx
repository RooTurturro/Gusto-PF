import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getUserLog, login } from "../redux/actions";
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';
import styles from './Perfil.module.css'
import { Link } from 'react-router-dom';
import { userProfile } from '../../redux/actions';



const Perfil = () => {

    
    const dispatch = useDispatch();

    
    
    const email = window.localStorage.getItem('userEmail')
    console.log ('este es el email qeu se manda     ' + email)
    const picture = window.localStorage.getItem('userPicture')
    console.log ('este es el email qeu se manda     ' + picture)


    useEffect(()=>{

       
        dispatch(userProfile(email))

    }, [dispatch])
   
    const usuario = useSelector((state) => state.user);

    console.log('Estado Global ' + usuario)




    return (
        

                <div>
                    <div className={styles.container}>
                        <div className={styles.bloque}>
                            <div className={styles.left}>

                                <div>
                                    <img src={picture} className={styles.imagen} alt="imagen de usuario" />
                                </div>

                                <div>
                                    { usuario.length > 0 ? <h3 className={styles.text}>{usuario[0].name}</h3> : <p>Cargando Datos</p> }
                                </div>

                            </div>

                            <div className={styles.right}>
                                <div className={styles.info}>

                                    <div>

                                        <h3 className={styles.titulo}>Correo</h3>
                                        { usuario.length > 0 ? <p className={styles.text}>{usuario[0].email}</p> : <p>Cargando Datos</p> }
                                        
                                    </div>

                                    <div>
                                        <h3 className={styles.titulo}>Teléfono</h3>
                                        { usuario.length > 0 ? <p className={styles.text}>{usuario[0].phone}</p> : <p>Cargando Datos</p> }

                                    </div>

                                    <div>
                                        <h3 className={styles.titulo}>Dirección</h3>
                                        { usuario.length > 0 ? <p className={styles.text}>{usuario[0].addres}</p> : <p>Cargando Datos</p> }
                                    </div>

                                </div>


                                <div className={styles.botones}>
                                   

                                    <Link to={'/editarperfilusuario'}>
                                        <button className={styles.button}>
                                            <span>Editar Perfil</span>
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

    )
}

export default Perfil;