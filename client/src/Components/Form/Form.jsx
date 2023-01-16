
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import './Form.css'

const Form = ({ product, editing }) => {
	const [state, setState] = useState(product);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		setState(product);
	}, [product]);


	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(
			editing ? actions.updateProduct(state) : actions.createProduct(state)
		);
		navigate(-1);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setState({ ...state, [name]: value });
	};

	return (
		<div className="form-body" >
			<div className="row">
				<div className="form-holder">
					<div className="form-content">
						<div className="form-items">
							{editing ? <h2>Editando producto</h2>: null}
							<form className="requires-validation" onSubmit={handleSubmit}>
								<div className="col-md-12">
									<input
										className="form-control"
										type="text"
										name="name"
										value={state.name}
										onChange={handleChange}
										placeholder={
											editing ? `Nombre actual: ${product.name}` : "Nombre del producto"}
									/>
								</div>
								<div className="col-md-12">
									<input
										className="form-control"
										type="text"
										name="description"
										value={state.description}
										onChange={handleChange}
										placeholder={
											editing
												? `Descripcion actual: ${product.description}`
												: "Descripcion del producto"
										}
									/>
								</div>
								<div className="col-md-12">
									<input
										className="form-control"
										type="text"
										name="price"
										value={state.price}
										onChange={handleChange}
										placeholder={
											editing ? `Precio actual: ${product.price}` : "Precio del producto"
										}
									/>
								</div>
								<div className="col-md-12">
									<input
										type="text"
										name="image"
										value={state.image}
										onChange={handleChange}
										placeholder={
											editing ? `Imagen actual: ${product.image}` : "Imagen del producto"
										}
									/>
								</div>
								<div className="col-md-12">
									<select name="state" value={state.state} onChange={handleChange}>
										<option value="">Selecciona un estado</option>
										<option value="activo">Activo</option>
										<option value="inactivo">Inactivo</option>
									</select>
								</div>
								<div className="col-md-12 mb-2">
										<option value="">Selecciona una categoria</option>
										<label onChange={handleChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Bebida' autoComplete="off" /> Bebida
										</label>
										<label onChange={handleChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Hamburguesa' autoComplete="off" /> Hamburguesa
										</label>
										<label onChange={handleChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Wrap' autoComplete="off" /> Wrap
										</label>
										<label onChange={handleChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Ensalada' autoComplete="off" /> Ensalada
										</label>
										<br />
										<label onChange={handleChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Postre' autoComplete="off" /> Postre
										</label>
										<label onChange={handleChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Snack' autoComplete="off" /> Snack
										</label>
										<label onChange={handleChange} className="btn btn-secondary">
											<input className="btn-check" type="radio" name="category" value='Papas' autoComplete="off" /> Papas
										</label>
								</div>
								<button className="btn btn-primary" type="submit">{editing ? "Actualizar" : "Crear"}</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Form;

