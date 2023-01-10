import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import styles from './Form.module.css'
import { Link } from "react-router-dom";

const CreateProduct = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const products = useSelector((state) => state.products);
	const productNames = products?.map((product) => product.name);

	useEffect(() => {
		dispatch(actions.getAllProducts());
	}, [dispatch]);

	const [state, setState] = useState({
		name: "",
		price: "",
		description: "",
		image: "",

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
			image: "",
		});
		alert(`El producto ${state.name} se creo exitosamente!`);
		navigate('/adminprovisorio')
	};

	return (
		<div>
			<h2>Creando producto</h2>
			<form className={styles.form} onSubmit={handlerSubmit}>
				<div>
					<label className={styles.label}>Nombre:</label>
					<input
						className={styles.input}
						type="text"
						name="name"
						onChange={handlerChange}
						placeholder={"Nombre del producto"}
						value={state.name}
						required
					/>
					{errors.name && <p className={styles.error}>{errors.name}</p>}
				</div>
				<div>
					<label className={styles.label}>Descripcion:</label>
					<input
						className={styles.input}
						type="text"
						name="description"
						onChange={handlerChange}
						placeholder={"Descripción del producto"}
						value={state.description}
						required
					/>
					{errors.description && <p className={styles.error}>{errors.description}</p>}
				</div>
				<div>
					<label className={styles.label}>Precio:</label>
					<input
						className={styles.input}
						type="text"
						name="price"
						onChange={handlerChange}
						placeholder={"$"}
						value={state.price}
						required
					/>
					{errors.price && <p className={styles.error}>{errors.price}</p>}
				</div>
				<div>
					<label className={styles.label}>Imagen</label>
					<input
						className={styles.input}
						type='text'
						name='image'
						onChange={handlerChange}
						placeholder={'Link de la imagen'}
						value={state.image}
						required
					/>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<button
						disabled={!state.name || !state.description || !state.price  || !state.image}
						type="submit"
					>
						Crear producto
					</button>
					<Link to={'/adminprovisorio'}>

						<button>Cancelar</button>
					</Link>
				</div>
				{(!state.name || !state.description || !state.price) && (
					<p>Boton desactivado, uno o mas campos vacios.</p>
				)}
			</form>
		</div>
	);
};

export default CreateProduct;