import React, { useState } from 'react'
import { postProduct } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './CreateProduct.module.css'

function validate(input) {
  const errors = {}
  if (!input.name) {
    errors.name = 'enter name'
  }
  if (!input.description) {
    errors.description = 'enter description'
  }
  if (!input.price) {
    errors.price = 'enter price'
  }
  if (!input.state) {
    errors.state = 'enter state'
  }
  if (!input.image) {
    errors.image = 'enter image'
  }
  return errors
}

const CreateProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: '',
    description: '',
    price: '',
    state: '',
    image: ''
  })




  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.name
    }))
  }
  function handleSubmit(e) {
    e.preventDefault(e)
    dispatch(postProduct(input))
    alert('producto creado')
    setInput({
      name: '',
      description: '',
      price: '',
      state: '',
      image: ''
    })
    navigate('/home')

  }

  return (
    <div className={styles.formContainer}>
      <h2>AGREGAR PRODUCTO</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label}>Nombre del producto:</label>
          <input
            className={styles.input}
            type='text'
            name='name'
            value={input.name}
            placeholder='Nombre del producto'
            onChange={handleChange}
          />
          {
            errors.name &&
            <p className={styles.error}>{errors.name}</p>
          }
        </div>
        <div>
          <label className={styles.label}>Descripcion del producto:</label>
          <input
            className={styles.input}
            type='text'
            name='description'
            placeholder='Descripcion del producto'
            onChange={handleChange}
            value={input.description}

          />
          {
            errors.description &&
            <p className={styles.error}>{errors.description}</p>
          }
        </div>
        <div>
          <label className={styles.label}>Precio del producto:</label>
          <input
            className={styles.input}
            type='text'
            name='price'
            placeholder='Precio del producto'
            onChange={handleChange}
            value={input.price}

          />
          {
            errors.price &&
            <p className={styles.error}>{errors.price}</p>
          }
        </div>
        <div>
          <label className={styles.label}>Estado del producto:</label>
          <input
            className={styles.input}
            type='text'
            name='state'
            placeholder='Estado del producto'
            onChange={handleChange}
            value={input.state}
          />
          {
            errors.state &&
            <p className={styles.error}>{errors.state}</p>
          }
        </div>
        <div>
          <label className={styles.label}>Imagen del producto:</label>
          <input
            className={styles.input}
            type='file'
            name='image'
            onChange={handleChange}
            value={input.image}
          />
          {
            errors.image &&
            <p className={styles.error}>{errors.image}</p>
          }
        </div>
        <input className={styles.sendButton} type='submit' value='Enviar' />
      </form>
    </div>
  )
}

export default CreateProduct

