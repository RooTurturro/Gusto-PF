import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, priceOrder, filterProductsByCategories, aplhabeticalOrder } from '../../redux/actions';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import './filters.css'
import { addToCart } from "../../redux/shoppingActions";
import { Link } from "react-router-dom";

export default function Filter() {

  const allProducts = useSelector((state => state.products))
  const dispatch = useDispatch()

  const [order, setOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1);

  const [productsPerPage, setproductsPerPage] = useState(12);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllProducts());
    setCurrentPage(1);
  }


  function handleOrderByName(e) {
    e.preventDefault();
    dispatch(aplhabeticalOrder(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);

  }


  function handlePriceOrder(e) {
    e.preventDefault();
    dispatch(priceOrder(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);

  }

  function handleFilterProductsByCategories(e) {
    e.preventDefault(e);
    dispatch(filterProductsByCategories(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);

  }

  return (
    <div>
      <div>
        <button className="boton_refresh" onClick={e => { handleClick(e) }} >Limpiar Filtros</button>
        <div>
          <Link to={'/productlist'}>
            <button type="button" class="btn btn-warning">Lista de compras</button>
          </Link>
        </div>
        <div>
          <Link to={'/create'}>
            <button className="boton" type="button" class="btn btn-success">
            </button>
          </Link>
        </div>
        Nuevo producto
        <div>
          <label>Ordenamiento</label>
          <select
            className="boton"
            name='orden'
            onChange={(e) => handleOrderByName(e)}

          >
            <option disabled selected value="default">
              Orden
            </option>
            <option value='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
          </select>
        </div>
        <div>
          <label>Precio</label>
          <select
            className="boton"
            name='precio'
            onChange={e => handlePriceOrder(e)}

          >
            <option disabled selected value="default">
              Precio
            </option>
            <option value='asc'>Menor</option>
            <option value='desc'>Mayor</option>
          </select>
        </div>
        <div>
          <label>Categorias</label>
          <select className="boton" onChange={(e) => handleFilterProductsByCategories(e)}>
            <option value='All'>Todos</option>
            <option value='Hamburguesa'>Hamburguesa</option>
            <option value='Wrap'>Wrap</option>
            <option value='Postre'>Postre</option>
            <option value='Bebida'>Bebida</option>
            <option value='Papas'>Papas</option>
            <option value='Snack'>Snack</option>
            <option value='Ensalada'>Ensalada</option>
          </select>
        </div>
      </div>
    </div>
  )
}




