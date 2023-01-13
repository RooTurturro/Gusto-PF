import React, { useState, useEffect } from "react";
import Card from "../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, priceOrder, filterProductsByCategories, aplhabeticalOrder } from "../redux/actions";
import { addToCart } from "../redux/shoppingActions";
import './Menu.css'
import { Link } from "react-router-dom";

// import Loading from "../Components/Loading/Loading";

const Menu = ({ setDataToEdit }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const allProducts = useSelector((state => state.products))

  const [order, setOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1);

  const [productsPerPage, setproductsPerPage] = useState(12);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirst, indexOfLast);

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

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, products.length]);

  const isAdminRoute = window.location.pathname === "/adminprovisorio";

  return (
    <div>
      <div>
        <div style={{ display: 'flex', justifyContent:'space-around'}}> 
          {isAdminRoute && (
            <div>
              <Link to={'/create'}>
                <button type="button" class="btn btn-success">
                  Nuevo producto
                </button>
              </Link>
              <Link to={'/productlist'}>
                <button type="button" class="btn btn-warning">Lista de compras</button>
              </Link>
            </div>
          )}
          <div style={{display:'flex', justifyContent:'center'}}>
            <button className="boton_refresh" onClick={e => { handleClick(e) }} >Limpiar Filtros</button>
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
      </div>
      <div>
      </div>
      {
        products.length > 0 ?
          products.map((el) => {
            return (
              <Card
                id={el.id}
                data={el}
                key={el.id}
                name={el.name}
                description={el.description}
                price={el.price}
                image={el.image}
                addToCart={() => dispatch(addToCart(el.id))}
                category={el.category}
              />
            )

          }) : <div>nada</div>}

    </div>
  )

}

export default Menu;
