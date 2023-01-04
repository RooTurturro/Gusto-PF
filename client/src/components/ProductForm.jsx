import React from 'react'
import { useForm } from 'react-hook-form'

const ProductForm = () => {

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    //aca despues vamos a enviar los datos del formulario al servidor
    console.log(data)
  }

  return (
    <>

    <h2>AGREGAR PRODUCTO</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre del producto:</label>
        <input
          type='text' 
          name='productName'
          placeholder='Nombre del producto'
          {...register('productName', {
            required: {
              value: true,
              message: 'El campo es obligatorio'
            }
          })}/>
      </div>

      <div>
        <label>Descripcion del producto:</label>
        <input
          type='text' 
          name='productDescription'
          placeholder='Descripcion del producto'
          {...register('productDescription', {
            required: {
              value: true,
              message: 'El campo es obligatorio'
            }
          })}/>
      </div>

      <div>
        <label>Precio del producto:</label>
        <input
          type='text' 
          name='productPrice'
          placeholder='Precio del producto'
          {...register('productDescription', {
            required: {
              value: true,
              message: 'El campo es obligatorio'
            }
          })}/>
      </div>

      <div>
        <label>Imagen del producto:</label>
        <input
          type='file' 
          name='productImage'
          {...register('productImage', {
            required: {
              value: true,
              message: 'El campo es obligatorio'
            }
          })}/>
      </div>

      <input type='submit' value='Enviar'/>
      
    </form>
    
    </>
  )
}

export default ProductForm