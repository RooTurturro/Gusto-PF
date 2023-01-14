import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, priceOrder, filterProductsByCategories, aplhabeticalOrder } from "../../redux/actions";
import { addToCart } from "../../redux/shoppingActions";
import './Menu.css'


const Menu = () => {
  const [/*order*/, setOrder] = useState('')
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, products.length]);

  
  function handleClick(e) {
    e.preventDefault(e);
    dispatch(getAllProducts());
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
    <div class='menu-body'>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems:'center' }}>
        <button class="boton_refresh" onClick={(e) => { handleClick(e) }} >Limpiar Filtros</button>
        <div>
          <select class="boton" onChange={e => handleOrderByName(e)}>
            <option disabled selected value="default">Alfabetico</option>
            <option value='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
          </select>
        </div>
        <div>
          <select class="boton" onChange={(e) => handlePriceOrder(e)}>
            <option disabled selected value="default">Precio</option>
            <option value='asc'>Menor</option>
            <option value='desc'>Mayor</option>
          </select>
        </div>
        <div>
          <select class="boton" onChange={e => handleFilterProductsByCategories(e)}>
            <option disabled selected value='All'>Categorias</option>
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
      <div>
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
                  rating={el.rating}
                />
              )
            }) : <div>nada</div>
        }
      </div>
    </div >
  )

}

export default Menu;
