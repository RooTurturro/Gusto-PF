import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams , useNavigate , Link } from 'react-router-dom';
import { getProductsDetail , editForm} from '../../redux/actions';
import "./Form.css";
import styles from './FormCreate.module.css'

const EditForm = () => {

  const { id } = useParams();
  const product = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
  
  const [stateForm, setState] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    image: product.img,
    state: product.state,
    category: product.category
	});
  
  useEffect(() => {
    dispatch(getProductsDetail(id));
  }, [dispatch, id]);
  console.log(product);

  const handlerChange = (event) => {
		const value = event.target.value;
		const property = event.target.name;
		setState({ ...stateForm, [property]: value });
	};

  const handlerSubmit = async (event) => {
		event.preventDefault();
		dispatch(await editForm( product , id));
		setState({
			name: "",
			price: "",
			description: "",
			image: "",
			state: "",
			category: ""
		});
		Swal.fire(`El producto ${stateForm.name} se edito exitosamente!`);
		navigate("/productlist");
  };

	const [errors, /*setErrors*/] = useState({
		name: "",
	});

  console.log(stateForm)
  return (
    <div class="form-body">
			<div class="row">
				<div class="form-holder">
					<div class="form-content">
						<div class="form-items">
							<h2>Editar producto</h2>
							<form class="requires-validation" onSubmit={handlerSubmit}>
								<div class="col-md-12">
									<input
										class="form-control"
										type="text"
										name="name"
										onChange={handlerChange}
										placeholder={product.name}
										value={stateForm.name}
										required
									/>
									{errors.name && <p className={styles.error}>{errors.name}</p>}
								</div>
								<div class="col-md-12">
									<input
										class="form-control"
										type="text"
										name="description"
										onChange={handlerChange}
                    placeholder={product.description}
										value={stateForm.description}
										required
									/>
									{errors.description && <p className={styles.error}>{errors.description}</p>}
								</div>
								
								<div class="col-md-12">
									<input
										class="form-control"
										type="text"
										name="price"
										onChange={handlerChange}
                    placeholder={product.price}
										value={stateForm.price}
										required
									/>
									{errors.description && <p className={styles.error}>{errors.description}</p>}

								</div>
								<div class="col-md-12">
									<input
										class="form-control"
										type="text"
										name="image"
										onChange={handlerChange}
                    placeholder={product.image}
										value={stateForm.image}
										required
									/>
									{errors.description && <p className={styles.error}>{errors.description}</p>}
								</div>
								<div class="col-md-12 mt-1">
									<label>Estado del producto: </label>
									<br />
									<label onChange={handlerChange} class="btn btn-sm btn-outline-secondary">
										<input class="btn-check" type="radio" name="state" value='true' autocomplete="off" /> Agotado
									</label>
									<label onChange={handlerChange} class="btn btn-sm btn-outline-secondary">
										<input class="btn-check" type="radio" name="state" value='false' autocomplete="off" /> Disponible
									</label>
								</div>
								<div class="btn-group-toggle" data-toggle="buttons">

									<label>Categoria: </label>
									<br />
									<label onChange={handlerChange} class="btn btn-secondary">
										<input class="btn-check" type="radio" name="category" value='Bebida' autocomplete="off" /> Bebida
									</label>
									<label onChange={handlerChange} class="btn btn-secondary">
										<input class="btn-check" type="radio" name="category" value='Hamburguesa' autocomplete="off" /> Hamburguesa
									</label>
									<label onChange={handlerChange} class="btn btn-secondary">
										<input class="btn-check" type="radio" name="category" value='Wrap' autocomplete="off" /> Wrap
									</label>
									<label onChange={handlerChange} class="btn btn-secondary">
										<input class="btn-check" type="radio" name="category" value='Ensalada' autocomplete="off" /> Ensalada
									</label>
									<br />
									<label onChange={handlerChange} class="btn btn-secondary">
										<input class="btn-check" type="radio" name="category" value='Postre' autocomplete="off" /> Postre
									</label>
									<label onChange={handlerChange} class="btn btn-secondary">
										<input class="btn-check" type="radio" name="category" value='Snack' autocomplete="off" /> Snack
									</label>
									<label onChange={handlerChange} class="btn btn-secondary">
										<input class="btn-check" type="radio" name="category" value='Papas' autocomplete="off" /> Papas
									</label>

								</div>
								<div
									class="form-button mt-3"
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<button
										class="btn btn-primary"
										disabled={
											!stateForm.name ||
											!stateForm.description ||
											!stateForm.price ||
											!stateForm.image ||
											!stateForm.state ||
											!stateForm.category
										}
										type="submit">
										Editar producto
									</button>
									<Link to={"/productlist"}>
										<button class="btn btn-danger">Cancelar</button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
  
export default EditForm