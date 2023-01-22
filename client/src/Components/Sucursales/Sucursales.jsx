import React from "react";
import sucursal1 from '../../assets/sucursal1.png'
import sucursal2 from '../../assets/sucursal2.jpg'
import sucursal3 from '../../assets/sucursal3.jpg'
import sucursal4 from '../../assets/sucursal4.jpg'
import Nav from "../NavBar/Nav";
import './Sucursales.css'

const Sucursales = () => {
	return (
		<>
			<Nav />
			<div className="container" style={{ marginTop: '10rem' }}>
				<div className="row">
					<div className="col-lg-6 mb-4">
						<div className="card h-100">
							<img className="card-img-top" src={sucursal1} alt="" />
							<div className="card-body">
								<h4 className="card-title">
									<p>Sucursal Rio cuarto</p>
								</h4>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
									odio, gravida pellentesque urna varius vitae.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mb-4">
						<div className="card h-100">
							<img className="card-img-top" src={sucursal2} alt="" />
							<div className="card-body">
								<h4 className="card-title">
									<p>Sucursal Córdoba</p>
								</h4>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
									odio, gravida pellentesque urna varius vitae.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mb-4">
						<div className="card h-100">
							<img className="card-img-top" src={sucursal3} alt="" />
							<div className="card-body">
								<h4 className="card-title">
									<p>Sucursal Buenos Aires</p>
								</h4>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
									odio, gravida pellentesque urna varius vitae.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mb-4">
						<div className="card h-100">
							<img className="card-img-top" src={sucursal4} alt="" />
							<div className="card-body">
								<h4 className="card-title">
									<p>Sucursal Santa fe</p>
								</h4>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
									odio, gravida pellentesque urna varius vitae.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
};

export default Sucursales;
