import React from 'react'

const ProductForm2 = () => {
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Verificado</label>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  )
}

export default ProductForm2