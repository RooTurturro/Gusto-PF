import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, priceOrder, filterProductsByCategories, aplhabeticalOrder, getAllCategories } from '../../redux/actions';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { Link } from "react-router-dom";
import './filters.css'

export default function Filter() {

  const allProducts = useSelector((state => state.products))
  const allCategories = useSelector((state => state.categories));
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState();
  const [order, setOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1);

  const [productsPerPage, setproductsPerPage] = useState(12);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirst, indexOfLast);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllProducts());
    setRefresh("default");
    setCurrentPage(1);
  }


  function handleOrderByName(e) {
    e.preventDefault();
    dispatch(aplhabeticalOrder(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
    setRefresh();
  }


  function handlePriceOrder(e) {
    e.preventDefault();
    dispatch(priceOrder(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
    setRefresh();
  }



  function handleFilterProductsByCategories(e) {
    e.preventDefault();
    dispatch(filterProductsByCategories(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
    setRefresh();
  }

  return (

    <div>
      <div>
        <button className="boton_refresh" onClick={e => { handleClick(e) }} >Limpiar Filtros</button>
      <div>
        <label>Ordenamiento</label>
        <select
        className="boton"
        name='orden'
          onChange={(e) => handleOrderByName(e)}
          value={refresh}
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
          value={refresh}
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
        <select
        className="boton"
          onChange={e => handleFilterProductsByCategories(e)}
          value={refresh}

        >
          <option value='all'>Todos</option>
          {
            allCategories?.map(c => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
        </select>
      </div>
      <div>
          {
            currentProducts.length > 0 ?
            currentProducts.map((e) =>
                <Link to={`/home/${e.id}`}>
                  <Card id={e.id} name={e.name} image={e.image} description={e.description} price={e.price} key={e.id} />   
                  </Link>)
                  :
              <Loading />}

        </div>
    </div>
    </div>
  )
}




