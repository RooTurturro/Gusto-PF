import React from "react";
import sucursal1 from '../../assets/sucursal1.png'
import sucursal2 from '../../assets/sucursal2.jpg'
import sucursal3 from '../../assets/sucursal3.jpg'
import sucursal4 from '../../assets/sucursal4.jpg'
import './Sucursales.css'

const Sucursales = () => {
	return (
		<div class="container" style={{marginTop:'20px'}}>
			<div class="row">
				<div class="col-lg-6 mb-4">
					<div class="card h-100">
						<img class="card-img-top" src={sucursal1} alt="" />
						<div class="card-body">
							<h4 class="card-title">
								<p>Sucursal Rio cuarto</p>
							</h4>
							<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
								odio, gravida pellentesque urna varius vitae.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6 mb-4">
					<div class="card h-100">
						<img class="card-img-top" src={sucursal2} alt="" />
						<div class="card-body">
							<h4 class="card-title">
								<p>Sucursal Córdoba</p>
							</h4>
							<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
								odio, gravida pellentesque urna varius vitae.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6 mb-4">
					<div class="card h-100">
						<img class="card-img-top" src={sucursal3} alt="" />
						<div class="card-body">
							<h4 class="card-title">
								<p>Sucursal Buenos Aires</p>
							</h4>
							<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
								odio, gravida pellentesque urna varius vitae.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6 mb-4">
					<div class="card h-100">
						<img class="card-img-top" src={sucursal4} alt="" />
						<div class="card-body">
							<h4 class="card-title">
								<p>Sucursal Santa fe</p>
							</h4>
							<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
								odio, gravida pellentesque urna varius vitae.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
};

export default Sucursales;
