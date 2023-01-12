import React, { useEffect } from 'react'
import { getAllProducts } from '../../redux/globalActions'
import { useDispatch, useSelector } from 'react-redux'
import './ProductList.css'


const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    console.log(products)

    return (
        <>

            {products.map((e) => (
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="main-box clearfix">
                                <div class="table-responsive">
                                    <table class="table user-list">
                                        <thead>
                                            <tr>
                                                <th><span>Producto</span></th>
                                                <th><span>Fecha</span></th>
                                                <th class="text-center"><span>Status</span></th>
                                                <th><span>Precio</span></th>
                                                <th><span>Email</span></th>
                                                <th>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src={e.image} alt="" />
                                                    <a href="#!" class="user-link">{e.name}</a>
                                                </td>
                                                <td>
                                                    2013/08/08
                                                </td>
                                                <td class="text-center">
                                                    <span class="label label-default">{e.state}</span>
                                                </td>
                                                <td class="text-center">
                                                    <span class="label label-default">${e.price}</span>
                                                </td>
                                                <td>
                                                    <a href="#!">mila@kunis.com</a>
                                                </td>
                                                <td style={{ width: "20%" }}>
                                                    {e.state === 'En proceso' ? (

                                                        <button type="button" class="btn btn-danger">Cancelar</button>
                                                    ): null}
                                                    <a href="#!" class="table-link">
                                                        <span class="fa-stack">
                                                            <i class="fa fa-square fa-stack-2x"></i>
                                                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                                        </span>
                                                    </a>
                                                    <a href="#!" class="table-link">
                                                        <span class="fa-stack">
                                                            <i class="fa fa-square fa-stack-2x"></i>
                                                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                        </span>
                                                    </a>
                                                    <a href="#!" class="table-link danger">
                                                        <span class="fa-stack">
                                                            <i class="fa fa-square fa-stack-2x"></i>
                                                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                        </span>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default ProductList