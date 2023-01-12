import React from 'react'
import './ProductItem.css'

const ProductItem = ({ id, name, price, image, description, addToCart }) => {
    return (

        <div style={{ border: 'thin solid gray', padding: '1rem' }}>
            <h4>{name}</h4>
            <h4>${price}</h4>
            <h4>{description}</h4>
            <img style={{ width: '50px' }} src={image} alt="" />
            <button onClick={() => addToCart(id)}>Agregar</button>
        </div>



    )
}

export default ProductItem

