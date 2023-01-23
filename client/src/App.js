import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/NavBar/Nav";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Sucursales from "./Components/Sucursales/Sucursales";
import FormCreate from "./Components/Form/FormCreate";
import Detail from "./Components/Detail/Detail";
import Perfil from "./Components/Perfil/Perfil";
import Historial from "./Components/Historial/Historial";
import UserHistory from "./Components/Historial/UserHistory";
import Carrito from "./Components/Carrito/Carrito";
import SenGrid from "./Components/SendGrid/SenGrid";
import ProductList from "./Components/ProductList/ProductList";
import ProfileUserForm from "./Components/Form/ProfileUserForm";
import LoginButton from "./Components/Login/LoginButton";
import Users from "./Components/Users/Users";
import CheckOutSucces from "./Components/CheckOutSucces/CheckOutSucces";
import Contacto from "./Components/Contacto/Contacto";
import Cloudinary from "./Components/Cloudinary/Cloudinary";

function App() {

	return (
		<div>
			<Routes>
				{/* hasta que tengamos la seccion del admin vamos a estar trabajando aca */}
				<Route exact path="/" element={<Home />} />
				<Route exact path="/users" element={<Users />} />
				<Route exact path="/productlist" element={<ProductList />} />
				<Route exact path="/sendgrid" element={<SenGrid />} />
				<Route exact path="/carrito" element={<Carrito />} />
				<Route exact path="/historial" element={<Historial />} />
				<Route exact path="/create" element={<FormCreate />} />
				<Route exact path="/menu" element={<Menu />} />
				<Route exact path="/products/:id" element={<Detail />} />
				<Route exact path="/perfil" element={<Perfil />} />
				<Route exact path="/sucursales" element={<Sucursales />} />
				<Route exact path="/login" element={<LoginButton />} />
				<Route exact path="/checkout" element={<CheckOutSucces />} />
				<Route exact path="/miscompras" element={<UserHistory />} />
				<Route exact path="/contacto" element={<Contacto />} />
				<Route
					exact
					path="/editarperfilusuario"
					element={<ProfileUserForm />}
				/>
				<Route exact path="/cloudinary" element={<Cloudinary />} />
			</Routes>
		</div>
	);

}

export default App;
