import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, filterProductsByCategories } from "../../redux/actions";
import { addToCart } from "../../redux/shoppingActions";
import './Menu.css'
import ListGroup from 'react-bootstrap/ListGroup';
import burger from '../../assets/burger.png'
import bebidas from '../../assets/bebidas.png'
import batidos from '../../assets/batidos.png'
import postres from '../../assets/postres.png'
import combos from '../../assets/combos.png'
import Spinner from 'react-bootstrap/Spinner';
import Nav from "../NavBar/Nav";




const Menu = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }

  }, [dispatch, products.length]);


  function handleFilterProductsByCategories(e) {
    e.preventDefault(e);
    dispatch(filterProductsByCategories(e.target.value));

  }


  return (
    <>
      <Nav />
      <div className='menu-body'>
        <div className="navContainer">
          <ul className='listGroup' onClick={e => handleFilterProductsByCategories(e)}>
            <div className="listGroupItem">
              <img className="categoryImage" src={burger} alt='not found' />
              <option value='Hamburguesa'>Hamburguesas</option>
            </div >
            <div className="listGroupItem">
              <img className="categoryImage" src={bebidas} style={{}} alt='not found' />
              <option value='Bebida'>Bebidas</option>
            </div>
            <div className="listGroupItem">
              <img className="categoryImage" src={batidos}  alt='not found' />
              <option value='Batidos'>Batidos</option>
            </div>
            <div className="listGroupItem">
              <img className="categoryImage" src={postres} style={{ width: '7rem' }} alt='not found' />
              <option value='Postre'>Postres</option>
            </div>

            <div className="listGroupItem">
              <img className="categoryImage" src={combos} alt='not found' />
              <option value='Combos'>Combos</option>
            </div>
          </ul>
        </div>
        <div className='cardContainer'>

          {products?.length > 0 ?
            products?.map((e) => {
              if (e.state) {
                return (
                  <Card
                    description={e.description}
                    id={e.id}
                    key={e.id}
                    name={e.name}
                    price={e.price}
                    image={e.image}
                    category={e.category}
                  />
                )
              }
            }) :
            <Spinner animation="border" variant="danger" />

          }

        </div>

      </div >
    </>

  )

}

export default Menu;
