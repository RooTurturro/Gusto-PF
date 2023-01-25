import React from "react";
import "./Comentarios.css";
import { BsStar } from "react-icons/bs";

const Comentarios = () => {
	return (
		<div className="container mt-5 mb-5">
			<div className="row g-2">
				<div className="col-md-4">
					<div className="card2 p-3 text-center px-4">
						<div className="user-image">
							<img
								src="https://cdn.resfu.com/img_data/players/medium/234474.jpg?size=300x&lossy=1"
								className="rounded-circle"
								width="80"
								alt="xd"
							/>
						</div>
						<div className="user-content">
							<h5 className="mb-0 customName">TOBÍAS AZCURRA</h5>

							<p>Comi en gusto y gane el quini 6. Aguante Gusto!</p>
						</div>
						<div className="ratings">
							<i className="fa fa-star">
								<BsStar />
							</i>
							<i className="fa fa-star">
								<BsStar />
							</i>
							<i className="fa fa-star">
								<BsStar />
							</i>
							<i className="fa fa-star">
								<BsStar />
							</i>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card2 p-3 text-center px-4">
						<div className="user-image">
							<img
								src="https://i.pinimg.com/originals/d1/7a/23/d17a235b263145dfcfded0b15ae6a97c.jpg"
								className="rounded-circle"
								width="80"
								alt="xd"
							/>
						</div>
						<div className="user-content">
							<h5 className="mb-0 customName">LARA MOYANO</h5>
							<p>
								Excelentes hamburguesas, muy grandes, diferentes variedades!
								Calidad y precio justo! El lugar impecable !
							</p>
						</div>
						<div className="ratings">
							<i className="fa fa-star">
								<BsStar />
							</i>
							<i className="fa fa-star">
								<BsStar />
							</i>
							<i className="fa fa-star">
								<BsStar />
							</i>
							<i className="fa fa-star">
								<BsStar />
							</i>
							<i className="fa fa-star">
								<BsStar />
							</i>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card2 p-3 text-center px-4">
						<div className="user-image">
							<img
								src="https://cdn.resfu.com/img_data/players/medium/23569.jpg?size=300x&lossy=1"
								className="rounded-circle pictureCustom"
								width="80"
								alt="xd"
							/>
						</div>
						<div className="user-content">
							<h5 className="mb-0 customName ">EMI</h5>
							<p>
								La verdad que quede muy encantado con el lugar , la atención del
								personal fascinante , muy recomendado , un éxito
							</p>
						</div>

						<div className="ratings">
							<i className="fa fa-star">
								<BsStar />
							</i>
							<i className="fa fa-star">
								<BsStar />
							</i>
							<i className="fa fa-star">
								<BsStar />
							</i>
							<i className="fa fa-star">
								<BsStar />
							</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comentarios;
