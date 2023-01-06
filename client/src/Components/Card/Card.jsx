import React from 'react'
import './Card.css'
import burger from '../../assets/burger.png'


export default function Card({name, price, description, image}) {

	return (
		<section className="light">
			<div className="container py-2">
				<article className="postcard light red">
					<a className="postcard__img_link" href="!#">
						<img className="postcard__img" src={burger} alt="burger" />
					</a>
					<div className="postcard__text t-dark">
						<h1 className="postcard__title red"><a href="!#">{name}</a></h1>
						<div className="postcard__subtitle small">
							<time dateTime="2020-05-25 12:00:00">
							</time>
						</div>
						<div className="postcard__bar"></div>
						<div className="postcard__preview-txt"> {description}</div>
						<ul className="postcard__tagbox">
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>{price}</li>
						</ul>
					</div>
				</article>
			</div>

		</section>

	)
}
