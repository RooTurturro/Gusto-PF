import React, { useEffect, useState } from 'react'
import { deleteProducts, getAllProducts, priceOrder, filterProductsByCategories, aplhabeticalOrder, updateState } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import './ProductList.css'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'


const ProductList = () => {
    const [/*order*/, setOrder] = useState('')
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const Swal = require('sweetalert2')

    const trashEmpty = (id) => {
        Swal.fire({
            title: '¿Estás seguro de eliminar el producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar'
        }).then((result) => {
            if (result.value) {
                // aquí se puede llamar la acción de borrado del producto
                dispatch(deleteProducts(id))
                Swal.fire({
                    title: 'Producto eliminado',
                    icon: 'warning'
                  }).then(() => {
                    window.location.reload()
                  })
                }
              })
            }
    
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
        <div style={{ display: 'flex', gap: '10rem' }}>
            <div >
                <Sidebar />
            </div>
            <div >
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                    <Link to={'/create'}>
                        <button type="button" className="btn btn-primary">
                            Nuevo producto
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>
                        </button>
                    </Link>
                    <div style={{ color: 'black' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <select className="form-select" onChange={e => handleOrderByName(e)}>
                                <option disabled selected value="default">Alfabetico</option>
                                <option value='A-Z'>A-Z</option>
                                <option value='Z-A'>Z-A</option>
                            </select>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handlePriceOrder(e)}>
                                <option disabled selected value="default">Precio</option>
                                <option value='asc'>Menor</option>
                                <option value='desc'>Mayor</option>
                            </select>
                            <select className="form-select" aria-label="Default select example" onChange={e => handleFilterProductsByCategories(e)}>
                                <option disabled selected value='All'>Categoria</option>
                                <option value='Hamburguesa'>Hamburguesa</option>
                                <option value='Combos'>Combos</option>
                                <option value='Postre'>Postre</option>
                                <option value='Bebida'>Bebida</option>
                                <option value='Batidos'>Batidos</option>
                            </select>
                            <button type="button" className="btn btn-dark" onClick={(e) => { handleClick(e) }}>Resetear</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-box clearfix">
                                <div className="table-responsive">
                                    <table className="table user-list" >
                                        <thead>
                                            <tr className="text-center">
                                                <th scope="col" width="20%" className="text-center"><span>Producto</span></th>
                                                <th scope="col" width="20%" className="text-center"><span>Description</span></th>
                                                <th scope="col" width="15%" className="text-center"><span>Stock</span></th>
                                                <th scope="col" width="12%" className="text-center"><span>Precio</span></th>
                                                <th scope="col" width="10%" className="text-center"><span>Valoración</span></th>
                                                <th scope="col" width="16%" className="text-center"><span>Categoria</span></th>
                                                <th scope="col" width="20%" className="text-center"><span>Acciones</span></th>
                                            </tr>
                                        </thead>
                                        {products.map((e) => (
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src={e.image} alt="" />
                                                        <p href="#!" className="user-link">{e.name}</p>
                                                        {/* <p href="#!" className="user-link">{e.id}</p> */}
                                                    </td>
                                                    <td>
                                                        {e.description}
                                                    </td>
                                                    <td className="text-center">
                                                        {e.state ?
                                                            e.state && (
                                                                <button type="button" style={{ fontSize: '12px', gap: '1rem', width: '85px', marginBottom: '10px' }} onClick={() => soldOut(e.id)} className="btn btn-success">Disponible</button>
                                                            ) : <button type="button" style={{ fontSize: '12px', gap: '1rem', width: '85px' }} onClick={() => available(e.id)} className="btn btn-danger">Agotado</button>}
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="label label-default">${e.price}</span>
                                                    </td>
                                                    <td style={{}}>
                                                        {e.rating}
                                                    </td>
                                                    <td style={{}}>
                                                        {e.category}
                                                    </td>
                                                    <td>
                                                        <Link to={`/products/${e.id}`}>
                                                            <button type="button" style={{ marginBottom: '10px', fontSize: '12px', width: '70px' }} className="btn btn-info"  >Detalle </button>
                                                        </Link>
                                                        <button type="button" style={{ fontSize: '12px', width: '70px' }} onClick={() => trashEmpty(e.id)} className="btn btn-danger">Borrar</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductList