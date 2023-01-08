import React from "react";
import "./Card.css";
import burger from "../../assets/burger.png";
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Card({ id, name, price, description, image }) {
	const dispatch = useDispatch();

	const trashEmpty = (id) => {
		dispatch(actions.deleteProducts(id));
		console.log(id);
		window.location.reload();
	};

	return (
		<section className="light">
			<Link to={`/products/${id}`}>
				<div className="container py-2">
					<article className="postcard light red">
						<img className="postcard__img" src={burger} alt="burger" />
						<div className="postcard__text t-dark">
							<h1 className="postcard__title red">{name}</h1>
							<div className="postcard__subtitle small">
								<time dateTime="2020-05-25 12:00:00"></time>
							</div>
							<div className="postcard__bar"></div>
							<div className="postcard__preview-txt"> {description}</div>
							<ul className="postcard__tagbox">
								<li className="tag__item">
									<i className="fas fa-tag mr-2"></i>
									{price}
								</li>
							</ul>
						</div>
					</article>
				</div>
			</Link>
			<button onClick={() => trashEmpty(id)}>Borrar</button>
		</section>
	);
}
