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
		if (!state.description) errors.description = 'Ingrese una descripcion'
		if (!state.category) errors.category = 'Selecciona una categoria'
		if (!state.image) errors.image = 'Selecciona una categoria'
		if (!state.price) errors.price = 'Fija un precio'

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
		<div className="form-body">
			<div className="row">
				<div className="form-holder">
					<div className="form-content">
						<div className="form-items">
							<h2>Creando producto</h2>
							<form className="requires-validation" onSubmit={handlerSubmit}>
								<div className="col-md-12">
									<input
										className="form-control"
										type="text"
										name="name"
										onChange={handlerChange}
										placeholder={"Nombre del producto"}
										value={state.name}
										required
									/>
									{errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
								</div>
								<div className="col-md-12">
									<input
										className="form-control"
										type="text"
										name="description"
										onChange={handlerChange}
										placeholder={"Descripción del producto"}
										value={state.description}
										required
									/>
									{errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
								</div>

								<div className="col-md-12">
									<input
										className="form-control"
										type="text"
										name="price"
										onChange={handlerChange}
										placeholder={"$"}
										value={state.price}
										required
									/>
									{errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}
								</div>
								<div className="col-md-12">
									<input
										className="form-control"
										type="text"
										name="image"
										onChange={handlerChange}
										placeholder={"Link de la imagen"}
										value={state.image}
										required
									/>
									{errors.description && <p style={{ color: 'red' }}>{errors.image}</p>}
								</div>
								<div className="col-md-12 mt-3 mb-2 checkbox-container">
									<div style={{ display: 'flex', gap: '0.3rem' }}>
										<label>Estado del producto: </label>
										<br />
										<label onChange={handlerChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="state" value={true} autocomplete="off" /> Disponible
										</label>
										<label onChange={handlerChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="state" value={false} autocomplete="off" /> Agotado
										</label>
									</div>
								</div>
								<div style={{ display: 'flex', gap: '1rem' }} className="btn-group-toggle" data-toggle="buttons">
									<div style={{ display: 'flex', gap: '0.3rem' }}>
										<label>Categorias: </label>
										<br />
										<label onChange={handlerChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Bebida' autoComplete="off" /> Bebida
										</label>
										<label onChange={handlerChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Hamburguesa' autoComplete="off" /> Hamburguesa
										</label>
										<br />
										<label onChange={handlerChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Postre' autoComplete="off" /> Postre
										</label>
										<label onChange={handlerChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Combos' autoComplete="off" /> Combos
										</label>
										<label onChange={handlerChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Batidos' autoComplete="off" /> Batidos
										</label>
									</div>
								</div>
								<div
									className="form-button mt-3"
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<button
										className="btn btn-light"
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
										<button className="btn btn-dark">Cancelar</button>
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
