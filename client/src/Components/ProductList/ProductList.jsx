import React, { useEffect } from 'react'
import { deleteProducts, getAllProducts } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import './ProductList.css'
import { Link } from 'react-router-dom'


const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    console.log(products)
    const Swal = require('sweetalert2')
    const trashEmpty = (id) => {
        dispatch(deleteProducts(id));
        Swal.fire({
            icon: 'error',
            title: 'Eliminado!'
        }).then((e) => {
            window.location.reload()
        })
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Link to={'/create'}>
                    <button type="button" class="btn btn-success">
                        Nuevo producto
                    </button>
                </Link>
                <Link to={'/historial'}>
                    <button type="button" class="btn btn-warning">
                        Historial de compras
                    </button>
                </Link>
            </div>

            {products.map((e) => (
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="main-box clearfix">
                                <div class="table-responsive">
                                    <table class="table user-list">
                                        <thead>
                                            <tr class="text-center">
                                                <th scope="col" width="20%" class="text-center"><span>Producto</span></th>
                                                <th scope="col" width="20%" class="text-center"><span>Description</span></th>
                                                <th scope="col" width="12%" class="text-center"><span>Status</span></th>
                                                <th scope="col" width="12%" class="text-center"><span>Precio</span></th>
                                                <th scope="col" width="10%" class="text-center"><span>Valoración</span></th>
                                                <th scope="col" width="16%" class="text-center"><span>Categoria</span></th>
                                                <th scope="col" width="20%" class="text-center"><span>Acciones</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src={e.image} alt="" />
                                                    <a href="#!" class="user-link">{e.name}</a>
                                                </td>
                                                <td>
                                                    {e.description}
                                                </td>
                                                <td class="text-center">
                                                    {e.state === 'Disponible' ? (
                                                        <button type="button" class="btn btn-success">Disponible</button>
                                                    ) : <button type="button" class="btn btn-dark">No disponible</button>}
                                                </td>
                                                <td class="text-center">
                                                    <span class="label label-default">${e.price}</span>
                                                </td>
                                                <td style={{}}>
                                                    {e.rating}
                                                </td>
                                                <td style={{}}>
                                                    {e.category}
                                                </td>
                                                <td>
                                                    <button type="button" onClick={() => trashEmpty(e.id)} class="btn btn-danger">Borrar</button>
                                                    <button type="button" class="btn btn-secondary"> Editar </button>
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