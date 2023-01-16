import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getUserLog, login } from "../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';
import Loading from '../Loading/Loading';
import styles from './Perfil.module.css'
import { Link } from 'react-router-dom';
import { userLogin } from '../../redux/actions';


const Perfil = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch();
    const usuario = useSelector((state) => state.user);

    if (isAuthenticated) {

        usuario.name = user.name;
        usuario.email = user.email;

    }


    useEffect(() => {

        if (isLoading) {

            return <Loading />;

        } else if (isAuthenticated) {


            dispatch(userLogin({ name: user.name, email: user.email }))

        }

    }, [dispatch]);




    return (<div>


        {isAuthenticated ?
            isAuthenticated && (

                <div className={styles.container}>
                    <div className={styles.bloque}>
                        <div className={styles.left}>
                            <div>
                                <img src={user.picture} className={styles.imagen} alt="imagen de usuario" />
                            </div>
                            <div>
                                <h3>{user.name}</h3>
                            </div>

                        </div>

                        <div className={styles.right}>
                            <div className={styles.info}>
                                <div>
                                    <h3 className={styles.titulo}>Correo</h3>
                                    <p className={styles.text}>{user.email}</p>

                                </div>

                                <div>
                                    <h3 className={styles.titulo}>Teléfono</h3>
                                    <p className={styles.text}>{usuario.phone}</p>

                                </div>
                                <div>
                                    <h3 className={styles.titulo}>Dirección</h3>
                                    <p className={styles.text}>{usuario.address}</p>
                                </div>

                            </div>


                            <div className={styles.botones}>

                                <LogoutButton />

                                <Link to={'/historial'}>

                                    <button className={styles.button}>
                                        <span>Historial Compras</span>
                                    </button>
                                </Link>

                                <Link to={'/editarperfilusuario'}>
                                    <button className={styles.button}>
                                        <span>Editar Perfil</span>
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>


            ) :

            <div className={styles.containerLogin}>


                <LoginButton />


            </div>

        }

    </div>

    )
}

export default Perfil;