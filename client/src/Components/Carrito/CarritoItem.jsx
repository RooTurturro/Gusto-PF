import React from 'react';
import { delFromCart, addToCart } from '../../redux/shoppingActions';
import { useDispatch } from 'react-redux';
import styles from './CarritoItem.module.css';
import { BsTrash } from 'react-icons/bs'

const CartItem = ({ id, name, price, image, description, total, quantity, delOneFromCart }) => {

    const dispatch = useDispatch()
    //const cart = useSelector(state => state.cart)


    /*   const handleClick = (e)=>{
           e.preventDefault()
           dispatch(addToCart(id))
           setState(state + 1)
       }*/

    return (
        <div className={styles.container}>

            <div >
                <img src={image} alt='hamburgueson' className={styles.imagen} />
            </div>
            <div className={styles.carritoInfo}>
                <div className={styles.carritoName}>
                    <p>{name}</p>
                    <p>${price * quantity}</p>
                </div>
                <div className={styles.carritoButtons}>
                    <button onClick={() => { dispatch(delFromCart(id)) }}> - </button>
                    <h5>  {quantity} </h5>
                    <button onClick={() => { dispatch(addToCart(id)) }}> + </button>
                </div>
            </div>
        </div >
    )
}

export default CartItem



