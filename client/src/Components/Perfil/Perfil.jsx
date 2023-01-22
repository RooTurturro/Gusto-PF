import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Perfil.module.css'
import { Link } from 'react-router-dom';
import { userProfile } from '../../redux/actions';
import LogoutButton from '../Login/LogoutButton';


const Perfil = () => {
    const dispatch = useDispatch();
    const usuario = useSelector((state) => state.user);
    const email = window.localStorage.getItem('userEmail')
    const picture = window.localStorage.getItem('userPicture')

    useEffect(() => {
        dispatch(userProfile(email))
    }, [dispatch])


    return (
        <div>
            <div className={styles.container}>
                <div className={styles.bloque}>
                    <div className={styles.left}>
                        <div>
                            <img src={picture} className={styles.imagen} alt="imagen de usuario" />
                        </div>
                        <div>
                            <h3 className={styles.text2}>{usuario.name}</h3>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.info}>
                            <div>
                                <h3 className={styles.titulo}>Correo</h3>
                                <p className={styles.text}>{usuario.email}</p>
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