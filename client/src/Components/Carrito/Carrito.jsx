import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/actions';
import styles from './Carrito.module.css';
import cajasnegras from '../../assets/greyBoxes.jpg'



const Carrito = ({ isOpen, onClose, children }) => {

    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(getAllProducts())

    }, [dispatch])

    return (
        <>
            <div className={styles.container} style={{ display: isOpen ? 'flex' : 'none' }}>
                <div className={styles.body}>
                    <div className={styles.tuyo}>
                        <div>LO TUYO</div>
                        <button type='button' className='btn btn-dark' onClick={onClose}>X</button>
                    </div>
                    <div className={styles.cajasnegras}>
                        <img src={cajasnegras} alt="cajas" />
                    </div>
                    {children}
                </div>

            </div>
        </>
    )
}

export default Carrito






