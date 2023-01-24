import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllProducts,
	filterProductsByCategories,
} from "../../redux/actions";
import { addToCart } from "../../redux/shoppingActions";
import "./Menu.css";
import burger from "../../assets/burger.png";
import bebidas from "../../assets/bebidas.png";
import batidos from "../../assets/batidos.png";
import postres from "../../assets/postres.png";
import combos from "../../assets/combos.png";
import Spinner from "react-bootstrap/Spinner";
import Nav from "../NavBar/Nav";
import redBoxesLittle from "../../assets/redBoxesLittle.png";

const Menu = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);

	useEffect(() => {
		if (products.length === 0) {
			dispatch(getAllProducts());
		}
	}, [dispatch, products.length]);

	function handleFilterProductsByCategories(e) {
		e.preventDefault(e);
		dispatch(filterProductsByCategories(e.target.name));
	}

	return (
		<>
			<Nav />
			<div className="menu-body">
				<div className="navContainer">
					<div style={{ marginLeft: ".9rem" }}>
						<div
							style={{ display: "flex", alignItems: "baseline", gap: ".8rem" }}
						>
							<h1
								className="recoleta"
								style={{ marginLeft: "2rem", fontSize: "3rem" }}
							>
								Elegí lo tuyo{" "}
							</h1>
						</div>
						<img className="flechas" src={redBoxesLittle} alt="flechas" />
					</div>
					<ul className="listGroup">
						<div className="listGroupItem">
							<img
								name="Hamburguesa"
								className="categoryImage"
								src={burger}
								alt="not found"
								onClick={(e) => handleFilterProductsByCategories(e)}
							/>
							<strong>Hamburguesas</strong>
						</div>
						<div className="listGroupItem">
							<img
								name="Bebida"
								className="categoryImage"
								src={bebidas}
								alt="not found"
								onClick={(e) => handleFilterProductsByCategories(e)}
							/>
							<strong>Bebidas</strong>
						</div>
						<div className="listGroupItem" style={{ marginLeft: "-2rem" }}>
							<img
								name="Batidos"
								className="categoryImage"
								src={batidos}
								alt="not found"
								onClick={(e) => handleFilterProductsByCategories(e)}
							/>
							<strong>Batidos</strong>
						</div>
						<div className="listGroupItem" style={{ marginRight: "1.5rem" }}>
							<img
								name="Postre"
								className="categoryImage"
								src={postres}
								style={{ width: "7rem" }}
								alt="not found"
								onClick={(e) => handleFilterProductsByCategories(e)}
							/>
							<strong>Postres</strong>
						</div>
						<div className="listGroupItem">
							<img
								name="Combos"
								className="categoryImage"
								src={combos}
								alt="not found"
								onClick={(e) => handleFilterProductsByCategories(e)}
							/>
							<strong>Combos</strong>
						</div>
					</ul>
				</div>
				<div style={{ marginLeft: "0.9rem" }}>
					<h1
						className="recoleta"
						style={{ marginLeft: "2rem", fontSize: "3rem" }}
					>
						Productos{" "}
					</h1>
					<img className="flechas" src={redBoxesLittle} alt="flechas" />
				</div>
				<div className="cardContainer">
					{products?.length > 0 ? (
						products?.map((e) => {
							if (e.state) {
								return (
									<Card
										description={e.description}
										id={e.id}
										key={e.id}
										name={e.name}
										price={e.price}
										addToCart={() => dispatch(addToCart(e.id))}
										image={e.image}
										category={e.category}
									/>
								);
							}
						})
					) : (
						<Spinner animation="border" variant="danger" />
					)}
				</div>
			</div>
		</>
	);
};

export default Menu;
