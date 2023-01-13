import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getUserLog, login } from "../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';
import Loading from '../Loading/Loading';
import styles from './Perfil.module.css'
import { Link } from 'react-router-dom';
import { userLogin } from '../../redux/actions';

const Perfil =  () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch(); 

    const usuario = useSelector(state => state.user);

    console.log(user)
    console.log('antes' + usuario)
    useEffect(()=>{
        if (isLoading) {
            return <Loading />;
        } else if (isAuthenticated) {
            dispatch(userLogin({name:user.name, email:user.email}))
        
        } 
    },[dispatch]);
   

    console.log('despues' + usuario)
    return (
        <div>
           
            {isAuthenticated ?
                isAuthenticated && (
                    <div className={styles.container}>
                        
                        <div className={styles.infoContainerName}>
                            <img src={user.picture} alt="Imagen de usuario" className={styles.img} />

                            <p>{user.name}</p>
                        </div>
                        
                            
                        <div className={styles.infoContainer}>


                            
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>{user.address}</p>
                            
                        
                        </div>

                        <div className={styles.buttonContainer}>

                            <LogoutButton/>
                            
                            
                            <Link to={'/historial'}> 
                                

                                <button className={styles.button}><span>Historial Compras</span></button>

                                
                                

                            </Link>


                            <Link to={'/editarperfilusuario'}> 
                                    

                                    <button className={styles.button}><span>Editar Perfil</span></button>

                                    
                                
                            </Link>

                            
                        </div>
                        



                    </div>
                 
                ) :

                <div className={styles.container}>
                    <div className={styles.login}>
                            <div>
                                <LoginButton />
                            </div>
                    </div>
                </div>
                
            }
        </div>

    )
}

export default Perfil;