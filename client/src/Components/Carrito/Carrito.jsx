import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/actions';
import styles from './Carrito.module.css';



const Carrito = ( {isOpen, onClose, children}) => {

    const dispatch = useDispatch()
    
 
    useEffect(() => {

        dispatch(getAllProducts())

    }, [dispatch])

    return (    
        <>
            <div className={styles.container} style={{display: isOpen ? 'flex' : 'none'}}>
                <div className={styles.body}>


                                <button className={styles.button} onClick={onClose}>X</button>

                               {children}


                </div>
                
            </div>
        </>
    )
}

export default Carrito






