import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { deleteProducts, getAllProducts } from '../../redux/actions';

const ProductListCard = ({
    id,
    state,
    name,
    price,
    description,
    image,
    setDataToEdit,
    category
}) => {
    const dispatch = useDispatch();
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

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])


    return (
        <div>
            <table class="table user-list">
                <thead>
                    <tr>
                        <th scope="col" width="20%"><span>Producto</span></th>
                        <th scope="col" width="20%"><span>Descripcion</span></th>
                        <th scope="col" width="20%" class="text-center"><span>Status</span></th>
                        <th scope="col" width="10%"><span>Precio</span></th>
                        <th scope="col" width="10%"><span>Categoria</span></th>
                        <th scope="col" width="14%"><span>Acciones</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={image} alt="" />
                            <a href="#!" class="user-link">{name}</a>
                        </td>
                        <td>
                            {description}
                        </td>
                        <td class="text-center">
                            {state === 'Disponible' ? (
                                <button type="button" class="btn btn-success">Disponible</button>
                            ) : <button type="button" class="btn btn-dark">No disponible</button>}
                        </td>
                        <td class="text-center">
                            <span class="label label-default">${price}</span>
                        </td>
                        <td style={{}}>
                            {category}
                        </td>
                        <td>
                            <button type="button" onClick={() => trashEmpty(id)} class="btn btn-danger">Borrar</button>
                            <button type="button" class="btn btn-secondary">Editar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductListCard