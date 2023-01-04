import React from 'react'
import './Card.css'
import burger from './assets/burger.png'

export default function Card () {
  return (
    <section className="light">
	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle">MENU</div>

		
		<article className="postcard light red">
			<a className="postcard__img_link" href="!#">
				<img className="postcard__img" src={burger} alt="burger"/>	
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title red"><a href="!#">CHEESEBURGER</a></h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Double smash burger, cheddar, pickles and VICIO sauce accompanied with a brioche bun.</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>$1500</li>
				</ul>
			</div>
		</article>

    <article className="postcard light red">
			<a className="postcard__img_link" href="!#">
				<img className="postcard__img" src={burger} alt="burger"/>	
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title red"><a href="!#">CHEESEBURGER</a></h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Double smash burger, cheddar, pickles and VICIO sauce accompanied with a brioche bun.</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>$1500</li>
				</ul>
			</div>
		</article>

		<article className="postcard light red">
			<a className="postcard__img_link" href="!#">
				<img className="postcard__img" src={burger} alt="burger"/>	
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title red"><a href="!#">CHEESEBURGER</a></h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Double smash burger, cheddar, pickles and VICIO sauce accompanied with a brioche bun.</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>$1500</li>
				</ul>
			</div>
		</article>

		<article className="postcard light red">
			<a className="postcard__img_link" href="!#">
				<img className="postcard__img" src={burger} alt="burger"/>	
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title red"><a href="!#">CHEESEBURGER</a></h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Double smash burger, cheddar, pickles and VICIO sauce accompanied with a brioche bun.</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>$1500</li>
				</ul>
			</div>
		</article>



	</div>
</section>
  )
}
