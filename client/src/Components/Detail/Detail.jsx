import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsDetail } from '../../redux/globalActions'
import styles from './Detail.module.css'


const Detail = () => {
    const { id } = useParams()
    const product = useSelector((state) => state.productDetail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsDetail(id))
    }, [dispatch, id])
    console.log(product)
    return (
        <div>
            <div className={styles.cardDetail}>
                <div >
                    <img className={styles.cardImage}src={product.image} alt='nada' />
                </div>
                <div className={styles.cardBody}>
                    <h1>{product.name}</h1>
                    <div>
                        <div>
                            Descripcion sobre el producto: {product.description}
                        </div>
                        <div>
                            El producto tiene un precio de: ${product.price}
                        </div>
                        <div>
                            Topings: ?
                        </div>
                    </div>
                </div>
            </div>
            <Link className={styles.cardButton} to={'/menu'}>
                <button>Volver</button>
            </Link>
        </div>

    )
}

export default Detail