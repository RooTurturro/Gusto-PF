import React from "react";
import "./Card.css";
import burger from "../../assets/burger.png";
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Card({
	id,
	name,
	price,
	description,
	image,
	setDataToEdit,
}) {
	const dispatch = useDispatch();

	const trashEmpty = (id) => {
		dispatch(actions.deleteProducts(id));
		window.location.reload();
	};

	//verifica si esta en la ruta /adminprovisorio
	const isAdminRoute = window.location.pathname === "/adminprovisorio";

	return (
		<section className="light">
			<div >
				<div className="container py-2">
					<div className="postcard light red">
						<img className="postcard__img" src={image} alt="burger" />
						<div className="postcard__text t-dark">
							<Link to={`/products/${id}`} className="postcard__title red">{name}</Link>
							<div className="postcard__subtitle small">
								<time dateTime="2020-05-25 12:00:00"></time>
							</div>
							<div className="postcard__bar"></div>
							<div className="postcard__preview-txt"> {description}</div>
							<ul className="postcard__tagbox">
								<li className="tag__item">

									${price}
								</li>
							</ul>
							<div className='buttons'>
								{isAdminRoute && <button onClick={() => trashEmpty(id)}>Borrar</button>}
								{/* {isAdminRoute && (
									<button onClick={() => setDataToEdit(id)}>Editar</button>
								)} */}
							</div>
						</div>



					</div>
				</div>
			</div>


		</section>
	);
}
