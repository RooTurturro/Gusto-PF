import React from "react";
import Card from "../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions";
import { useEffect } from "react";
// import Loading from "../Components/Loading/Loading";

const Menu = ({ setDataToEdit }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, products.length]);
  return (
    <div>
      {
        products.length > 0 ?
          products.map((el) => {
            return (
              <Card
                id={el.id}
                key={el.id}
                name={el.name}
                description={el.description}
                price={el.price}
                image={el.image}
              />
            )

          }) : <div>nada</div>}
      
    </div>
  )

}

export default Menu;
