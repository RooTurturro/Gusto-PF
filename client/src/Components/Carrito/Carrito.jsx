import React from 'react'
import './Carrito.css'
import burger from '../../assets/burger.png'

const Carrito = () => {
    return (
        <section class="h-100 gradient-custom">
            <div class="container py-5">
                <div class="row d-flex justify-content-center my-4">
                    <div class="col-md-8">
                        <div class="card mb-4">
                            <div class="card-header py-3">
                                <h5 class="mb-0">Cart - 2 items</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                        <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                            <img src={burger}
                                                class="w-100" alt="Blue Jeans Jacket" />
                                            <a href="#!">
                                                <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                        <p><strong>Hamburguesa de cheddar</strong></p>
                                        <p>Aca va la descripción</p>
                                        <button type="button" class="btn btn-danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                        <div class="d-flex mb-4" style={{ maxWidth: '300px' }}>
                                            <button type="button" class="btn btn-primary px-1 ms-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </button>

                                            <div class="form-outline">
                                                <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                                                <label class="form-label" for="form1">Cantidad</label>
                                            </div>
                                            <button class="btn btn-primary px-1 ms-2"
                                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                <i class="fas fa-plus">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                                    </svg>
                                                </i>
                                            </button>
                                        </div>
                                        <p class="text-start text-md-center">
                                            <strong>PRECIO ACA</strong>
                                        </p>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <div class="row">
                                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                        <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                            <img src={burger}
                                                class="w-100" alt="Blue Jeans Jacket" />
                                            <a href="#!">
                                                <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                        <p><strong>Hamburguesa de cheddar</strong></p>
                                        <p>Aca va la descripción</p>
                                        <button type="button" class="btn btn-danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                        <div class="d-flex mb-4" style={{ maxWidth: '300px' }}>
                                            <button type="button" class="btn btn-primary px-1 ms-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </button>

                                            <div class="form-outline">
                                                <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                                                <label class="form-label" for="form1">Cantidad</label>
                                            </div>
                                            <button class="btn btn-primary px-1 ms-2"
                                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                <i class="fas fa-plus">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                                    </svg>
                                                </i>
                                            </button>
                                        </div>
                                        <p class="text-start text-md-center">
                                            <strong>PRECIO ACA</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="card mb-4">
                            <div class="card-body">
                                <p><strong>Hora estimada</strong></p>
                                <p class="mb-0">12.10.2020 - 14.10.2020</p>
                            </div>
                        </div> */}
                        <div class="card mb-4 mb-lg-0">
                            <div class="card-body">
                                <p><strong>Aceptamos</strong></p>
                                <img class="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                    alt="Visa" />
                                <img class="me-2" width="45px"
                                    src="https://media.a24.com/p/7b842807df15922c598c8bf51f148210/adjuntos/296/imagenes/007/959/0007959650/1200x675/smart/como-funciona-mercado-pago-conoce-sus-ventajas.jpeg"
                                    alt="American Express" />
                                <img class="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                    alt="Mastercard" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-header py-3">
                                <h5 class="mb-0">Datos de la compra</h5>
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Productos
                                        <span>$53.98</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Envio
                                        <span>Gratis</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Monto total</strong>
                                        </div>
                                        <span><strong>$53.98</strong></span>
                                    </li>
                                </ul>

                                <button type="button" class="btn btn-primary btn-lg btn-block">
                                    Ir al checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carrito