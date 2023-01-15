import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsDetail } from '../../redux/actions';

const EditForm = () => {

  const { id } = useParams();
  const product = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsDetail(id));
  }, [dispatch, id]);
  console.log(product);
  return (
    <div>{product.name}</div>
  )
}

export default EditForm