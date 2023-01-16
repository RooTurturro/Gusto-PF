import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import styles from './FormCreate.module.css'
import { Link } from "react-router-dom";
import "./Form.css";

const CreateProduct = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const products = useSelector((state) => state.products);
	const productNames = products?.map((product) => product.name);
	const Swal = require("sweetalert2");

	useEffect(() => {
		dispatch(actions.getAllProducts());
	}, [dispatch]);

	const [state, setState] = useState({
		name: "",
		price: "",
		description: "",
		image: "",
		state: "",
		rating: "",
		category: "",
	});

	const [errors, setErrors] = useState({
		name: "",
	});

	/*FUNCIÓN VALIDADORA DEL INPUT DEL NOMBRE DE LA ACTIVIDAD************************/
	const validate = (state) => {
		let errors = {};
		let nameRepeated = productNames.filter((name) => name === state.name);

		if (!state.name) errors.name = "El nombre del producto es requerido";
		else if (nameRepeated.length)
			errors.name = `El producto ${state.name} ya existe`;
		return errors;
	};

	const handlerChange = (event) => {
		const value = event.target.value;
		const property = event.target.name;
		setState({ ...state, [property]: value });
		setErrors(validate({ ...state, [property]: value }));
	};

	const handlerSubmit = (event) => {
		event.preventDefault();
		dispatch(actions.createProduct(state));
		setState({
			name: "",
			price: "",
			description: "",
			image: "",
			state: "",
			rating: "",
			category: ""
		});
		Swal.fire(`El producto ${state.name} se creo exitosamente!`);
		navigate("/productlist");
	};

	return (
		<div class="form-body">
			<div class="row">
				<div class="form-holder">
					<div class="form-content">
						<div class="form-items">
							<h2>Creando producto</h2>
							<form class="requires-validation" onSubmit={handlerSubmit}>
								<div class="col-md-12">
									<input
										class="form-control"
										type="text"
										name="name"
										onChange={handlerChange}
										placeholder={"Nombre del producto"}
										value={state.name}
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
										placeholder={"Descripción del producto"}
										value={state.description}
										required
									/>
									{errors.description && <p className={styles.error}>{errors.description}</p>}
								</div>
								<div class="col-md-12 mt-3">
									<input
										class="form-control"
										type="number"
										name="rating"
										onChange={handlerChange}
										placeholder={"Rating"}
										value={state.rating}
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
										placeholder={"$"}
										value={state.price}
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
										placeholder={"Link de la imagen"}
										value={state.image}
										required
									/>
									{errors.description && <p className={styles.error}>{errors.description}</p>}
								</div>
								<div class="col-md-12 mt-1">
									<label>Estado del producto: </label>
									<br />
									<label onChange={handlerChange} class="btn btn-sm btn-outline-secondary">
										<input class="btn-check" type="radio" name="state" value='agotado' autocomplete="off" /> Agotado
									</label>
									<label onChange={handlerChange} class="btn btn-sm btn-outline-secondary">
										<input class="btn-check" type="radio" name="state" value='disponible' autocomplete="off" /> Disponible
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
											!state.name ||
											!state.description ||
											!state.price ||
											!state.image ||
											!state.state ||
											!state.category
										}
										type="submit">
										Crear producto
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

export default CreateProduct;
