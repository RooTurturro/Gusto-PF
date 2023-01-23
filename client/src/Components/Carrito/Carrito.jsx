import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { delFromCart, updateCartStorage, addToCart } from '../../redux/shoppingActions'
import CarritoItem from './CarritoItem'
import { useEffect } from 'react'
import { getAllProducts } from '../../redux/actions'
import PediYa from '../PediYa/PediYa'
import './Carrito.css'
import Nav from '../NavBar/Nav'

const Carrito = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
 
    const [state , setState ] = useState(1)


    useEffect(() => {

        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <>
        <Nav />
        <div className='carrito-body'>
            <article >
                <section className="h-100 gradient-custom">
                    <div className="container py-2">
                        <div className="row d-flex justify-content-center my-4">
                            <div className="col-md-8">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        {
                                            cart.map((item) =>
                                                <CarritoItem
                                                    key={item.id}
                                                    id={item.id}
                                                    name={item.name}
                                                    price={item.price}
                                                    quantity={item.quantity}
                                                    description={item.description}
                                                    total={item.quantity * item.price}
                                                    image={item.image}
                                                    delOneFromCart={() => dispatch(delFromCart(item.id))}
                                                    delAllFromCart={() => dispatch(delFromCart(item.id, true))}
                                                />)}
                                               
                                        < PediYa />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
        </>
    )
}

export default Carrito






