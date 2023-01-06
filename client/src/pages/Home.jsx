import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions'
import Card from '../Components/Card/Card'

const Home = () => {
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
                image={el.image}
              />
            )

          }) : <div>nada</div>}

    </div>
  )
}

export default Home