import React from 'react';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { getAllProducts, priceOrder, filterProductsByCategories, aplhabeticalOrder } from '../../redux/actions';


export default function Filter() {
  const allProducts = useSelector((state => (state.products)))
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState();
  const [order, setOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1);

  const [productsPerPage, setproductsPerPage] = useState(12);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = allPokemons.slice(indexOfFirst, indexOfLast);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllProducts());

  }

  function handleAplhabeticalOrder() {
    e.preventDefault();
    dispatch(aplhabeticalSort(e.target.value));
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

  <div>
    <button onClick={e => { handleClick(e) }} >Refresh All Filters</button>
    <div>
      <div>
        <label>Ordenamiento</label>
        <select onChange={(e) => handleAplhabeticalOrder(e)}>
          <option value='default'>Alfabeticamente</option>
          <option value='a-z'>A-Z</option>
          <option value='z-a'>Z-A</option>
        </select>
      </div>
      <div>
        <label>Precio</label>
        <select onChange={e => handlePriceOrder(e)}>
          <option value='default'>Precio</option>
          <option value='asc'>Menor</option>
          <option value='desc'>Mayor</option>
        </select>
      </div>
      <div>
        <label>Categorias</label>
        <select onChange={e => handleFilterProductsByCategories(e)}>
          <option value='all'>Todas</option>
          {allProducts?.map((category) => ( 
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
      <Paginado productsPerPage={productsPerPage} allProducts={allProducts.length} paginado={paginado} />
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

  </div >

}
