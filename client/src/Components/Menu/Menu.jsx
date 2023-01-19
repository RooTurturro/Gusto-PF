import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, priceOrder, filterProductsByCategories, aplhabeticalOrder } from "../../redux/actions";
import { addToCart } from "../../redux/shoppingActions";
import './Menu.css'
import ListGroup from 'react-bootstrap/ListGroup';
import burger from '../../assets/nav.png'
import agua from '../../assets/agua.png'
import wrap from '../../assets/wrap.png'
import postre from '../../assets/postre.png'
import snack from '../../assets/snack.png'
import papas from '../../assets/papas.png'
import ensalada from '../../assets/ensalada.png'
import Spinner from 'react-bootstrap/Spinner';




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

  }


  return (
    <div className='menu-body'>
      <div className="navContainer">
        <ListGroup className='listGroup' onClick={e => handleFilterProductsByCategories(e)}>
          <ListGroup.Item className="listGroupItemHead">
            <option value='All'>Todos los productos</option>
          </ListGroup.Item >
          <ListGroup.Item className="listGroupItem">
            <img src={burger} alt='not found' />
            <option value='Hamburguesa'>Hamburguesas</option>
          </ListGroup.Item >
          <ListGroup.Item className="listGroupItem">
            <img src={agua} alt='not found' />
            <option value='Bebida'>Bebidas</option>
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem">
            <img src={wrap} alt='not found' />
            <option value='Wrap'>Wraps</option>
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem">
            <img src={postre} alt='not found' />
            <option value='Postre'>Postres</option>
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem">
            <img src={snack} alt='not found' />
            <option value='Snack'>Snacks</option>
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem">
            <img src={papas} alt='not found' />
            <option value='Papas'>Papas</option>
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem">
            <img src={ensalada} alt='not found' />
            <option value='Ensalada'>Ensaladas</option>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className='cardContainer'>
        {products.length > 0 ?
          products.map((e) => {
            if (e.state) {
              return (
                <Card
                  addToCart={() => dispatch(addToCart(e.id))}
                  id={e.id}
                  key={e.id}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                  category={e.category}
                />
              )
            }
          }) : <Spinner animation="border" variant="danger" />
        }
      </div>

    </div >

  )

}

export default Menu;
