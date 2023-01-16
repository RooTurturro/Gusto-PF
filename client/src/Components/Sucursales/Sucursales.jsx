import React from "react";
import sucursal1 from '../../assets/sucursal1.png'
import sucursal2 from '../../assets/sucursal2.jpg'
import sucursal3 from '../../assets/sucursal3.jpg'
import sucursal4 from '../../assets/sucursal4.jpg'

const Sucursales = () => {
	return (

		<div style={{ color: 'black' }}  class="row row-cols-2 row-cols-md-2 g-4">
			<div class="row-cols-2">
				<div class="card">
					<img src={sucursal1} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Sucursal Rio cuarto</h5>
						<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
				</div>
			</div>
			<div class="row-cols-2">
				<div class="card">
					<img src={sucursal2} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Sucursal Córdoba</h5>
						<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
				</div>
			</div>
			<div class="row-cols-2">
				<div class="card">
					<img src={sucursal3} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Sucursal Buenos Aires</h5>
						<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
					</div>
				</div>
			</div>
			<div class="row-cols-2">
				<div class="card">
					<img src={sucursal4} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Sucursal Santa Fe</h5>
						<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Sucursales;
