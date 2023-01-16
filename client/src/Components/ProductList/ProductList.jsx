import React, { useEffect, useState } from 'react'
import { deleteProducts, getAllProducts, priceOrder, filterProductsByCategories, aplhabeticalOrder, updateState } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import './ProductList.css'
import { Link } from 'react-router-dom'


const ProductList = () => {
    const [/*order*/, setOrder] = useState('')
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

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
    function handleClick(e) {
        e.preventDefault(e);
        dispatch(getAllProducts());
    }


    function soldOut(id) {
        dispatch(updateState(id, { state: false }));
        dispatch(getAllProducts())
        Swal.fire({
            title: 'Producto fuera de stock'
        }).then(() => {
            window.location.reload()
        })
    }

    function available(id) {
        dispatch(updateState(id, { state: true }));
        dispatch(getAllProducts())
        Swal.fire({
            title: 'Producto disponible!'
        }).then(() => {
            window.location.reload()
        })
    }


    function handleOrderByName(e) {
        e.preventDefault(e);
        dispatch(aplhabeticalOrder(e.target.value));
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handlePriceOrder(e) {
        e.preventDefault(e);
        dispatch(priceOrder(e.target.value));
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleFilterProductsByCategories(e) {
        e.preventDefault(e);
        dispatch(filterProductsByCategories(e.target.value));
        setOrder(`Ordenado ${e.target.value}`)
    }


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Link to={'/create'}>
                    <button type="button" class="btn btn-primary">
                        Nuevo producto
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                    </button>
                </Link>
                <div style={{ color: 'black' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <select class="form-select" onChange={e => handleOrderByName(e)}>
                            <option disabled selected value="default">Alfabetico</option>
                            <option value='A-Z'>A-Z</option>
                            <option value='Z-A'>Z-A</option>
                        </select>
                        <select class="form-select" aria-label="Default select example" onChange={(e) => handlePriceOrder(e)}>
                            <option disabled selected value="default">Precio</option>
                            <option value='asc'>Menor</option>
                            <option value='desc'>Mayor</option>
                        </select>
                        <select class="form-select" aria-label="Default select example" onChange={e => handleFilterProductsByCategories(e)}>
                            <option disabled selected value='All'>Categoria</option>
                            <option value='Hamburguesa'>Hamburguesa</option>
                            <option value='Wrap'>Wrap</option>
                            <option value='Postre'>Postre</option>
                            <option value='Bebida'>Bebida</option>
                            <option value='Papas'>Papas</option>
                            <option value='Snack'>Snack</option>
                            <option value='Ensalada'>Ensalada</option>
                        </select>
                        <button type="button" class="btn btn-dark" onClick={(e) => { handleClick(e) }}>Resetear</button>
                    </div>
                </div>
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
                                                <th scope="col" width="12%" class="text-center"><span>Stock</span></th>
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
                                                    <p href="#!" class="user-link">{e.name}</p>
                                                    {/* <p href="#!" class="user-link">{e.id}</p> */}
                                                </td>
                                                <td>
                                                    {e.description}
                                                </td>
                                                <td class="text-center">
                                                    {e.state ?
                                                        e.state && (
                                                            <button type="button" style={{ fontSize: '12px', gap: '1rem', width: '70px', marginBottom: '10px' }} onClick={() => soldOut(e.id)} class="btn btn-success">Disponible</button>
                                                        ) : <button type="button" style={{ fontSize: '12px', gap: '1rem', width: '70px' }} onClick={() => available(e.id)} class="btn btn-danger">Agotado</button>}
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
                                                    <Link to={`/products/${e.id}`}>
                                                        <button type="button" style={{ marginBottom: '10px', fontSize: '12px', width: '70px' }} class="btn btn-info"  >Detalle </button>
                                                    </Link>
                                                    <button type="button" style={{ fontSize: '12px', width: '70px' }} onClick={() => trashEmpty(e.id)} class="btn btn-danger">Borrar</button>
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