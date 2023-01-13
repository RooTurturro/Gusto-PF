import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import './Form.css'

const CreateProduct = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate()
	const products = useSelector((state) => state.products);
	const productNames = products?.map((product) => product.name);
	const Swal = require('sweetalert2')

	useEffect(() => {
		dispatch(actions.getAllProducts());
	}, [dispatch]);

	const [state, setState] = useState({
		name: "",
		price: "",
		description: "",
		image: "",
		state: "",
		category: ""

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
			state: "",
			category: ""
		});
		Swal.fire(`El producto ${state.name} se creo exitosamente!`);
		navigate('/productlist')
	};

	function handleSelect(e) {
		setState({
			...state,
			category: state.category.includes(e.target.value) ? state.category : [...state.category, e.target.value]
		})
	}

	return (
		<div class="form-body">
			<div class="row">
				<div class="form-holder">
					<div class="form-content">
						<div class="form-items">
							<h2>Creando producto</h2>
							<form class="requires-validation" onSubmit={handlerSubmit}>
								<div class="col-md-12">
									{/* <label className={styles.label}>Nombre:</label> */}
									<input
										class="form-control"
										type="text"
										name="name"
										onChange={handlerChange}
										placeholder={"Nombre del producto"}
										value={state.name}
										required
									/>
									{/* {errors.name && <p className={styles.error}>{errors.name}</p>} */}
								</div>
								<div class="col-md-12">
									{/* <label className={styles.label}>Descripcion:</label> */}
									<input
										class="form-control"
										type="text"
										name="description"
										onChange={handlerChange}
										placeholder={"Descripción del producto"}
										value={state.description}
										required
									/>
									{/* {errors.description && <p className={styles.error}>{errors.description}</p>} */}
								</div>
								<div class="col-md-12">
									{/* <label className={styles.label}>Precio:</label> */}
									<input
										class="form-control"
										type="text"
										name="price"
										onChange={handlerChange}
										placeholder={"$"}
										value={state.price}
										required
									/>
								</div>
								<div class="col-md-12">
									<input
										class="form-control"
										type='text'
										name='image'
										onChange={handlerChange}
										placeholder={'Link de la imagen'}
										value={state.image}
										required
									/>
								</div>
								<div class="col-md-12 mt-2">
									<input

										type='text'
										name='state'
										onChange={handlerChange}
										placeholder={'Estado del producto'}
										value={state.state}
										required
									/>

									{/* <input type='radio' value='Disponible' name='state' onChange={(e) => handleCheck(e)} />
									<label>Disponible</label>

									<input type='radio' value='No disponible' name='state' onChange={(e) => handleCheck(e)} />
									<label>No disponible</label> */}
									{/* <select onChange={(e) => handleCheck(e)}>
										<option value='default'disabled>Estado del producto</option>
										<option value='Disponible'>Disponible</option>
										<option value='No disponible'>No disponible</option>
									</select> */}
								</div>
								<div class="col-md-12">
									<select class="form-select mt-3" onChange={(e) => handleSelect(e)}>
										<option value='default'>Seleccione una categoria</option>
										<option value='Hamburguesa'>Hamburguesa</option>
										<option value='Wrap'>Wrap</option>
										<option value='Postre'>Postre</option>
										<option value='Bebida'>Bebida</option>
										<option value='Papas'>Papas</option>
										<option value='Snack'>Snack</option>
										<option value='Ensalada'>Ensalada</option>
									</select>
								</div >
								<div class="form-button mt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
									<button
										class="btn btn-primary"
										disabled={!state.name || !state.description || !state.price || !state.image || !state.state || !state.category}
										type="submit"
									>
										Crear producto
									</button>
									<Link to={'/adminprovisorio'}>
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
