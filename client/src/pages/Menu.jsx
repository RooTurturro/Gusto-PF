import React from 'react'
import Card from '../Components/Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions'
import { useEffect } from 'react'

const Menu = () => {

  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  console.log(allProducts)

  return (
    <div>

      {
        allProducts.length > 0 ?
          allProducts.map((el) => {
            return (
              <Card
                key={el.id}
                name={el.name}
                description={el.description}
                price={el.price}
              />
            )

          }) : <div>nada</div>}

    </div>
  )

}

export default Menu