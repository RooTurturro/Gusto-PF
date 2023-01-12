import React, { useEffect } from 'react'
import { getAllProducts } from '../../redux/actions/globalActions'
import { useDispatch, useSelector } from 'react-redux'


const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    console.log(products)

    return (
        <div>

            {products.map((e) => (
                <div class="container d-flex justify-content-center">

                    <ul class="list-group mt-5 text-white">
                        <li class="list-group-item d-flex justify-content-between align-content-center">
                            <div class="d-flex flex-row">
                                <img src={e.image} width='100px' alt='comida'/>
                                <div class="ml-2">
                                    <h6 class="mb-0">{e.name}</h6>
                                    <div class="about">
                                        <span>${e.price}</span>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="check">
                                <input type="checkbox" name="a" />
                            </div>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default ProductList