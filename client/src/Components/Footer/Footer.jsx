import React from "react";
import styles from "./Footer.module.css";
import teesperamos from "../../assets/teEsperamos.png";
import redBoxes from "../../assets/redBoxes.png";
import contactanos from "../../assets/buttonContactanos.png";
import { BsWhatsapp, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<footer className={styles.containerInfo}>
				{/* <div>
                    <img src={logo} className={styles.logo} alt="logo gusto" />  
                </div>
                <div>
                    <h5 className={styles.titulo}>Informacion</h5>
                    <Link to='/sucursales'>
                        <p className={styles.type2}>Contáctanos</p>
                    </Link>
                    <Link to='https://wa.me/+543513287397' className={styles.type2}>
                        <p>WhatsApp</p>
                    </Link>
                    <a href='https://www.instagram.com/ganasdegusto/' className={styles.a}>Instagram</a>
                </div>
                <div>
                    <h5 className={styles.titulo}>Ayuda</h5>
                    <p className={styles.type2}>Factura Electrónica</p>
                    <p className={styles.type2}>Política de Privacidad</p>
                    <p className={styles.type2}>Trabaja con nosotros.</p>
                </div>
                <div>
                    <h5 className={styles.titulo}>GUSTO</h5>
                    <Link to='/' className={styles.type2}>
                        <p>Inicio</p>
                    </Link>
                    <Link to='/menu' className={styles.type2}>
                        <p>Menu</p>
                    </Link>
                    <Link to='/sucursales' className={styles.type2}>
                        <p>Sucursales</p>
                    </Link>
                </div> */}

				<div className={styles.footerContainer}>
					<div className={styles.footerInfo}>
						<div className={styles.footer1}>
							<h1>GUSTO</h1>
							<div className={styles.iconos}>
								<BsTwitter />
								<BsFacebook />
								<a
									href="https://www.instagram.com/ganasdegusto/"
									target="_blank"
									rel="noreferrer"
								>
									<BsInstagram />
								</a>
								<a
									href="https://wa.me/+543513287397"
									target="_blank"
									rel="noreferrer"
								>
									<BsWhatsapp />
								</a>
							</div>
						</div>
						<div className={styles.boxes}>
							<img src={redBoxes} alt="box" />
						</div>
						<div className={styles.footer2}>
							<div>
								Todos los derechos reservados.{" "}
								<strong style={{ fontWeight: "900" }}>GUSTO COMPANY.</strong>
							</div>
							<button
								style={{ border: "none", marginRight: "-.5rem" }}
								type="button"
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
								data-bs-whatever="@mdo"
							>
								<img src={contactanos} alt="xddd" />
							</button>
							<div
								class="modal fade"
								id="exampleModal"
								tabindex="-1"
								aria-labelledby="exampleModalLabel"
								aria-hidden="true"
							>
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h1 class="modal-title fs-5" id="exampleModalLabel">
												Formulario de contacto
											</h1>
											<button
												type="button"
												class="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
											></button>
										</div>
										<div class="modal-body">
											<form
												action="https://getform.io/f/9e90f343-83d2-4804-8fb9-1bf8089ba2e5"
												method="POST"
												encType="multipart/form-data"
											>
												<div class="mb-3">
													<label for="name" class="col-form-label">
														Nombre:
													</label>
													<input type="text" class="form-control" name="name" />
												</div>
												<div class="mb-3">
													<label for="email" class="col-form-label">
														Email:{" "}
													</label>
													<input
														type="text"
														class="form-control"
														name="email"
													/>
												</div>
												<div class="mb-3">
													<label for="mensaje" class="col-form-label">
														Mensaje:
													</label>
													<textarea
														class="form-control"
														name="mensaje"
													></textarea>
												</div>
												<div class="modal-footer">
													<button
														type="button"
														class="btn btn-secondary"
														data-bs-dismiss="modal"
													>
														Cerrar
													</button>
													<button type="submit" class="btn btn-primary">
														Enviar mensaje
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
