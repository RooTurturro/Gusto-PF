import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav'
import PediYa from "./pages/PediYa";
import GustoBurgerClub from "./pages/GustoBurgerClub";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Sucursales from "./pages/Sucursales";
import TrabajaAca from "./pages/TrabajaAca";
import Nosotros from "./pages/Nosotros";
import AdminProvisorio from "./pages/AdminProvisorio";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          {/* hasta que tengamos la seccion del admin vamos a estar trabajando aca */}

          <Route exact path="/adminProvisorio" element={<AdminProvisorio />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pediya" element={<PediYa />} />
          <Route exact path="/gustoburgerclub" element={<GustoBurgerClub />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/sucursales" element={<Sucursales />} />
          <Route exact path="/trabajaaca" element={<TrabajaAca />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
