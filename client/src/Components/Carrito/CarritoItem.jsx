import React from 'react';
import { delFromCart, addToCart } from '../../redux/shoppingActions';
import { useDispatch } from 'react-redux';
import styles from './CarritoItem.module.css';

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
                
                    <img src={image} alt='hamburgueson' className={styles.imagen}/>
                
            </div>

            <div>
                <p><strong>{name}</strong></p>
                <p>{description}</p>
                <button onClick={() => delOneFromCart(id)} className={styles.buttonDel}>quitar</button>
            
                
                    <h5> Cantidad: {quantity} </h5>
                    <button onClick={() => { dispatch(addToCart(id)) }}> + </button>
                    <button onClick={() => { dispatch(delFromCart(id)) }}> - </button>
                     ${price * quantity}
                    
                
            </div>
        </div>
    )
}

export default CartItem



