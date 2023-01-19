import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, priceOrder, filterProductsByCategories, aplhabeticalOrder } from "../../redux/actions";
import { addToCart } from "../../redux/shoppingActions";
import './Menu.css'
import { Link, Element } from 'react-scroll'



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
    <div className='menu-body'>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <ul class="nav justify-content-center" style={{ maxWidth: '100%', padding: '0 12px 0 24px' }}>
          <li class="nav-item-category">
            <Link class="nav-link-category" to="hamburguesas" smooth={true} duration={200}  >
              <button type="button" class="btn btn-outline-danger">
                Hamburguesas
              </button>
            </Link>
          </li>
          <li class="nav-item-category">
            <Link class="nav-link-category " to="ensaladas" smooth={true} duration={200} >
              <button type="button" class="btn btn-outline-danger">
                Ensaladas
              </button>
            </Link>
          </li>
          <li class="nav-item-category">
            <Link class="nav-link-category " to="postres" smooth={true} duration={200}  >
              <button type="button" class="btn btn-outline-danger">
                Postres
              </button>
            </Link>
          </li>
          <li class="nav-item-category">
            <Link class="nav-link-category" to="papas" smooth={true} duration={200}  >
              <button type="button" class="btn btn-outline-danger">
                Papas
              </button>
            </Link>
          </li>
          <li class="nav-item-category">
            <Link class="nav-link-category " to="bebidas" smooth={true} duration={200}  >
              <button type="button" class="btn btn-outline-danger">
                Bebidas
              </button>
            </Link>
          </li>
          <li class="nav-item-category">
            <Link class="nav-link-category " to="snacks" smooth={true} duration={200} >
              <button type="button" class="btn btn-outline-danger">
                Snacks
              </button>
            </Link>
          </li>
          <li class="nav-item-category" >
            <Link class="nav-link-category " to="wrap" smooth={true} duration={200}  >
              <button type="button" class="btn btn-outline-danger">
                Wraps
              </button>
            </Link>
          </li>
        </ul>
        
        {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div >
            <select className="form-select" onChange={e => handleOrderByName(e)}>
              <option disabled selected defaultValue='default'>Alfabetico</option>
              <option value='A-Z'>A-Z</option>
              <option value='Z-A'>Z-A</option>
            </select>
          </div>
          <div>
            <select className="form-select" aria-label="Default select example" onChange={(e) => handlePriceOrder(e)}>
              <option disabled selected defaultValue='default'>Precio</option>
              <option value='asc'>Menor</option>
              <option value='desc'>Mayor</option>
            </select>
          </div>
          <button type="button" className="btn btn-dark" onClick={(e) => { handleClick(e) }}>Limpiar</button>
        </div> */}
        {/* <div>
          <select className="form-select" aria-label="Default select example" onChange={e => handleFilterProductsByCategories(e)}>
            <option disabled selected value='All'>Categoria</option>
            <option value='Hamburguesa'>Hamburguesa</option>
            <option value='Wrap'>Wrap</option>
            <option value='Postre'>Postre</option>
            <option value='Bebida'>Bebida</option>
            <option value='Papas'>Papas</option>
            <option value='Snack'>Snack</option>
            <option value='Ensalada'>Ensalada</option>
          </select>
        </div> */}

      </div>
      <Element id='hamburguesas'>
        <h3 style={{ marginLeft: '50px', marginTop: '50px' }}>Hamburguesas</h3>
      </Element>
      <div className='cardContainer'>
        {products.length > 0 ?
          products.map((el) => {
            if (el.state && el.category === 'Hamburguesa') {
              return (
                <Card
                  id={el.id}
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  category={el.category}
                />
              )
            }
          }) : <div>nada</div>
        }
      </div>
      <Element id='ensaladas' style={{ marginLeft: '30px' }}>
        <h3 style={{ marginLeft: '50px', marginTop: '50px' }}>Ensaladas</h3>
      </Element>
      <div className="cardContainer">
        {products.length > 0 ?
          products.map((el) => {
            if (el.category === 'Ensalada') {
              return (
                <Card
                  id={el.id}
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  category={el.category}
                />
              )
            }
          }) : null}
      </div>
      <Element id='postres' style={{ marginLeft: '30px' }}>
        <h3 style={{ marginLeft: '50px', marginTop: '50px' }}>Postres</h3>
      </Element>
      <div className="cardContainer">

        {products.length > 0 ?
          products.map((el) => {
            if (el.category === 'Postre') {
              return (
                <Card
                  id={el.id}
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  category={el.category}
                />
              )
            }
          }) : null}
      </div>
      <Element id='papas' style={{ marginLeft: '30px' }}>
        <h3 style={{ marginLeft: '50px', marginTop: '50px' }}>Papas</h3>
      </Element>
      <div className="cardContainer">

        {products.length > 0 ?
          products.map((el) => {
            if (el.category === 'Papas') {
              return (
                <Card
                  id={el.id}
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  category={el.category}
                />
              )
            }
          }) : null}
      </div>
      <Element id='snacks' style={{ marginLeft: '30px' }}>
        <h3 style={{ marginLeft: '50px', marginTop: '50px' }}>Snacks</h3>
      </Element>
      <div className="cardContainer">

        {products.length > 0 ?
          products.map((el) => {
            if (el.category === 'Snack') {
              return (
                <Card
                  id={el.id}
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  category={el.category}
                />
              )
            }
          }) : null}
      </div>
      <Element id='bebidas' style={{ marginLeft: '30px' }}>
        <h3 style={{ marginLeft: '50px', marginTop: '50px' }}>Bebidas</h3>
      </Element>
      <div className="cardContainer">

        {products.length > 0 ?
          products.map((el) => {
            if (el.category === 'Bebida') {
              return (
                <Card
                  id={el.id}
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  category={el.category}
                />
              )
            }
          }) : null}
      </div>
      <Element id='wrap' style={{ marginLeft: '30px' }}>
        <h3 style={{ marginLeft: '50px', marginTop: '50px' }}>Wrap</h3>
      </Element>
      <div className="cardContainer">

        {products.length > 0 ?
          products.map((el) => {
            if (el.category === 'Wrap') {
              return (
                <Card
                  id={el.id}
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  category={el.category}
                />
              )
            }
          }) : null}
      </div>
    </div >

  )

}

export default Menu;
