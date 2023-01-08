import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";

const CreateProduct = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	const productNames = products?.map((product) => product.name);

	useEffect(() => {
		dispatch(actions.getAllProducts());
	}, [dispatch]);

	const [state, setState] = useState({
		name: "",
		price: "",
		description: "",
		//chequear el image
		// image: "",
		productList: [],
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
		dispatch(actions.createProducts(state));
		setState({
			name: "",
			price: "",
			description: "",
			//chequear el image
			// image: "",
		});
		alert(`El producto ${state.name} se creo exitosamente!`);
		window.location.reload();
	};

	return (
		<div>
			<h2>FORM DE PRODUCTOS</h2>
			<form onSubmit={handlerSubmit}>
				<div>
					<label>Nombre:</label>
					<input
						type="text"
						name="name"
						onChange={handlerChange}
						placeholder={"Nombre del producto"}
						value={state.name}
						required
					/>
					{errors.name && <p>{errors.name}</p>}
					<label>Descripcion:</label>
					<input
						type="text"
						name="description"
						onChange={handlerChange}
						placeholder={"Descripción del producto"}
						value={state.description}
						required
					/>
					{errors.description && <p>{errors.description}</p>}
					<label>Precio:</label>
					<input
						type="text"
						name="price"
						onChange={handlerChange}
						placeholder={"$"}
						value={state.price}
						required
					/>
					{errors.price && <p>{errors.price}</p>}
					{/* //hacer para image //hacer */}
					{/* {state.products.map((p) => (
						<div key={p}>
							{p}
							<button value={p} onClick={handlerDelete}>
								X
							</button>
						</div>
					))} */}
					<button
						disabled={!state.name || !state.description || !state.price}
						type="submit"
					>
						Crear producto
					</button>
					{(!state.name || !state.description || !state.price) && (
						<p>Boton desactivado, uno o mas campos vacios.</p>
					)}
				</div>
			</form>
		</div>
	);
};

export default CreateProduct;
