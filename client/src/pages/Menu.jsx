import React from "react";
import Card from "../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions";
import { useEffect } from "react";
// import Loading from "../Components/Loading/Loading";

const Menu = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	// const loading = useSelector((state) => state.loading);

	/*DEFINO ESTADOS LOCALES NECESARIOS**************************************/
	//DEFINO ESTE ESTADO PARA PODER INDICAR EL CAMBIO EN EL HANDLER Y *******/
	//RENDERIZAR ASÍ EL ORDENAMIENTO***
	// const [orden, setOrden] = useState("");

	/*USO EL USEEFFECT PARA RENDERIZAR SIEMPRE Y CADA VEZ QUE HAYA************/
	/*UN CAMBIO EN EL ARRAY DE COUNTRIES Y SI TENGO EL ARRAY DE COUNTRIES*****/
	/*CON ELEMENTOS, NO NECESITO RE-RENDERIZARLO, ESTO ES UTIL PARA MANTENER**/
	/*LOS FILTROS*************************************************************/
	useEffect(() => {
		if (products.length === 0) {
			dispatch(getAllProducts());
		}
	}, [dispatch, products.length]);

	return (
		<div>
			{products.length > 0 ? (
				products.map((el, i) => {
					return (
						<Card
							key={i}
							id={el.id}
							name={el.name}
							description={el.description}
							price={el.price}
						/>
					);
				})
			) : (
				<div>nada</div>
			)}
		</div>
	);
};

export default Menu;
